import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import ExhibitionSequence from './ExhibitionSequence';
import TimelineTracker from './TimelineTracker';
import ExhibitionControls from './ExhibitionControls';
import CompareStudio from '@/components/CompareStudio';
import IndiaMap from '@/components/IndiaMap';
import QuizModal from '@/components/QuizModal';
import { ARTIFACTS } from '@/data/artifacts';
import { droneSynth } from '@/utils/audioSynth';

export const ExhibitionShell: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [globalProgress, setGlobalProgress] = useState<number>(0);

  // Modals State
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll & Instant Auto-Start Audio
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 1. Attempt immediate audio start on component mount
    droneSynth.start();

    // 2. Global capture listeners for instant browser autoplay unlock on FIRST permitted user interaction
    const unlockAutoplayAudio = () => {
      droneSynth.start();
      window.removeEventListener('click', unlockAutoplayAudio);
      window.removeEventListener('scroll', unlockAutoplayAudio);
      window.removeEventListener('mousemove', unlockAutoplayAudio);
      window.removeEventListener('pointerdown', unlockAutoplayAudio);
      window.removeEventListener('touchstart', unlockAutoplayAudio);
      window.removeEventListener('keydown', unlockAutoplayAudio);
    };

    window.addEventListener('click', unlockAutoplayAudio, { once: true });
    window.addEventListener('scroll', unlockAutoplayAudio, { once: true });
    window.addEventListener('mousemove', unlockAutoplayAudio, { once: true });
    window.addEventListener('pointerdown', unlockAutoplayAudio, { once: true });
    window.addEventListener('touchstart', unlockAutoplayAudio, { once: true });
    window.addEventListener('keydown', unlockAutoplayAudio, { once: true });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Lock body scroll & pause Lenis whenever ANY modal is open
  const isAnyModalOpen = isMapOpen || isCompareOpen || isQuizOpen;

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
      if (lenisRef.current) lenisRef.current.stop();
    } else {
      document.body.style.overflow = '';
      if (lenisRef.current) lenisRef.current.start();
    }
  }, [isAnyModalOpen]);

  // Scroll smoothly to a specific artifact scene by index
  const handleSelectArtifact = (index: number) => {
    setActiveIdx(index);
    const targetElement = document.getElementById(`scene-${ARTIFACTS[index].id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only show right timeline tracker when inside the artifact scenes section
  const isTrackerVisible = globalProgress > 0.03 && globalProgress < 0.95;

  return (
    <div className="relative min-h-screen bg-[#07080c] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Right Chronological Timeline Rail */}
      <TimelineTracker
        activeIdx={activeIdx}
        globalProgress={globalProgress}
        onSelectArtifact={handleSelectArtifact}
        isVisible={isTrackerVisible}
      />

      {/* 2. Top Right Floating Explore Button */}
      <ExhibitionControls
        onOpenMap={() => setIsMapOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* 3. Main Exhibition Scroll Sequence */}
      <ExhibitionSequence
        onOpenMap={() => setIsMapOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onSelectArtifact={handleSelectArtifact}
        onProgressUpdate={(idx, prog) => {
          setActiveIdx(idx);
          setGlobalProgress(prog);
        }}
      />

      {/* 4. Supporting Overlay Modals (With Scroll Isolation) */}
      {isMapOpen && (
        <IndiaMap
          onClose={() => setIsMapOpen(false)}
          onSelectArtifact={(id) => {
            setIsMapOpen(false);
            const idx = ARTIFACTS.findIndex(a => a.id === id);
            if (idx !== -1) handleSelectArtifact(idx);
          }}
        />
      )}

      {isCompareOpen && (
        <CompareStudio
          onClose={() => setIsCompareOpen(false)}
          onSelectArtifact={(id) => {
            setIsCompareOpen(false);
            const idx = ARTIFACTS.findIndex(a => a.id === id);
            if (idx !== -1) handleSelectArtifact(idx);
          }}
        />
      )}

      {isQuizOpen && (
        <QuizModal onClose={() => setIsQuizOpen(false)} />
      )}
    </div>
  );
};

export default ExhibitionShell;
