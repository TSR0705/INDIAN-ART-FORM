import React from 'react';
import { ARTIFACTS } from '@/data/artifacts';

interface TimelineTrackerProps {
  activeIdx: number;
  globalProgress: number;
  onSelectArtifact: (index: number) => void;
  isVisible?: boolean;
}

export const TimelineTracker: React.FC<TimelineTrackerProps> = ({
  activeIdx,
  globalProgress,
  onSelectArtifact,
  isVisible = true,
}) => {
  return (
    <aside
      className={`fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-4 select-none transition-opacity duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background Vertical Rail */}
      <div className="relative w-0.5 h-72 bg-slate-800/80 rounded-full flex flex-col justify-between py-2">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]"
          style={{ height: `${globalProgress * 100}%` }}
        />
      </div>

      {/* 8 Milestone Node Dots */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-between h-72 py-1">
        {ARTIFACTS.map((art, idx) => {
          const isActive = activeIdx === idx;

          return (
            <div key={art.id} className="relative flex items-center justify-center group">
              <button
                onClick={() => onSelectArtifact(idx)}
                className="relative flex items-center justify-center p-1.5 cursor-pointer focus:outline-none"
                title={`${art.title} (${art.displayDate})`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-4 ring-amber-400/30 shadow-lg shadow-amber-500/50'
                      : 'bg-slate-700 group-hover:bg-amber-300 group-hover:scale-110'
                  }`}
                />
              </button>

              {/* Tooltip pops up safely on hover ONLY, avoiding any overlap */}
              <div className="absolute left-8 whitespace-nowrap text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg transition-all duration-200 pointer-events-none backdrop-blur-xl bg-slate-900/95 text-amber-300 border border-amber-500/40 shadow-xl opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0">
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
