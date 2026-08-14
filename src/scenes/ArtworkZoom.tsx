import React, { useState, useRef, MouseEvent } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Eye, Maximize2, X } from 'lucide-react';

interface ArtworkZoomProps {
  imageSrc: string;
  title: string;
  enableZoomLens?: boolean;
  enableFullscreen?: boolean;
  children: React.ReactNode;
}

export const ArtworkZoom: React.FC<ArtworkZoomProps> = ({
  imageSrc,
  title,
  enableZoomLens = true,
  enableFullscreen = true,
  children,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isMagnifierActive, setIsMagnifierActive] = useState<boolean>(false);
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isMagnifierActive) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMagnifierPos({ x, y });
  };

  const handleZoom = (direction: 'in' | 'out' | 'reset') => {
    if (direction === 'in') setZoomLevel(prev => Math.min(prev + 0.35, 2.5));
    else if (direction === 'out') setZoomLevel(prev => Math.max(prev - 0.35, 1));
    else setZoomLevel(1);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[520px] sm:h-[600px] flex items-center justify-center rounded-3xl bg-[#090a0f]/60 border border-amber-500/20 shadow-2xl group select-none cursor-crosshair overflow-hidden"
    >
      {/* Floating Top Controls Overlay */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/80 shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity">
        {enableZoomLens && (
          <button
            onClick={() => setIsMagnifierActive(!isMagnifierActive)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isMagnifierActive
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Toggle 3x Lens"
          >
            <Eye className="w-4 h-4" />
            <span>{isMagnifierActive ? 'Lens Active' : '3x Lens'}</span>
          </button>
        )}

        <div className="w-[1px] h-4 bg-slate-700 mx-0.5" />

        <button
          onClick={() => handleZoom('in')}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom('out')}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom('reset')}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
          title="Reset Zoom"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        {enableFullscreen && (
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
            title="Full Screen View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Children Canvas Component */}
      <div className="w-full h-full flex items-center justify-center p-3">
        {React.cloneElement(children as React.ReactElement<any>, { zoomScale: zoomLevel })}
      </div>

      {/* 3x Optical Magnifier Lens */}
      {isMagnifierActive && (
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

      {/* Full-Screen Overlay Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
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

export default ArtworkZoom;
