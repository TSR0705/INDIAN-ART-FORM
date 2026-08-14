import { useState, useEffect } from 'react';

export interface ExhibitionProgressState {
  globalProgress: number; // 0 to 1
  activeArtifactIndex: number; // 0 to 7
  sceneProgress: number; // 0 to 1 for the currently active scene
  totalScenes: number;
}

export function useExhibitionProgress(totalArtifacts: number = 8): ExhibitionProgressState {
  const [state, setState] = useState<ExhibitionProgressState>({
    globalProgress: 0,
    activeArtifactIndex: 0,
    sceneProgress: 0,
    totalScenes: totalArtifacts,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const globalProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Calculate active scene index based on scroll position
      const rawIndex = globalProgress * totalArtifacts;
      const activeArtifactIndex = Math.min(totalArtifacts - 1, Math.floor(rawIndex));
      const sceneProgress = rawIndex - activeArtifactIndex;

      setState({
        globalProgress,
        activeArtifactIndex,
        sceneProgress,
        totalScenes: totalArtifacts,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial computation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalArtifacts]);

  return state;
}
