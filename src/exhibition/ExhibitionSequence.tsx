import React from 'react';
import { ARTIFACTS } from '@/data/artifacts';
import ArtifactScene from '@/scenes/ArtifactScene';
import OpeningScene from './OpeningScene';
import EpilogueScene from './EpilogueScene';
import TimelineStream from '@/components/TimelineStream';
import { useExhibitionProgress } from '@/hooks/useExhibitionProgress';

interface ExhibitionSequenceProps {
  onOpenMap: () => void;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
  onProgressUpdate?: (activeIdx: number, globalProgress: number) => void;
  onSelectArtifact: (index: number) => void;
}

export const ExhibitionSequence: React.FC<ExhibitionSequenceProps> = ({
  onOpenMap,
  onOpenCompare,
  onOpenQuiz,
  onProgressUpdate,
  onSelectArtifact,
}) => {
  const { globalProgress, activeArtifactIndex, sceneProgress } = useExhibitionProgress(8);

  // Notify parent shell of scroll progress updates
  React.useEffect(() => {
    if (onProgressUpdate) {
      onProgressUpdate(activeArtifactIndex, globalProgress);
    }
  }, [activeArtifactIndex, globalProgress, onProgressUpdate]);

  return (
    <div className="relative w-full">
      {/* 0. OPENING TITLE SCENE */}
      <OpeningScene />

      {/* 1-8. THE 8 CANONICAL ARTIFACT SCENES */}
      <div className="relative">
        {ARTIFACTS.map((artifact, idx) => (
          <ArtifactScene
            key={artifact.id}
            artifact={artifact}
            sceneProgress={activeArtifactIndex === idx ? sceneProgress : activeArtifactIndex > idx ? 1 : 0}
            isActive={activeArtifactIndex === idx}
          />
        ))}
      </div>

      {/* 9. CHRONOLOGICAL TIMELINE EXHIBITION INDEX (SHIFTED TO BOTTOM AFTER LAST ARTIFACT) */}
      <TimelineStream
        currentIdx={activeArtifactIndex}
        onSelectArtifact={onSelectArtifact}
      />

      {/* 10. EPILOGUE SCENE */}
      <EpilogueScene
        onOpenMap={onOpenMap}
        onOpenCompare={onOpenCompare}
        onOpenQuiz={onOpenQuiz}
      />
    </div>
  );
};

export default ExhibitionSequence;
