import React, { useState } from 'react';
import { Crown, Sparkles, UserCheck } from 'lucide-react';

interface MughalFamilyTreeProps {
  figures: Array<{ name: string; role: string; relation: string }>;
}

export const MughalFamilyTree: React.FC<MughalFamilyTreeProps> = ({ figures }) => {
  const [activeFigure, setActiveFigure] = useState(2); // Humayun by default

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
          <Crown className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">Mughal Dynastic Tree & Figure Spotter</h4>
          <p className="text-xs text-slate-400 font-mono">Four generations united on a single master canvas (1550–1650 CE)</p>
        </div>
      </div>

      {/* Royal Lineage Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
        {figures.map((fig, idx) => (
          <button
            key={fig.name}
            onClick={() => setActiveFigure(idx)}
            className={`p-3 rounded-xl text-left transition-all border ${
              idx === activeFigure
                ? 'bg-emerald-600 text-white border-emerald-400 font-bold shadow-lg shadow-emerald-600/30 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono uppercase block text-emerald-300 opacity-90">
              Generational Node {idx + 1}
            </span>
            <span className="text-xs font-bold block mt-1 truncate">{fig.name}</span>
          </button>
        ))}
      </div>

      {/* Active Sovereign Detail */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-xl">
        <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
          Historical Profile
        </span>
        <h5 className="text-2xl font-bold font-cinzel text-slate-100 mb-1">
          {figures[activeFigure].name}
        </h5>
        <span className="text-xs font-semibold text-emerald-300 font-mono block mb-3">
          {figures[activeFigure].role}
        </span>
        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          {figures[activeFigure].relation}
        </p>
      </div>
    </div>
  );
};

export default MughalFamilyTree;
