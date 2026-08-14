export interface SceneTimelineBounds {
  date: [number, number];
  title: [number, number];
  artwork: [number, number];
  context: [number, number];
  details: [number, number];
  exit: [number, number];
}

export const DEFAULT_SCENE_TIMELINE: SceneTimelineBounds = {
  date: [0.00, 0.15],
  title: [0.10, 0.30],
  artwork: [0.20, 0.65],
  context: [0.50, 0.80],
  details: [0.70, 0.92],
  exit: [0.88, 1.00]
};

export const SCENE_TIMELINES: Record<string, SceneTimelineBounds> = {
  "dancing-girl": {
    date: [0.00, 0.14],
    title: [0.10, 0.28],
    artwork: [0.20, 0.65],
    context: [0.48, 0.78],
    details: [0.70, 0.90],
    exit: [0.88, 1.00]
  },
  "lion-capital": {
    date: [0.00, 0.12],
    title: [0.08, 0.26],
    artwork: [0.18, 0.62],
    context: [0.45, 0.75],
    details: [0.68, 0.90],
    exit: [0.88, 1.00]
  },
  "standing-buddha": {
    date: [0.00, 0.15],
    title: [0.12, 0.30],
    artwork: [0.22, 0.70],
    context: [0.52, 0.82],
    details: [0.72, 0.92],
    exit: [0.90, 1.00]
  },
  "nataraja": {
    date: [0.00, 0.12],
    title: [0.08, 0.24],
    artwork: [0.16, 0.68],
    context: [0.46, 0.78],
    details: [0.68, 0.92],
    exit: [0.88, 1.00]
  },
  "princes-timur": {
    date: [0.00, 0.14],
    title: [0.10, 0.28],
    artwork: [0.20, 0.66],
    context: [0.50, 0.80],
    details: [0.70, 0.90],
    exit: [0.88, 1.00]
  },
  "raja-pratap-singh": {
    date: [0.00, 0.14],
    title: [0.10, 0.28],
    artwork: [0.20, 0.66],
    context: [0.50, 0.80],
    details: [0.70, 0.90],
    exit: [0.88, 1.00]
  },
  "vasantsena": {
    date: [0.00, 0.14],
    title: [0.10, 0.28],
    artwork: [0.20, 0.66],
    context: [0.50, 0.80],
    details: [0.70, 0.90],
    exit: [0.88, 1.00]
  },
  "group-three-girls": {
    date: [0.00, 0.15],
    title: [0.12, 0.30],
    artwork: [0.22, 0.75],
    context: [0.52, 0.85],
    details: [0.75, 0.95],
    exit: [0.92, 1.00]
  }
};
