import React, { useState } from 'react';
import { Printer, ChevronRight, Sparkles } from 'lucide-react';

interface RaviVarmaPressProps {
  phases: Array<{ stage: string; desc: string }>;
}

export const RaviVarmaPress: React.FC<RaviVarmaPressProps> = ({ phases }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
          <Printer className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">The Oleograph Revolution: Art → Print → Mass Culture</h4>
          <p className="text-xs text-slate-400 font-mono">How the 1894 steam press at Malavli transformed Indian sacred and secular visuality</p>
        </div>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
        {phases.map((p, idx) => (
          <button
            key={p.stage}
            onClick={() => setCurrentPhase(idx)}
            className={`p-3 rounded-xl text-left transition-all border ${
              idx === currentPhase
                ? 'bg-blue-600 text-white border-blue-400 font-bold shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono uppercase block text-blue-300">Phase {idx + 1}</span>
            <span className="text-xs font-bold block mt-1 line-clamp-1">{p.stage}</span>
          </button>
        ))}
      </div>

      {/* Stage Content Showcase */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 shadow-xl flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-blue-500/20 flex-shrink-0">
          {currentPhase + 1}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
            Industrial Transition Stage {currentPhase + 1}
          </span>
          <h5 className="text-2xl font-bold font-cinzel text-slate-100 mt-1 mb-2">
            {phases[currentPhase].stage}
          </h5>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            {phases[currentPhase].desc}
          </p>
        </div>
        <button
          onClick={() => setCurrentPhase(prev => (prev + 1) % phases.length)}
          className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg flex-shrink-0"
        >
          <span>Next Stage</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RaviVarmaPress;
