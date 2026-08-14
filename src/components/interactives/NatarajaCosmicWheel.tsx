import React, { useState } from 'react';
import { Compass, Flame, Shield, Sparkles, RefreshCw } from 'lucide-react';

interface NatarajaCosmicWheelProps {
  symbols: Array<{ act: string; symbol: string; desc: string }>;
}

export const NatarajaCosmicWheel: React.FC<NatarajaCosmicWheelProps> = ({ symbols }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">The Cosmic Dance Wheel (Panchakritya)</h4>
          <p className="text-xs text-slate-400 font-mono">The five cosmic activities of Shiva's Ananda Tandava</p>
        </div>
      </div>

      {/* 5-fold Cosmic Acts Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {symbols.map((item, idx) => (
          <button
            key={item.act}
            onClick={() => setActiveIdx(idx)}
            className={`p-3 rounded-xl text-center transition-all border ${
              idx === activeIdx
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono uppercase block text-amber-300 group-hover:text-slate-950">
              {item.act.split(' ')[0]}
            </span>
            <span className="text-xs font-bold block mt-1">{item.symbol}</span>
          </button>
        ))}
      </div>

      {/* Cosmic Meaning Spotlight */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full border-4 border-amber-400/80 flex items-center justify-center text-amber-400 text-2xl font-bold bg-amber-500/10 shadow-lg shadow-amber-500/20 flex-shrink-0 animate-pulse">
          ☸
        </div>
        <div className="flex-1 text-center sm:text-left">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            Cosmic Function: {symbols[activeIdx].act}
          </span>
          <h5 className="text-2xl font-bold font-cinzel text-slate-100 mt-1 mb-2">
            {symbols[activeIdx].symbol}
          </h5>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">
            {symbols[activeIdx].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NatarajaCosmicWheel;
