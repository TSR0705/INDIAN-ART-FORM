import React, { useState } from 'react';
import { MapPin, Sparkles, X, ChevronRight, Compass } from 'lucide-react';
import { HERITAGE_SITES } from '@/data/mapData';
import artifactsData from '@/data/artifacts.json';

interface IndiaMapProps {
  onClose: () => void;
  onSelectArtifact: (artifactId: string) => void;
}

export const IndiaMap: React.FC<IndiaMapProps> = ({ onClose, onSelectArtifact }) => {
  const [selectedSiteId, setSelectedSiteId] = useState(HERITAGE_SITES[0].id);

  const activeSite = HERITAGE_SITES.find(s => s.id === selectedSiteId) || HERITAGE_SITES[0];
  const linkedArtifact = artifactsData.find(a => a.id === activeSite.artifactId);

  // Approximate relative positioning on Indian subcontinent map (normalized %):
  const pinPositions: Record<string, { top: number; left: number }> = {
    'mohenjo-daro': { top: 38, left: 24 },
    'sarnath-ashoka': { top: 44, left: 66 },
    'tiruvarangulam': { top: 82, left: 52 },
    'delhi-mughal': { top: 35, left: 48 },
    'jaipur-court': { top: 40, left: 44 },
    'malavli-press': { top: 60, left: 40 },
    'amritsar-punjab': { top: 25, left: 42 },
  };

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-xl text-slate-100">Interactive India Heritage Map</h3>
              <p className="text-xs text-slate-400 font-mono">Geographic origins of India's canonical artistic masterpieces</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Map & Detail Container */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Subcontinent Visual Map Canvas */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-4 relative min-h-[420px] flex items-center justify-center overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Stylized SVG Map of India */}
            <svg
              viewBox="0 0 500 550"
              className="w-full h-auto max-h-[400px] text-slate-800 fill-slate-900/90 stroke-amber-500/30 stroke-1 drop-shadow-2xl"
            >
              {/* Simplified artistic silhouette path for India subcontinent */}
              <path d="M 180 40 L 250 30 L 290 80 L 340 100 L 380 120 L 410 140 L 460 160 L 430 190 L 370 200 L 320 220 L 350 250 L 330 280 L 290 320 L 270 380 L 240 450 L 220 520 L 200 480 L 170 380 L 150 330 L 130 270 L 120 200 L 150 140 Z" />
            </svg>

            {/* Clickable Geo Pin Markers */}
            {HERITAGE_SITES.map((site) => {
              const pos = pinPositions[site.id] || { top: 50, left: 50 };
              const isSelected = site.id === selectedSiteId;

              return (
                <button
                  key={site.id}
                  onClick={() => setSelectedSiteId(site.id)}
                  style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                  title={site.name}
                >
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/40 scale-125 shadow-xl shadow-amber-500/50'
                          : 'bg-slate-900 text-amber-300 border-2 border-amber-500/60 hover:scale-110'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded mt-1 whitespace-nowrap backdrop-blur-md border ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                          : 'bg-slate-900/90 text-slate-300 border-slate-700 opacity-80 group-hover:opacity-100'
                      }`}
                    >
                      {site.name.split('(')[0].trim()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Site & Artifact Focus Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                {activeSite.era} • {activeSite.period}
              </span>
              <h4 className="text-xl font-bold font-cinzel text-slate-100 mb-1">{activeSite.name}</h4>
              <span className="text-xs text-slate-400 font-mono block mb-3">{activeSite.region}</span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                {activeSite.description}
              </p>

              {linkedArtifact && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/20 flex items-center gap-3">
                  <img
                    src={linkedArtifact.image}
                    alt={linkedArtifact.title}
                    className="w-14 h-14 object-cover rounded-lg border border-slate-800 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-amber-400 uppercase block">Featured Masterpiece</span>
                    <h5 className="text-xs font-bold text-slate-100 truncate font-cinzel">{linkedArtifact.title}</h5>
                    <span className="text-[11px] text-slate-400 font-mono">{linkedArtifact.medium}</span>
                  </div>
                </div>
              )}
            </div>

            {linkedArtifact && (
              <button
                onClick={() => onSelectArtifact(linkedArtifact.id)}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore {linkedArtifact.title} in 3D & Detail</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
