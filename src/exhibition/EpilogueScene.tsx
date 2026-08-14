import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRightLeft, Award } from 'lucide-react';

interface EpilogueSceneProps {
  onOpenMap: () => void;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
}

export const EpilogueScene: React.FC<EpilogueSceneProps> = ({
  onOpenMap,
  onOpenCompare,
  onOpenQuiz,
}) => {
  return (
    <section className="relative w-full min-h-screen bg-[#07080c] text-slate-100 flex flex-col items-center justify-center p-8 overflow-hidden select-none border-t border-amber-500/20">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full text-center z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-300 uppercase tracking-widest"
        >
          <span>Exhibition Epilogue</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-cinzel font-bold tracking-tight gold-gradient-text"
        >
          THE STORY CONTINUES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl sm:text-3xl text-slate-300 font-cormorant italic max-w-2xl mx-auto leading-relaxed"
        >
          "A visual language does not end. It changes."
        </motion.p>

        {/* Metadata Summary Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-4 border-y border-slate-800 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-6"
        >
          <span>2500 BCE → 1935 CE</span>
          <span>•</span>
          <span>8 CANONICAL MASTERPIECES</span>
          <span>•</span>
          <span>MUSEUM SOURCES VERIFIED</span>
        </motion.div>

        {/* Supporting Overlays Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <button
            onClick={onOpenMap}
            className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-amber-300 flex items-center gap-2 transition-all cursor-pointer shadow-xl"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Interactive Heritage Map</span>
          </button>

          <button
            onClick={onOpenCompare}
            className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-amber-300 flex items-center gap-2 transition-all cursor-pointer shadow-xl"
          >
            <ArrowRightLeft className="w-4 h-4 text-amber-400" />
            <span>Compare Studio</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Curator Challenge</span>
          </button>
        </motion.div>

        {/* Museum Credits Attribution */}
        <div className="pt-8 text-[11px] font-mono text-slate-500">
          Digital Humanities Museum Initiative • National Museum New Delhi • Sarnath Archaeological Museum • The British Museum • V&A Museum • NGMA New Delhi
        </div>
      </div>
    </section>
  );
};

export default EpilogueScene;
