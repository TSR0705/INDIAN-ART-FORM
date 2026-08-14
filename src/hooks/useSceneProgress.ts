import { SceneTimelineBounds, DEFAULT_SCENE_TIMELINE } from '@/data/sceneTimelines';

export interface ScenePhaseState {
  showDate: boolean;
  showTitle: boolean;
  showArtwork: boolean;
  showContext: boolean;
  showDetails: boolean;
  isExiting: boolean;
}

export function useSceneProgress(
  sceneProgress: number,
  timelineBounds: SceneTimelineBounds = DEFAULT_SCENE_TIMELINE
): ScenePhaseState {
  return {
    showDate: sceneProgress >= timelineBounds.date[0],
    showTitle: sceneProgress >= timelineBounds.title[0],
    showArtwork: sceneProgress >= timelineBounds.artwork[0],
    showContext: sceneProgress >= timelineBounds.context[0],
    showDetails: sceneProgress >= timelineBounds.details[0],
    isExiting: sceneProgress >= timelineBounds.exit[0],
  };
}
