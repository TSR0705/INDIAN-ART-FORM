import React from 'react';
import { motion } from 'framer-motion';
import { ARTIFACTS } from '@/data/artifacts';

interface TimelineTrackerProps {
  activeIdx: number;
  globalProgress: number;
  onSelectArtifact: (index: number) => void;
  isVisible?: boolean;
}

export const TimelineTracker: React.FC<TimelineTrackerProps> = ({
  activeIdx,
  onSelectArtifact,
  isVisible = true,
}) => {
  return (
    <aside
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-5 select-none transition-opacity duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 8 Milestone Node Dots (Smooth Spring Animated White Dots) */}
      <div className="flex flex-col items-center gap-4">
        {ARTIFACTS.map((art, idx) => {
          const isActive = activeIdx === idx;

          return (
            <div key={art.id} className="relative flex items-center justify-center group">
              <button
                onClick={() => onSelectArtifact(idx)}
                className="relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
                title={`${art.title} (${art.displayDate})`}
              >
                {isActive ? (
                  /* Smooth Animating Active Larger White Dot */
                  <motion.span
                    layoutId="activeTimelineDot"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,1)]"
                  />
                ) : (
                  /* Inactive Small White Dot */
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white group-hover:scale-125 transition-all duration-200"
                  />
                )}
              </button>

              {/* Tooltip pops up smoothly to the LEFT of the dot on hover */}
              <div className="absolute right-7 whitespace-nowrap text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg transition-all duration-200 pointer-events-none backdrop-blur-xl bg-slate-900/95 text-amber-300 border border-amber-500/40 shadow-xl opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0">
                <span className="text-amber-400 mr-1.5">{art.displayDate}</span>
                <span className="text-slate-200">{art.shortTitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default TimelineTracker;
