import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { droneSynth } from '@/utils/audioSynth';

interface OpeningSceneProps {
  onStartScroll?: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onStartScroll }) => {
  const handleStageClick = () => {
    droneSynth.start();
    if (onStartScroll) onStartScroll();
  };

  return (
    <section
      onClick={handleStageClick}
      className="relative w-full h-screen bg-[#07080c] text-slate-100 flex flex-col items-center justify-between p-8 overflow-hidden select-none cursor-pointer"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Metadata Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pt-6 text-center z-10"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/30 uppercase">
          c. 2500 BCE
        </span>
      </motion.div>

      {/* Main Title Centerpiece */}
      <div className="text-center z-10 max-w-4xl space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">Digital Humanities Exhibition</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-cinzel font-black tracking-tight leading-[1.05]"
        >
          INDIAN ART <br />
          <span className="gold-gradient-text">THROUGH TIME</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.9 }}
          className="text-lg sm:text-2xl text-slate-300 font-cormorant italic max-w-2xl mx-auto"
        >
          4,500 Years of Artistic Traditions & Masterpieces (c. 2500 BCE – 1935 CE)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 shadow-2xl"
        >
          <span>8 CANONICAL ARTIFACTS</span>
          <span>•</span>
          <span>4,500 YEARS</span>
          <span>•</span>
          <span>MUSEUM SOURCES</span>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.5 }}
        className="pb-8 text-center z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest animate-pulse">
          Scroll to Enter Exhibition
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-slate-900 border border-slate-800 text-amber-400 shadow-md"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OpeningScene;
