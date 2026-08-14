import React from 'react';

interface ArtworkRendererProps {
  src: string;
  alt: string;
  className?: string;
  zoomScale?: number;
}

export const ArtworkRenderer: React.FC<ArtworkRendererProps> = ({
  src,
  alt,
  className = '',
  zoomScale = 1,
}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain rounded-2xl drop-shadow-2xl transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomScale})` }}
        loading="lazy"
      />
    </div>
  );
};

export default ArtworkRenderer;
