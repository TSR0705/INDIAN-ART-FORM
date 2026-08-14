import React from 'react';
import { Sparkles, ArrowRightLeft } from 'lucide-react';

interface RajputVsMughalProps {
  matrix: Array<{ feature: string; mughal: string; rajput: string }>;
}

export const RajputVsMughal: React.FC<RajputVsMughalProps> = ({ matrix }) => {
  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
          <ArrowRightLeft className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">Mughal vs Rajput Court Painting: Stylistic Contrast</h4>
          <p className="text-xs text-slate-400 font-mono">Two complementary visual philosophies in Early Modern India</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {matrix.map((row, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
          >
            <div className="md:col-span-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                {row.feature}
              </span>
            </div>

            <div className="md:col-span-2 p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-1">
                Imperial Mughal Court Tradition
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{row.mughal}</p>
            </div>

            <div className="md:col-span-2 p-3.5 rounded-lg bg-rose-950/30 border border-rose-500/30">
              <span className="text-[10px] font-mono text-rose-400 font-bold uppercase block mb-1">
                Rajput / Rajasthan Regional Schools
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{row.rajput}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RajputVsMughal;
