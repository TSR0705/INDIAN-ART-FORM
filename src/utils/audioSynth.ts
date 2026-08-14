// Web Audio API Tanpura / Ambient Drone Synthesizer

class IndianDroneSynth {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
  }

  public start() {
    this.init();
    if (!this.ctx || this.isPlaying) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    this.gainNode.connect(this.ctx.destination);

    // Fundamental frequencies for Sa (C# / 138.59 Hz) and Pa (G# / 207.65 Hz)
    const baseFreq = 138.59;
    const frequencies = [
      baseFreq, // Sa
      baseFreq * 1.002, // Subtle chorusing
      baseFreq * 1.5, // Pa (Fifth)
      baseFreq * 2.0, // Upper Sa (Octave)
      baseFreq * 0.5 // Deep Sub Sa
    ];

    this.oscillators = frequencies.map((freq, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i === 2 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

      const oscGain = this.ctx!.createGain();
      oscGain.gain.setValueAtTime(i === 4 ? 0.3 : 0.18, this.ctx!.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode!);
      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.isPlaying || !this.gainNode) return;

    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1600);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const droneSynth = new IndianDroneSynth();
