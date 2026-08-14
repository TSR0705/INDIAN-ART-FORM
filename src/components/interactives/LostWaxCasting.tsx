import React, { useState } from 'react';
import { Flame, Sparkles, ChevronRight, CheckCircle2, RefreshCw } from 'lucide-react';

interface LostWaxCastingProps {
  steps: Array<{ step: number; name: string; desc: string }>;
}

export const LostWaxCasting: React.FC<LostWaxCastingProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-cinzel font-bold text-lg text-slate-100">Lost-Wax Casting (Cire-Perdue)</h4>
            <p className="text-xs text-slate-400 font-mono">Pioneered 4,500 years ago in the Indus Valley</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentStep(0)}
          className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Restart
        </button>
      </div>

      {/* Step Tracker Bar */}
      <div className="grid grid-cols-6 gap-1.5 mb-6">
        {steps.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setCurrentStep(idx)}
            className={`py-2 px-1 rounded-lg text-center transition-all ${
              idx === currentStep
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30 scale-105'
                : idx < currentStep
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono block">Step {s.step}</span>
            <span className="text-[11px] font-semibold truncate block">{s.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase */}
      <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-3xl font-black text-slate-950 shadow-xl shadow-amber-500/20 flex-shrink-0">
          {steps[currentStep].step}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            Phase {steps[currentStep].step} of 6
          </span>
          <h5 className="text-xl font-bold font-cinzel text-slate-100 mt-1 mb-2">
            {steps[currentStep].name}
          </h5>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            {steps[currentStep].desc}
          </p>
        </div>
        <button
          onClick={() => setCurrentStep(prev => (prev + 1) % steps.length)}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg flex-shrink-0"
        >
          <span>Next Step</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LostWaxCasting;
