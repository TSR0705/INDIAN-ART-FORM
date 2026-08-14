import React, { useState } from 'react';
import { Scale, CheckCircle2, ArrowRightLeft } from 'lucide-react';

interface StateEmblemCompareProps {
  comparisons: Array<{ element: string; original: string; emblem: string }>;
}

export const StateEmblemCompare: React.FC<StateEmblemCompareProps> = ({ comparisons }) => {
  const [viewMode, setViewMode] = useState<'split' | 'original' | 'emblem'>('split');

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            <span>Ancient Sarnath Capital vs Modern State Emblem (1950)</span>
          </h4>
          <p className="text-xs text-slate-400 font-mono">How a 3rd-century BCE imperial monument became India's democratic seal</p>
        </div>

        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-end sm:self-auto">
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'split' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'original' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sarnath Original
          </button>
          <button
            onClick={() => setViewMode('emblem')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'emblem' ? 'bg-amber-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            National Emblem
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 gap-3">
        {comparisons.map((c, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
          >
            <div className="md:col-span-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                {c.element}
              </span>
            </div>

            {(viewMode === 'split' || viewMode === 'original') && (
              <div className={`p-3 rounded-lg bg-slate-950/70 border border-slate-800 ${viewMode === 'split' ? 'md:col-span-1' : 'md:col-span-2'}`}>
                <span className="text-[10px] font-mono text-amber-400/80 uppercase block mb-1">Mauryan Original (c. 250 BCE)</span>
                <p className="text-xs text-slate-200">{c.original}</p>
              </div>
            )}

            {(viewMode === 'split' || viewMode === 'emblem') && (
              <div className={`p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 ${viewMode === 'split' ? 'md:col-span-1' : 'md:col-span-2'}`}>
                <span className="text-[10px] font-mono text-amber-300 uppercase block mb-1">State Emblem of India (1950)</span>
                <p className="text-xs text-amber-100 font-medium">{c.emblem}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateEmblemCompare;
