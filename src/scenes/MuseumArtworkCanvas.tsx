import React, { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, Eye, Maximize2, X } from 'lucide-react';
import { Hotspot } from '@/data/hotspots';

interface MuseumArtworkCanvasProps {
  artifactId: string;
  title: string;
  imageSrc: string;
  hotspots?: Hotspot[];
  enableZoomLens?: boolean;
  enableFullscreen?: boolean;
}

export const MuseumArtworkCanvas: React.FC<MuseumArtworkCanvasProps> = ({
  title,
  imageSrc,
  hotspots = [],
  enableZoomLens = true,
  enableFullscreen = true,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isMagnifierActive, setIsMagnifierActive] = useState<boolean>(false);
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isMagnifierActive) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMagnifierPos({ x, y });
  };

  const handleZoom = (direction: 'in' | 'out' | 'reset') => {
    if (direction === 'in') setZoomLevel(prev => Math.min(prev + 0.35, 2.5));
    else if (direction === 'out') setZoomLevel(prev => Math.max(prev - 0.35, 1));
    else setZoomLevel(1);
  };

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {/* Direct Large Artwork Display Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full flex items-center justify-center rounded-3xl overflow-hidden group cursor-crosshair"
      >
        {/* Floating Controls Overlay */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-slate-950/90 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-700/80 shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity">
          {enableZoomLens && (
            <button
              onClick={() => setIsMagnifierActive(!isMagnifierActive)}
              aria-label="Toggle 3x magnifier lens"
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold flex items-center gap-1 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isMagnifierActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              title="Toggle 3x Lens"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isMagnifierActive ? 'Lens Active' : '3x Lens'}</span>
            </button>
          )}

          <div className="w-[1px] h-3.5 bg-slate-700 mx-0.5" />

          <button
            onClick={() => handleZoom('in')}
            aria-label="Zoom artwork in"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            aria-label="Zoom artwork out"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom('reset')}
            aria-label="Reset zoom level"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          {enableFullscreen && (
            <button
              onClick={() => setIsFullscreen(true)}
              aria-label="Open artwork full screen"
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
              title="Full Screen View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Artwork Image Display */}
        <motion.div
          animate={{ scale: zoomLevel }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full h-full flex items-center justify-center p-2"
        >
          {!imageError ? (
            <img
              src={imageSrc}
              alt={title}
              onError={() => setImageError(true)}
              className="max-h-[460px] sm:max-h-[540px] w-auto object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-64 bg-slate-900/90 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-400 font-mono text-xs">
              [ High-Resolution Museum Record Image ]
            </div>
          )}

          {/* Hotspot Pins Overlaid Directly on Artwork */}
          {hotspots.map((hs) => (
            <button
              key={hs.id}
              onClick={() => setActiveHotspot(activeHotspot?.id === hs.id ? null : hs)}
              style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
              aria-label={`Hotspot detail: ${hs.title}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-30 focus:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full"
              title={hs.title}
            >
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-7 w-7 bg-amber-500 border-2 border-slate-950 items-center justify-center text-xs font-bold text-slate-950 shadow-2xl group-hover:scale-125 transition-transform">
                  •
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* 3x Optical Lens Circle */}
        {isMagnifierActive && !imageError && (
          <div
            className="absolute pointer-events-none rounded-full border-2 border-amber-400 shadow-2xl overflow-hidden z-30"
            style={{
              width: '220px',
              height: '220px',
              left: `${magnifierPos.x}%`,
              top: `${magnifierPos.y}%`,
              transform: 'translate(-50%, -50%)',
              backgroundImage: `url(${imageSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `${magnifierPos.x}% ${magnifierPos.y}%`,
              backgroundSize: '350%',
              boxShadow: '0 0 35px rgba(197, 160, 89, 0.5), inset 0 0 25px rgba(0,0,0,0.8)',
            }}
          />
        )}
      </div>

      {/* Active Hotspot Annotation Callout Card */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-3 w-full max-w-xl z-40 bg-slate-950/95 border border-amber-400/60 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-start justify-between gap-3"
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
              onClick={() => setActiveHotspot(null)}
              aria-label="Close hotspot detail"
              className="text-slate-400 hover:text-white text-xs p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            aria-label="Close full screen view"
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full h-full max-w-6xl max-h-[92vh] p-2 flex items-center justify-center">
            <img
              src={imageSrc}
              alt={title}
              className="max-h-[90vh] w-auto object-contain rounded-2xl border border-amber-500/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MuseumArtworkCanvas;
