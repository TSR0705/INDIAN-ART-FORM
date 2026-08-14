import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRightLeft, Sparkles } from 'lucide-react';
import { COMPARISONS, ComparisonItem } from '@/data/comparisons';
import { ARTIFACTS } from '@/data/artifacts';

interface CompareStudioProps {
  onClose: () => void;
  onSelectArtifact: (id: string) => void;
}

export const CompareStudio: React.FC<CompareStudioProps> = ({
  onClose,
  onSelectArtifact,
}) => {
  const [activeCompIdx, setActiveCompIdx] = useState<number>(0);
  const currentComp: ComparisonItem = COMPARISONS[activeCompIdx] || COMPARISONS[0];

  const art1 = ARTIFACTS.find(a => a.id === currentComp.artifact1Id);
  const art2 = ARTIFACTS.find(a => a.id === currentComp.artifact2Id);

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none"
    >
      <div className="relative w-full max-w-5xl bg-slate-900/95 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title Header */}
        <div className="space-y-1 pr-12">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-xl sm:text-2xl text-slate-100 gold-gradient-text">
              CROSS-PERIOD COMPARATIVE STUDIO
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Analyzing artistic evolutions, techniques, and philosophical shifts across epochs
          </p>
        </div>

        {/* Matrix Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {COMPARISONS.map((comp, idx) => (
            <button
              key={comp.id}
              onClick={() => setActiveCompIdx(idx)}
              className={`p-3 rounded-2xl text-xs font-mono font-bold text-left border transition-all cursor-pointer ${
                activeCompIdx === idx
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:border-amber-500/40 hover:text-slate-200'
              }`}
            >
              <span className="text-[10px] uppercase block opacity-70 mb-0.5">Matrix Focus</span>
              <span className="truncate block font-sans text-xs">{comp.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Comparison Overview Banner */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-center">
          <h3 className="font-cinzel font-bold text-base sm:text-lg text-amber-300">
            {currentComp.title}
          </h3>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
            {currentComp.subtitle}
          </span>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
            {currentComp.narrative}
          </p>
        </div>

        {/* Side-by-Side Artwork Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {art1 && (
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 flex flex-col items-center text-center">
              <div className="h-44 w-full flex items-center justify-center p-2 bg-[#07080c] rounded-xl">
                <img src={art1.image.src} alt={art1.title} className="h-full w-auto object-contain" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase block">{art1.displayDate} • {art1.era}</span>
                <h4 className="font-cinzel font-bold text-sm text-slate-100">{art1.title}</h4>
                <span className="text-xs text-slate-400 font-mono block">{art1.medium}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectArtifact(art1.id);
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
              >
                Inspect Artwork →
              </button>
            </div>
          )}

          {art2 && (
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 flex flex-col items-center text-center">
              <div className="h-44 w-full flex items-center justify-center p-2 bg-[#07080c] rounded-xl">
                <img src={art2.image.src} alt={art2.title} className="h-full w-auto object-contain" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase block">{art2.displayDate} • {art2.era}</span>
                <h4 className="font-cinzel font-bold text-sm text-slate-100">{art2.title}</h4>
                <span className="text-xs text-slate-400 font-mono block">{art2.medium}</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectArtifact(art2.id);
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
              >
                Inspect Artwork →
              </button>
            </div>
          )}
        </div>

        {/* Matrix Analysis Table */}
        <div className="border border-slate-800 rounded-2xl overflow-hidden text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-amber-400 font-mono border-b border-slate-800">
                <th className="p-3">CRITERION</th>
                <th className="p-3">{art1?.shortTitle}</th>
                <th className="p-3">{art2?.shortTitle}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/60 text-slate-300 font-sans">
              {currentComp.table.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/40">
                  <td className="p-3 font-mono text-amber-300 font-bold">{row.criterion}</td>
                  <td className="p-3">{row.val1}</td>
                  <td className="p-3">{row.val2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareStudio;
