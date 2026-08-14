import React from 'react';
import { SceneConfig } from '@/data/sceneConfigs';

interface SceneAtmosphereProps {
  config: SceneConfig;
  children: React.ReactNode;
}

export const SceneAtmosphere: React.FC<SceneAtmosphereProps> = ({ config, children }) => {
  return (
    <div
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center transition-colors duration-700 overflow-hidden"
      style={{
        backgroundColor: config.background,
        color: config.text,
      }}
    >
      {/* Subtle Background Glow Radial Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${config.accent} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SceneAtmosphere;
