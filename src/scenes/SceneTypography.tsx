import React from 'react';
import { Artifact } from '@/data/artifacts';
import { SceneConfig } from '@/data/sceneConfigs';

interface SceneTypographyProps {
  artifact: Artifact;
  config: SceneConfig;
  showDate?: boolean;
  showTitle?: boolean;
}

export const SceneTypography: React.FC<SceneTypographyProps> = ({
  artifact,
  config,
  showDate = true,
  showTitle = true,
}) => {
  return (
    <div className="space-y-2 mb-6">
      {/* Date & Period Pill */}
      {showDate && (
        <div className="flex items-center gap-2">
          <span
            className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase border shadow-md"
            style={{
              backgroundColor: `${config.accent}15`,
              color: config.accent,
              borderColor: config.border,
            }}
          >
            {artifact.era} • {artifact.displayDate}
          </span>
          <span className="text-xs font-mono opacity-60">
            Artifact {artifact.index} of 8
          </span>
        </div>
      )}

      {/* Title & Subtitle */}
      {showTitle && (
        <div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-tight leading-[1.1]"
            style={{ color: config.text }}
          >
            {artifact.title}
          </h2>
          <p
            className="text-base sm:text-xl font-cormorant italic mt-1"
            style={{ color: config.mutedText }}
          >
            {artifact.civilization} — {artifact.period}
          </p>
        </div>
      )}
    </div>
  );
};

export default SceneTypography;
