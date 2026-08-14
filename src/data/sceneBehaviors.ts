export interface SceneBehavior {
  enableHotspots: boolean;
  enableZoomLens: boolean;
  enableFullscreen: boolean;
  enableAudioNarration: boolean;
  specialEffect?: 'emblem-transition' | 'cosmic-rotation' | 'miniature-lineage' | 'litho-layers' | 'none';
  customPromptText?: string;
}

export const SCENE_BEHAVIORS: Record<string, SceneBehavior> = {
  "dancing-girl": {
    enableHotspots: true,
    enableZoomLens: false,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'none',
    customPromptText: "Tap hotspots to inspect lost-wax casting details"
  },
  "lion-capital": {
    enableHotspots: true,
    enableZoomLens: false,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'emblem-transition',
    customPromptText: "Explore ancient Mauryan capital vs Modern State Emblem"
  },
  "standing-buddha": {
    enableHotspots: true,
    enableZoomLens: false,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'none',
    customPromptText: "Meditative stillness & Abhaya Mudra iconography"
  },
  "nataraja": {
    enableHotspots: true,
    enableZoomLens: false,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'cosmic-rotation',
    customPromptText: "Explore 5 cosmic acts of Shiva's Ananda Tandava"
  },
  "princes-timur": {
    enableHotspots: true,
    enableZoomLens: true,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'miniature-lineage',
    customPromptText: "Use 3x Lens to discover Timurid dynastic lineage"
  },
  "raja-pratap-singh": {
    enableHotspots: true,
    enableZoomLens: true,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'none',
    customPromptText: "Inspect Jaipur court manuscript gold & pigment details"
  },
  "vasantsena": {
    enableHotspots: true,
    enableZoomLens: true,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'litho-layers',
    customPromptText: "Explore multi-stone oleograph printing revolution"
  },
  "group-three-girls": {
    enableHotspots: true,
    enableZoomLens: true,
    enableFullscreen: true,
    enableAudioNarration: true,
    specialEffect: 'none',
    customPromptText: "Contemplate the birth of Indian Modernism"
  }
};
