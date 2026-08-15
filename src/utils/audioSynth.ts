// Singleton Museum Ambient Audio Engine (/leberch-indian-440089.mp3)
// Automatic Start on Load & Global Capture Auto-Unlock

class MuseumAudioTrack {
  private static instance: MuseumAudioTrack;
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isStoppedBySessionUser: boolean = false;
  private defaultVolume: number = 0.35;
  private duckedVolume: number = 0.08;
  private isDucked: boolean = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.init();
      this.bindAutoUnlockListeners();
    }
  }

  public static getInstance(): MuseumAudioTrack {
    if (!MuseumAudioTrack.instance) {
      MuseumAudioTrack.instance = new MuseumAudioTrack();
    }
    return MuseumAudioTrack.instance;
  }

  private init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio('/leberch-indian-440089.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = this.defaultVolume;
    }
  }

  public async start(): Promise<boolean> {
    this.init();
    if (!this.audio) return false;
    if (this.isStoppedBySessionUser) return false;
    if (this.isPlaying && !this.audio.paused) return true;

    try {
      this.audio.volume = this.isDucked ? this.duckedVolume : this.defaultVolume;
      const promise = this.audio.play();
      if (promise !== undefined) {
        await promise;
        this.isPlaying = true;
        return true;
      }
      return false;
    } catch (err) {
      // Browser autoplay policy might delay un-gestured play until first movement
      this.isPlaying = false;
      return false;
    }
  }

  public stopManual() {
    this.isStoppedBySessionUser = true;
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
  }

  public async startManual(): Promise<boolean> {
    this.isStoppedBySessionUser = false;
    return await this.start();
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stopManual();
      return false;
    } else {
      return await this.startManual();
    }
  }

  public duck() {
    this.isDucked = true;
    if (this.audio) {
      this.audio.volume = this.duckedVolume;
    }
  }

  public unduck() {
    this.isDucked = false;
    if (this.audio) {
      this.audio.volume = this.defaultVolume;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Bind capture listeners to immediately trigger audio play on the very first pixel move, scroll, or tap after reload
  private bindAutoUnlockListeners() {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      this.start().then((started) => {
        if (started) {
          window.removeEventListener('mousemove', unlock);
          window.removeEventListener('mouseenter', unlock);
          window.removeEventListener('scroll', unlock);
          window.removeEventListener('wheel', unlock);
          window.removeEventListener('pointerdown', unlock);
          window.removeEventListener('touchstart', unlock);
          window.removeEventListener('keydown', unlock);
          window.removeEventListener('click', unlock);
        }
      });
    };

    // Attempt direct play immediately
    this.start();

    // Listen to all interaction events
    window.addEventListener('mousemove', unlock, { capture: true, passive: true });
    window.addEventListener('mouseenter', unlock, { capture: true, passive: true });
    window.addEventListener('scroll', unlock, { capture: true, passive: true });
    window.addEventListener('wheel', unlock, { capture: true, passive: true });
    window.addEventListener('pointerdown', unlock, { capture: true, passive: true });
    window.addEventListener('touchstart', unlock, { capture: true, passive: true });
    window.addEventListener('keydown', unlock, { capture: true, passive: true });
    window.addEventListener('click', unlock, { capture: true, passive: true });
  }
}

export const droneSynth = MuseumAudioTrack.getInstance();
