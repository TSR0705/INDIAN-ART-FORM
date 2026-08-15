import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, ArrowRightLeft, Award, ChevronDown } from 'lucide-react';

interface ExhibitionControlsProps {
  onOpenMap: () => void;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
}

export const ExhibitionControls: React.FC<ExhibitionControlsProps> = ({
  onOpenMap,
  onOpenCompare,
  onOpenQuiz,
}) => {
  const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="fixed top-4 right-4 z-40 flex items-center gap-2 select-none">
      {/* Minimal Contextual 'EXPLORE' Button */}
      <div className="relative">
        <button
          onClick={() => setIsExploreOpen(!isExploreOpen)}
          aria-label="Open exhibition explore menu"
          aria-expanded={isExploreOpen}
          className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 border shadow-2xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 ${
            isExploreOpen
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/40 font-bold scale-105'
              : 'bg-slate-950/90 text-amber-300 border-amber-500/30 backdrop-blur-xl hover:bg-slate-900 hover:border-amber-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>EXPLORE</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExploreOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Animated Glassmorphic Dropdown Menu */}
        <AnimatePresence>
          {isExploreOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-14 w-64 bg-slate-950/95 border border-amber-500/40 rounded-3xl p-2.5 shadow-2xl backdrop-blur-2xl flex flex-col gap-1.5 z-50 overflow-hidden"
            >
              <div className="px-3 py-1.5 border-b border-slate-800/80 mb-1">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  Exhibition Overlays
                </span>
              </div>

              {/* Heritage Map Trigger */}
              <button
                onClick={() => {
                  setIsExploreOpen(false);
                  onOpenMap();
                }}
                className="w-full p-2.5 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 hover:bg-slate-900 border border-transparent hover:border-amber-500/30 group"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-slate-100 group-hover:text-amber-300">
                    Interactive Heritage Map
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block">Geographic origin of artworks</span>
                </div>
              </button>

              {/* Compare Studio Trigger */}
              <button
                onClick={() => {
                  setIsExploreOpen(false);
                  onOpenCompare();
                }}
                className="w-full p-2.5 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 hover:bg-slate-900 border border-transparent hover:border-amber-500/30 group"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-slate-100 group-hover:text-amber-300">
                    Compare Studio
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block">Side-by-side epoch analysis</span>
                </div>
              </button>

              {/* Curator Challenge Quiz Trigger */}
              <button
                onClick={() => {
                  setIsExploreOpen(false);
                  onOpenQuiz();
                }}
                className="w-full p-2.5 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 hover:bg-slate-900 border border-transparent hover:border-amber-500/30 group"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-slate-100 group-hover:text-amber-300">
                    Curator Challenge
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block">Art history quiz & certificate</span>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExhibitionControls;
