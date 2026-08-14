import { Variants } from 'framer-motion';

export const sceneVariants: Record<string, Variants> = {
  mask: {
    hidden: { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)', scale: 0.96 },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
    exit: { opacity: 0, clipPath: 'inset(5% 5% 5% 5%)', scale: 1.02 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  },
  vertical: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 }
  },
  radial: {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 1.08, rotate: 3 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },
  layered: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  }
};
