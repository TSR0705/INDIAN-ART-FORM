import React, { useState } from 'react';
import { Compass, ArrowRightLeft, Award } from 'lucide-react';

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

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 select-none">
      {/* Minimal Contextual 'EXPLORE' Button Only */}
      <div className="relative">
        <button
          onClick={() => setIsExploreOpen(!isExploreOpen)}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 border shadow-xl transition-all cursor-pointer ${
            isExploreOpen
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/30'
              : 'bg-slate-900/90 text-amber-400 border-amber-500/30 backdrop-blur-md hover:bg-slate-800'
          }`}
        >
          <span>EXPLORE</span>
        </button>

        {/* Dropdown Menu on Explore */}
        {isExploreOpen && (
          <div className="absolute right-0 top-12 w-52 bg-slate-900/95 border border-amber-500/30 rounded-2xl p-2 shadow-2xl backdrop-blur-xl flex flex-col gap-1 z-50 animate-in fade-in duration-200">
            <button
              onClick={() => {
                setIsExploreOpen(false);
                onOpenMap();
              }}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-slate-800 flex items-center gap-2 text-left cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Heritage Map</span>
            </button>

            <button
              onClick={() => {
                setIsExploreOpen(false);
                onOpenCompare();
              }}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-slate-800 flex items-center gap-2 text-left cursor-pointer"
            >
              <ArrowRightLeft className="w-4 h-4 text-amber-400" />
              <span>Compare Studio</span>
            </button>

            <button
              onClick={() => {
                setIsExploreOpen(false);
                onOpenQuiz();
              }}
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-slate-800 flex items-center gap-2 text-left cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Curator Challenge</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExhibitionControls;
