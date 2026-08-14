import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ExternalLink, 
  Compass, 
  MapPin, 
  ShieldCheck,
  Eye
} from 'lucide-react';
import Model3DViewer from '@/components/viewers/Model3DViewer';
import DeepZoomViewer from '@/components/viewers/DeepZoomViewer';
import LostWaxCasting from '@/components/interactives/LostWaxCasting';
import StateEmblemCompare from '@/components/interactives/StateEmblemCompare';
import BuddhaIconography from '@/components/interactives/BuddhaIconography';
import NatarajaCosmicWheel from '@/components/interactives/NatarajaCosmicWheel';
import MughalFamilyTree from '@/components/interactives/MughalFamilyTree';
import RajputVsMughal from '@/components/interactives/RajputVsMughal';
import RaviVarmaPress from '@/components/interactives/RaviVarmaPress';
import SherGilModernism from '@/components/interactives/SherGilModernism';

interface ArtifactStudioModalProps {
  artifact: any;
  onClose: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: (text: string) => void;
}

export const ArtifactStudioModal: React.FC<ArtifactStudioModalProps> = ({
  artifact,
  onClose,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [activeTab, setActiveTab] = useState<'replica' | 'history' | 'interactive' | 'provenance'>('replica');

  if (!artifact) return null;

  const renderInteractiveModule = () => {
    switch (artifact.interactiveModule?.type) {
      case 'lost-wax-casting':
        return <LostWaxCasting steps={artifact.interactiveModule.steps} />;
      case 'state-emblem-compare':
        return <StateEmblemCompare comparisons={artifact.interactiveModule.comparisons} />;
      case 'read-the-sculpture':
        return <BuddhaIconography elements={artifact.interactiveModule.elements} />;
      case 'nataraja-cosmic-wheel':
        return <NatarajaCosmicWheel symbols={artifact.interactiveModule.symbols} />;
      case 'mughal-family-tree':
        return <MughalFamilyTree figures={artifact.interactiveModule.figures} />;
      case 'rajput-vs-mughal':
        return <RajputVsMughal matrix={artifact.interactiveModule.matrix} />;
      case 'ravi-varma-press':
        return <RaviVarmaPress phases={artifact.interactiveModule.phases} />;
      case 'shergil-modernism':
        return <SherGilModernism aspects={artifact.interactiveModule.aspects} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl shadow-black/80 flex flex-col relative">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-lg px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {artifact.era} • {artifact.displayDate}
            </span>
            <div className="hidden sm:block text-xs text-slate-400 font-mono">
              {artifact.period}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleAudio(artifact.audioNarration || artifact.overview)}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                isAudioPlaying
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/20 animate-pulse'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700'
              }`}
              title="Voice Narration"
            >
              {isAudioPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              <span className="hidden sm:inline">{isAudioPlaying ? 'Stop Audio' : 'Listen Story'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Hero Title Strip */}
        <div className="px-6 pt-6 pb-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-slate-100 mb-1">
            {artifact.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
            <span><strong>Medium:</strong> {artifact.medium}</span>
            <span>•</span>
            <span><strong>Technique:</strong> {artifact.technique}</span>
            <span>•</span>
            <span><strong>Origin:</strong> {artifact.origin}</span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 mt-6 gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('replica')}
              className={`pb-3 px-4 text-xs font-bold font-mono tracking-wider uppercase border-b-2 transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeTab === 'replica'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{artifact.modelType === '3d-sculpture' ? '3D Turntable Replica' : 'Deep Zoom & Lens'}</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`pb-3 px-4 text-xs font-bold font-mono tracking-wider uppercase border-b-2 transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeTab === 'history'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Historical Context & Symbolism</span>
            </button>

            <button
              onClick={() => setActiveTab('interactive')}
              className={`pb-3 px-4 text-xs font-bold font-mono tracking-wider uppercase border-b-2 transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeTab === 'interactive'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Workshop</span>
            </button>

            <button
              onClick={() => setActiveTab('provenance')}
              className={`pb-3 px-4 text-xs font-bold font-mono tracking-wider uppercase border-b-2 transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeTab === 'provenance'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Museum Provenance</span>
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 flex-1">
          {/* TAB 1: VIRTUAL REPLICA */}
          {activeTab === 'replica' && (
            <div className="space-y-6">
              {artifact.modelType === '3d-sculpture' ? (
                <Model3DViewer
                  artifactId={artifact.id}
                  artifactTitle={artifact.title}
                  imageSrc={artifact.image}
                  hotspots={artifact.hotspots}
                />
              ) : (
                <DeepZoomViewer
                  imageSrc={artifact.image}
                  title={artifact.title}
                  hotspots={artifact.hotspots}
                />
              )}

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-sans leading-relaxed">
                <strong className="text-amber-400 font-mono uppercase block mb-1">Curator's Note:</strong>
                {artifact.overview}
              </div>
            </div>
          )}

          {/* TAB 2: HISTORICAL CONTEXT */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Historical Context & Era
                  </h4>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {artifact.historicalContext}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Artistic & Technical Significance
                  </h4>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {artifact.artisticSignificance}
                  </p>
                </div>
              </div>

              {/* Visual Characteristics List */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Key Visual Characteristics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {artifact.visualCharacteristics?.map((char: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Meaning & Later Influence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <h4 className="text-sm font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                    Cultural & Philosophical Meaning
                  </h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {artifact.culturalMeaning}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Influence on Later Indian Art
                  </h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {artifact.influenceOnLaterArt}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BESPOKE INTERACTIVE WORKSHOP */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {renderInteractiveModule()}
            </div>
          )}

          {/* TAB 4: MUSEUM PROVENANCE */}
          {activeTab === 'provenance' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 font-mono uppercase block">Current Holding Collection</span>
                    <strong className="text-slate-100 text-sm">{artifact.currentLocation}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase block">Accession / Catalog Number</span>
                    <strong className="text-slate-100 text-sm font-mono">{artifact.accession}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase block">Physical Dimensions</span>
                    <strong className="text-slate-100 text-sm">{artifact.dimensions}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono uppercase block">License / Status</span>
                    <strong className="text-amber-400 text-sm">{artifact.museumSource?.license}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Image & Record Credit: {artifact.museumSource?.credit}
                  </span>
                  {artifact.museumSource?.url && (
                    <a
                      href={artifact.museumSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      <span>Official Museum Record</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtifactStudioModal;
