import React, { useState, useRef, MouseEvent } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Sparkles, Eye } from 'lucide-react';

interface DeepZoomViewerProps {
  imageSrc: string;
  title: string;
  hotspots?: Array<{ id: string; title: string; detail: string; x: number; y: number }>;
  onSelectHotspot?: (hotspot: any) => void;
}

export const DeepZoomViewer: React.FC<DeepZoomViewerProps> = ({
  imageSrc,
  title,
  hotspots = [],
  onSelectHotspot,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isMagnifierActive, setIsMagnifierActive] = useState<boolean>(false);
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current || !isMagnifierActive) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMagnifierPos({ x, y });
  };

  const handleZoom = (direction: 'in' | 'out' | 'reset') => {
    if (direction === 'in') setZoomLevel(prev => Math.min(prev + 0.35, 2.8));
    else if (direction === 'out') setZoomLevel(prev => Math.max(prev - 0.35, 1));
    else setZoomLevel(1);
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden bg-[#07080d] border border-amber-500/20 shadow-2xl flex flex-col">
      {/* Top Floating Badge & Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-md pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>High-Res Digital Canvas</span>
        </span>

        <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl pointer-events-auto">
          <button
            onClick={() => setIsMagnifierActive(!isMagnifierActive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              isMagnifierActive
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>3x Lens</span>
          </button>
          <div className="w-[1px] h-4 bg-slate-700 mx-1" />
          <button
            onClick={() => handleZoom('in')}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom('reset')}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Frame Container */}
      <div
        ref={imgContainerRef}
        onMouseMove={handleMouseMove}
        className="relative flex-1 w-full h-full flex items-center justify-center p-4 overflow-hidden cursor-crosshair select-none"
      >
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[350px] sm:max-h-[400px] w-auto object-contain rounded-xl shadow-2xl border border-slate-800"
          />

          {/* Hotspot Pins */}
          {hotspots.map((hs) => (
            <button
              key={hs.id}
              onClick={() => {
                setActiveHotspot(hs);
                if (onSelectHotspot) onSelectHotspot(hs);
              }}
              style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
              title={hs.title}
            >
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-500 border-2 border-slate-950 items-center justify-center text-[10px] font-bold text-slate-950 shadow-lg">
                  •
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* 3x Lens Magnifier */}
        {isMagnifierActive && (
          <div
            className="absolute pointer-events-none rounded-full border-2 border-amber-400 shadow-2xl overflow-hidden z-30"
            style={{
              width: '170px',
              height: '170px',
              left: `${magnifierPos.x}%`,
              top: `${magnifierPos.y}%`,
              transform: 'translate(-50%, -50%)',
              backgroundImage: `url(${imageSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `${magnifierPos.x}% ${magnifierPos.y}%`,
              backgroundSize: '400%',
              boxShadow: '0 0 25px rgba(197, 160, 89, 0.4), inset 0 0 15px rgba(0,0,0,0.6)',
            }}
          />
        )}
      </div>

      {/* Active Hotspot Callout Box */}
      {activeHotspot && (
        <div className="absolute top-16 left-4 max-w-xs z-30 bg-slate-900/95 border border-amber-400/50 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">{activeHotspot.title}</span>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-white text-xs p-1"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {activeHotspot.detail}
          </p>
        </div>
      )}

      {/* Hotspots Quick Pill Strip */}
      {hotspots.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Detail Hotspots:
            </span>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {hotspots.slice(0, 4).map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => {
                    setActiveHotspot(hs);
                    if (onSelectHotspot) onSelectHotspot(hs);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeHotspot?.id === hs.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {hs.title.split('(')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepZoomViewer;
