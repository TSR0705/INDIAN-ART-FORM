import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ARTIFACTS } from '@/data/artifacts';

interface TimelineStreamProps {
  currentIdx: number;
  onSelectArtifact: (index: number) => void;
}

export const TimelineStream: React.FC<TimelineStreamProps> = ({
  currentIdx,
  onSelectArtifact,
}) => {
  return (
    <section className="relative w-full py-16 px-4 bg-[#07080c] border-t border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <span>Chronological Exhibition Index (c. 2500 BCE – 1935 CE)</span>
          </div>
          <h3 className="font-cinzel font-bold text-2xl sm:text-4xl text-slate-100 gold-gradient-text">
            4,500 YEARS OF CANONICAL MASTERPIECES
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-xl mx-auto">
            Click any masterpiece below to revisit its dedicated exhibition room & historical analysis
          </p>
        </div>

        {/* 8 Artwork Visual Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {ARTIFACTS.map((art, idx) => {
            const isSelected = currentIdx === idx;

            return (
              <motion.button
                key={art.id}
                onClick={() => onSelectArtifact(idx)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-2xl overflow-hidden border text-left transition-all duration-300 flex flex-col cursor-pointer ${
                  isSelected
                    ? 'border-amber-400 bg-slate-900 ring-2 ring-amber-400/50 shadow-2xl shadow-amber-500/30 scale-105 z-10'
                    : 'border-slate-800/80 bg-slate-950/80 hover:border-amber-500/40 hover:bg-slate-900'
                }`}
              >
                {/* Year Marker */}
                <div className="p-2 border-b border-slate-800/80 bg-slate-950/90 flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold truncate ${
                    isSelected ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {art.displayDate}
                  </span>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px] ${
                    isSelected ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                </div>

                {/* Artwork Thumbnail Image */}
                <div className="relative w-full h-32 bg-[#090a0f] p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={art.image.src}
                    alt={art.title}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Caption Title */}
                <div className="p-2.5 bg-slate-900/90 flex-1 flex flex-col justify-between">
                  <h4 className={`font-cinzel text-[11px] font-bold leading-tight ${
                    isSelected ? 'text-amber-300' : 'text-slate-200'
                  }`}>
                    {art.shortTitle || art.title}
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400 mt-1 block truncate">
                    {art.era}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineStream;
