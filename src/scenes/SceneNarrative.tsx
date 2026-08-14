import React, { useState } from 'react';
import { Artifact } from '@/data/artifacts';
import { SceneConfig } from '@/data/sceneConfigs';
import { BookOpen, ShieldCheck, ExternalLink, Layers, Sparkles } from 'lucide-react';
import LostWaxCasting from '@/components/interactives/LostWaxCasting';
import StateEmblemCompare from '@/components/interactives/StateEmblemCompare';
import BuddhaIconography from '@/components/interactives/BuddhaIconography';
import NatarajaCosmicWheel from '@/components/interactives/NatarajaCosmicWheel';
import MughalFamilyTree from '@/components/interactives/MughalFamilyTree';
import RajputVsMughal from '@/components/interactives/RajputVsMughal';
import RaviVarmaPress from '@/components/interactives/RaviVarmaPress';
import SherGilModernism from '@/components/interactives/SherGilModernism';

interface SceneNarrativeProps {
  artifact: Artifact;
  config: SceneConfig;
  showContext?: boolean;
  showDetails?: boolean;
  onToggleSpeech?: () => void;
  isSpeechPlaying?: boolean;
}

export const SceneNarrative: React.FC<SceneNarrativeProps> = ({
  artifact,
  config,
  showDetails = true,
}) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'workshop' | 'provenance'>('narrative');

  // Render Interactive Module per Artifact
  const renderInteractiveModule = () => {
    switch (artifact.id) {
      case 'dancing-girl':
        return (
          <LostWaxCasting
            steps={[
              { step: 1, name: "Wax Model Sculpting", desc: "Sculptor carves statuette out of beeswax, resin, and oil." },
              { step: 2, name: "Clay Mold Encapsulation", desc: "Coated in fine river mud and clay, leaving drainage spouts." },
              { step: 3, name: "Wax Dewaxing", desc: "Fired in kiln so molten wax melts away, leaving hollow void." },
              { step: 4, name: "Molten Bronze Pouring", desc: "Molten copper-tin alloy (2500 BCE ratio) poured at 1085°C." },
              { step: 5, name: "Clay Mold Breaking", desc: "Once cooled, ceramic shell shattered to reveal solid bronze." },
              { step: 6, name: "Polishing & Channelling", desc: "Bangles, necklace, and facial features polished by artisan." }
            ]}
          />
        );
      case 'lion-capital':
        return (
          <StateEmblemCompare
            comparisons={[
              { element: "4 Asiatic Lions", original: "Roaring in 4 cardinal directions", emblem: "3 lions visible in 2D official seal" },
              { element: "Ashoka Chakra", original: "24-spoked wheel of Dhamma on abacus", emblem: "Central wheel on National Flag of India" },
              { element: "Motto Inscription", original: "Imperial edicts carved on sandstone pillar", emblem: "Satyameva Jayate (Truth Alone Triumphs)" },
              { element: "Lotus Base", original: "Inverted bell lotus flower base", emblem: "Omitted in official graphic emblem" }
            ]}
          />
        );
      case 'standing-buddha':
        return (
          <BuddhaIconography
            elements={[
              { name: "Abhaya Mudra", trait: "Right hand raised at shoulder level", meaning: "Grants fearlessness, peace, and spiritual protection" },
              { name: "Diaphanous Robe", trait: "Sheer Sanghati robe clinging like silk", meaning: "Purity of form transcending physical drapery" },
              { name: "Downcast Dhyana Eyes", trait: "Lowered lotus-petal eyes", meaning: "Deep meditative absorption and inner peace" },
              { name: "Snail-Shell Ushnisha", trait: "Clockwise hair curls and cranial protuberance", meaning: "Supreme spiritual wisdom and enlightenment" }
            ]}
          />
        );
      case 'nataraja':
        return (
          <NatarajaCosmicWheel
            symbols={[
              { act: "Srishti (Creation)", symbol: "Damaru Drum in upper right hand", desc: "Primal sound beat initiating universe" },
              { act: "Sthiti (Preservation)", symbol: "Abhaya Mudra in lower right hand", desc: "Reassurance and cosmic protection" },
              { act: "Samhara (Destruction)", symbol: "Agni Fire in upper left hand", desc: "Flame dissolving cosmos at end of cycle" },
              { act: "Tirobhava (Illusion)", symbol: "Foot crushing Apasmara Demon", desc: "Treading down spiritual ignorance" },
              { act: "Anugraha (Grace)", symbol: "Raised left foot pointing to refuge", desc: "Ultimate liberation of the human soul" }
            ]}
          />
        );
      case 'princes-timur':
        return (
          <MughalFamilyTree
            figures={[
              { name: "Amir Timur (Tamerlane)", role: "Dynastic Founder", relation: "Seated center in gold robe" },
              { name: "Emperor Babur", role: "1st Mughal Emperor", relation: "Grandson of Timur, invaded Delhi 1526" },
              { name: "Emperor Humayun", role: "2nd Mughal Emperor", relation: "Commissioned cotton painting c. 1550" },
              { name: "Emperor Akbar", role: "3rd Mughal Emperor", relation: "Added as young prince in central circle" },
              { name: "Emperor Jahangir", role: "4th Mughal Emperor", relation: "Expanded genealogical portrait c. 1605" }
            ]}
          />
        );
      case 'raja-pratap-singh':
        return (
          <RajputVsMughal
            matrix={[
              { feature: "Perspective & Space", mughal: "Persianate high horizon & depth", rajput: "Flat monochrome background" },
              { feature: "Color Palette", mughal: "Subtle mineral gradations & lapis", rajput: "Saturated primary crimson & emerald" },
              { feature: "Ideology", mughal: "Dynastic history & court protocol", rajput: "Kshatriya chivalry & Krishna piety" },
              { feature: "Portraiture", mughal: "3/4 view realistic individualized focus", rajput: "Strict iconic side profile (Ek-chashm)" }
            ]}
          />
        );
      case 'vasantsena':
        return (
          <RaviVarmaPress
            phases={[
              { stage: "Oil Original Painting", desc: "Artist paints master oil portrait on canvas." },
              { stage: "Bavarian Limestone Tracing", desc: "Technician traces design onto 12 heavy limestone slabs." },
              { stage: "Chemical Etching & Inking", desc: "Nitric acid etches stone; greasy ink adheres to image." },
              { stage: "Multi-Stone Steam Printing", desc: "Steam press rolls paper across 12 color stones sequentially." },
              { stage: "Mass Distribution", desc: "Affordable oleographs reach millions of Indian households." }
            ]}
          />
        );
      case 'group-three-girls':
        return (
          <SherGilModernism
            aspects={[
              { aspect: "Color Field Strategy", value: "Flat, unmodulated crimson red & ochre", desc: "Influenced by Gauguin & Ajanta murals" },
              { aspect: "Human Mood", value: "Contemplative, silent melancholy", desc: "Rejects orientalist exoticism for real dignity" },
              { aspect: "Form Simplification", value: "Monumental rounded silhouettes", desc: "Pioneered authentic Indian Modernist idiom" }
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Plaque Overview Card */}
      <div
        className="p-6 rounded-3xl border shadow-2xl space-y-4 backdrop-blur-md"
        style={{
          backgroundColor: config.surface,
          borderColor: config.border,
        }}
      >
        <div>
          <span
            className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5"
            style={{ color: config.accent }}
          >
            Curator's Editorial Overview
          </span>
          <p className="text-sm sm:text-base font-sans leading-relaxed text-slate-200">
            {artifact.overview}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-800/80 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 font-mono text-[10px] uppercase block">Medium</span>
            <strong className="text-slate-200 text-xs block truncate">{artifact.medium}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 font-mono text-[10px] uppercase block">Technique</span>
            <strong className="text-slate-200 text-xs block truncate">{artifact.technique}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 font-mono text-[10px] uppercase block">Origin</span>
            <strong className="text-slate-200 text-xs block truncate">{artifact.origin}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 font-mono text-[10px] uppercase block">Holding Collection</span>
            <strong className="text-slate-200 text-xs block truncate">{artifact.museum.split(',')[0]}</strong>
          </div>
        </div>
      </div>

      {/* Layered Knowledge Tabs */}
      {showDetails && (
        <div className="space-y-3">
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 gap-1 text-xs font-mono font-semibold">
            <button
              onClick={() => setActiveTab('narrative')}
              className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'narrative'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Story</span>
            </button>

            <button
              onClick={() => setActiveTab('workshop')}
              className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'workshop'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-950" />
              <span>Workshop</span>
            </button>

            <button
              onClick={() => setActiveTab('provenance')}
              className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'provenance'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Provenance</span>
            </button>
          </div>

          <div
            className="p-5 rounded-3xl border shadow-xl space-y-3"
            style={{ backgroundColor: config.surface, borderColor: config.border }}
          >
            {activeTab === 'narrative' && (
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200">
                <div>
                  <h4 className="font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">Historical Context</h4>
                  <p className="text-slate-300">{artifact.context}</p>
                </div>
                <div>
                  <h4 className="font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">Artistic Significance</h4>
                  <p className="text-slate-300">{artifact.artisticSignificance}</p>
                </div>
              </div>
            )}

            {activeTab === 'workshop' && (
              <div className="animate-in fade-in duration-200">
                {renderInteractiveModule()}
              </div>
            )}

            {activeTab === 'provenance' && (
              <div className="space-y-2.5 text-xs font-mono animate-in fade-in duration-200">
                <div>
                  <span className="text-slate-500 uppercase block">Museum Record</span>
                  <strong className="text-slate-200">{artifact.museum}</strong>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block">Accession Number</span>
                  <strong className="text-slate-200">{artifact.accession}</strong>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block">Rights & Credit</span>
                  <p className="text-slate-300">{artifact.museumSource.credit}</p>
                </div>
                {artifact.museumSource.url && (
                  <a
                    href={artifact.museumSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold pt-1"
                  >
                    <span>View Official Museum Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SceneNarrative;
