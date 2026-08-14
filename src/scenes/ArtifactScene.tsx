import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Artifact } from '@/data/artifacts';
import { SCENE_CONFIGS, SceneConfig } from '@/data/sceneConfigs';
import { SCENE_BEHAVIORS } from '@/data/sceneBehaviors';
import { HOTSPOTS } from '@/data/hotspots';
import SceneAtmosphere from './SceneAtmosphere';
import MuseumArtworkCanvas from './MuseumArtworkCanvas';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';

interface ArtifactSceneProps {
  artifact: Artifact;
  sceneProgress?: number;
  isActive?: boolean;
}

export const ArtifactScene: React.FC<ArtifactSceneProps> = ({
  artifact,
  isActive = true,
}) => {
  const config: SceneConfig = SCENE_CONFIGS[artifact.id] || SCENE_CONFIGS['dancing-girl'];
  const behavior = SCENE_BEHAVIORS[artifact.id];
  const artifactHotspots = HOTSPOTS.filter(h => h.artifactId === artifact.id);
  const isImageLeft = config.alignment === 'right'; // Alternating Left/Right layout

  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Auto-stop audio when scrolling away from this section
  useEffect(() => {
    if (!isActive && isPlayingAudio) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    }
  }, [isActive, isPlayingAudio]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${artifact.title}. Created in ${artifact.displayDate}, during the ${artifact.period}. ${artifact.audioNarration || artifact.overview}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  return (
    <div id={`scene-${artifact.id}`} className="w-full min-h-screen py-24 border-b border-amber-500/10 flex items-center justify-center">
      <SceneAtmosphere config={config}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Alternating Zig-Zag Grid Layout with Staggered Scroll Motion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LARGE DIRECT ARTWORK IMAGE (Order alternates) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              className={`lg:col-span-6 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <MuseumArtworkCanvas
                artifactId={artifact.id}
                title={artifact.title}
                imageSrc={artifact.image.src}
                hotspots={artifactHotspots}
                enableZoomLens={behavior?.enableZoomLens}
                enableFullscreen={behavior?.enableFullscreen}
              />
            </motion.div>

            {/* EDITORIAL NARRATIVE & TYPOGRAPHY WITH STAGGERED MOTION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              className={`lg:col-span-6 space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
            >
              {/* Date & Era Badge + Dedicated Section Audio Button */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                    {artifact.era} • {artifact.displayDate}
                  </span>

                  {/* Section-Specific Narration Audio Player Button */}
                  <button
                    onClick={handleToggleSpeech}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 border transition-all cursor-pointer shadow-md ${
                      isPlayingAudio
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/30 animate-pulse'
                        : 'bg-slate-900/90 text-amber-300 border-slate-700 hover:border-amber-400 hover:bg-slate-800'
                    }`}
                    title={`Listen narration for ${artifact.title}`}
                  >
                    {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                    <span>{isPlayingAudio ? 'Stop Audio' : 'Listen Story'}</span>
                  </button>
                </div>

                {/* Refined Gold Serif Typography */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-tight gold-gradient-text leading-[1.12]">
                  {artifact.title}
                </h2>
                <p className="text-base sm:text-xl text-amber-200/80 font-cormorant italic font-medium">
                  {artifact.civilization} — {artifact.period}
                </p>
              </div>

              {/* Curator Editorial Narrative Story */}
              <div className="space-y-4 pt-1">
                <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed font-light">
                  {artifact.overview}
                </p>
                <p className="text-sm sm:text-base text-amber-100/90 font-cormorant italic leading-relaxed pl-4 border-l-2 border-amber-500/60">
                  "{artifact.culturalMeaning}"
                </p>
              </div>

              {/* Refined Unboxed Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-xs font-mono">
                <div>
                  <span className="text-slate-500 uppercase block text-[10px] tracking-wider mb-0.5">Medium</span>
                  <strong className="text-slate-200 font-semibold">{artifact.medium}</strong>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block text-[10px] tracking-wider mb-0.5">Technique</span>
                  <strong className="text-slate-200 font-semibold">{artifact.technique}</strong>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block text-[10px] tracking-wider mb-0.5">Origin</span>
                  <strong className="text-slate-200 font-semibold">{artifact.origin}</strong>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block text-[10px] tracking-wider mb-0.5">Collection</span>
                  <strong className="text-slate-200 font-semibold">{artifact.museum.split(',')[0]}</strong>
                </div>
              </div>

              {/* Official Museum Link */}
              {artifact.museumSource.url && (
                <div className="pt-2">
                  <a
                    href={artifact.museumSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-mono font-semibold hover:underline"
                  >
                    <span>Official Record ({artifact.museum.split(',')[0]})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </SceneAtmosphere>
    </div>
  );
};

export default ArtifactScene;
