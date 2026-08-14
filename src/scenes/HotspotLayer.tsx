import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotspot } from '@/data/hotspots';

interface HotspotLayerProps {
  hotspots: Hotspot[];
  activeHotspot: Hotspot | null;
  onSelectHotspot: (hotspot: Hotspot | null) => void;
}

export const HotspotLayer: React.FC<HotspotLayerProps> = ({
  hotspots,
  activeHotspot,
  onSelectHotspot,
}) => {
  if (!hotspots || hotspots.length === 0) return null;

  return (
    <>
      {/* Coordinate Pins Overlay */}
      {hotspots.map((hs) => {
        const isSelected = activeHotspot?.id === hs.id;

        return (
          <button
            key={hs.id}
            onClick={() => onSelectHotspot(isSelected ? null : hs)}
            style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-30 focus:outline-none cursor-pointer"
            title={hs.title}
          >
            <span className="relative flex h-7 w-7">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span
                className={`relative inline-flex rounded-full h-7 w-7 border-2 border-slate-950 items-center justify-center text-xs font-bold shadow-2xl transition-transform ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-400/40'
                    : 'bg-amber-500 text-slate-950 group-hover:scale-110'
                }`}
              >
                •
              </span>
            </span>
          </button>
        );
      })}

      {/* Active Hotspot Annotation Card */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 right-4 z-40 bg-slate-950/95 border border-amber-400/60 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-start justify-between gap-3"
          >
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                {activeHotspot.title}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-sans">
                {activeHotspot.detail}
              </p>
            </div>
            <button
              onClick={() => onSelectHotspot(null)}
              className="text-slate-400 hover:text-white text-xs p-1.5 rounded-lg hover:bg-slate-800"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HotspotLayer;
