import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import { TIMELINE_POINTS, ERAS } from '@/data/timelineData';
import artifactsData from '@/data/artifacts.json';

interface TimelineHorizontalProps {
  onSelectArtifact: (artifactId: string) => void;
  selectedArtifactId: string | null;
}

export const TimelineHorizontal: React.FC<TimelineHorizontalProps> = ({
  onSelectArtifact,
  selectedArtifactId,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-slate-950/90 border-b border-slate-800/80 overflow-hidden">
      {/* Header with Navigation Controls */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Panoramic Scrubber</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-slate-100">
            Chronological <span className="gold-gradient-text">Stream (2500 BCE – 1935 CE)</span>
          </h2>
          <p className="text-sm text-slate-400 font-cormorant mt-1">
            Scroll horizontally to travel through 4,500 years of dynastic transitions and aesthetic evolutions.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => handleScroll('left')}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 transition-all hover:border-amber-400 active:scale-95 shadow-md"
            aria-label="Scroll timeline left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 transition-all hover:border-amber-400 active:scale-95 shadow-md"
            aria-label="Scroll timeline right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Eras Ribbon Indicator */}
      <div className="max-w-7xl mx-auto mb-6 hidden md:grid grid-cols-6 gap-2 text-center text-xs font-mono">
        {ERAS.map((era) => (
          <div
            key={era.id}
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center transition-all hover:border-amber-500/30"
          >
            <span className="font-bold text-amber-400">{era.name}</span>
            <span className="text-[10px] text-slate-400 mt-0.5">{era.range}</span>
          </div>
        ))}
      </div>

      {/* Horizontal Scrollable Track */}
      <div className="max-w-7xl mx-auto relative">
        {/* Central connecting glowing line */}
        <div className="absolute top-[135px] left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/40 via-amber-400 to-amber-600/40 z-0 pointer-events-none"></div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth relative z-10 px-2"
        >
          {artifactsData.map((art, index) => {
            const isSelected = selectedArtifactId === art.id;

            return (
              <motion.div
                key={art.id}
                className="flex-shrink-0 w-80 flex flex-col cursor-pointer group"
                onClick={() => onSelectArtifact(art.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Year Pill & Timeline Node */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30 scale-110'
                        : 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 group-hover:border-amber-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {art.displayDate}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono ml-auto">
                    {art.era}
                  </span>
                </div>

                {/* Card Body */}
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                    isSelected
                      ? 'border-amber-400 bg-slate-900 shadow-2xl shadow-amber-500/20 ring-1 ring-amber-400/40'
                      : 'border-slate-800 bg-slate-900/80 hover:border-amber-500/50 hover:bg-slate-900/95'
                  } backdrop-blur-md flex flex-col flex-1`}
                >
                  {/* Image container with strict aspect ratio */}
                  <div className="relative w-full h-44 bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

                    {/* View Button Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" /> Inspect Masterpiece
                      </span>
                    </div>
                  </div>

                  {/* Metadata Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider block mb-1">
                        {art.period}
                      </span>
                      <h3 className="font-cinzel font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans line-clamp-2 mt-2 leading-relaxed">
                        {art.overview}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        {art.origin.split('(')[0].trim()}
                      </span>
                      <span className="text-slate-300 font-semibold">{art.medium}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineHorizontal;
