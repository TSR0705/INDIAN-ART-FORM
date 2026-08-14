import React, { useState } from 'react';
import { Eye, Sparkles, BookOpen } from 'lucide-react';

interface BuddhaIconographyProps {
  elements: Array<{ name: string; trait: string; meaning: string }>;
}

export const BuddhaIconography: React.FC<BuddhaIconographyProps> = ({ elements }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">Read the Sculpture: Gupta Sacred Anatomy</h4>
          <p className="text-xs text-slate-400 font-mono">The 32 Mahapurusha Lakshanas codified during the Classical Golden Age</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Anatomical Feature Selector */}
        <div className="space-y-2">
          {elements.map((elem, idx) => (
            <button
              key={elem.name}
              onClick={() => setSelectedIdx(idx)}
              className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                idx === selectedIdx
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <span className="text-xs font-semibold">{elem.name}</span>
              <span className="text-[10px] font-mono opacity-80">Explore →</span>
            </button>
          ))}
        </div>

        {/* Deep Meaning Feature Display */}
        <div className="md:col-span-2 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
            Sculptural Iconography
          </span>
          <h5 className="text-2xl font-bold font-cinzel text-slate-100 mb-3">
            {elements[selectedIdx].name}
          </h5>

          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase mb-1">Visual Characteristic</span>
              <p className="text-sm text-slate-200 font-medium">{elements[selectedIdx].trait}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <span className="text-[11px] font-mono text-amber-400 block uppercase mb-1">Spiritual & Philosophical Meaning</span>
              <p className="text-sm text-amber-100 leading-relaxed font-sans">{elements[selectedIdx].meaning}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddhaIconography;
