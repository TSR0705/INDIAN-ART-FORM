import React, { useState } from 'react';
import { Palette, Sparkles, Layers } from 'lucide-react';

interface SherGilModernismProps {
  aspects: Array<{ aspect: string; value: string; desc: string }>;
}

export const SherGilModernism: React.FC<SherGilModernismProps> = ({ aspects }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const swatches = [
    { name: 'Brilliant Crimson', hex: '#B22222', desc: 'Central dupatta; emotional intensity and visual heat' },
    { name: 'Raw Sienna', hex: '#C68B59', desc: 'Warm natural skin tones celebrating Indian reality' },
    { name: 'Deep Ochre', hex: '#D4A373', desc: 'Earthy golden garment; reflective of Punjabi landscape' },
    { name: 'Forest Olive', hex: '#4A5D4E', desc: 'Cool counterpoint grounding the figural pyramid' }
  ];

  return (
    <div className="bg-slate-950/80 rounded-2xl border border-amber-500/30 p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
          <Palette className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-cinzel font-bold text-lg text-slate-100">Modernist Color Palette & Compositional Analysis</h4>
          <p className="text-xs text-slate-400 font-mono">The 1935 watershed moment that launched modern Indian painting</p>
        </div>
      </div>

      {/* Modernist Swatches Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {swatches.map((swatch) => (
          <div
            key={swatch.name}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2"
          >
            <div
              className="w-full h-12 rounded-lg shadow-inner border border-white/10"
              style={{ backgroundColor: swatch.hex }}
            />
            <div>
              <span className="text-xs font-bold text-slate-100 block">{swatch.name}</span>
              <span className="text-[10px] font-mono text-amber-400">{swatch.hex}</span>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">{swatch.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modernist Analysis Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {aspects.map((asp, idx) => (
          <div
            key={asp.aspect}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider block mb-1">
                {asp.aspect}
              </span>
              <h5 className="text-base font-bold text-slate-100 mb-2 font-cinzel">{asp.value}</h5>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2 border-t border-slate-800">
              {asp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SherGilModernism;
