export const motionConfig = {
  duration: {
    instant: 0.15,
    fast: 0.35,
    normal: 0.75,
    slow: 1.4,
    cinematic: 2.2
  },

  ease: {
    editorial: [0.16, 1, 0.3, 1], // Smooth custom cubic-bezier
    reveal: [0.25, 0.1, 0.25, 1],
    cinematic: [0.45, 0, 0.55, 1],
    spring: { type: "spring", stiffness: 300, damping: 30 }
  }
};
