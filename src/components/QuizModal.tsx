import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, X, Sparkles, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import quizBank from '@/data/quizData.json';

interface QuizModalProps {
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizBank[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizBank.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#b87333', '#e6c887', '#1a5336', '#9e2a2b'],
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-lg text-slate-100">Kāla Curator Challenge</h3>
              <p className="text-xs text-slate-400 font-mono">Test your knowledge across 4,500 years of Indian Art</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Question {currentIdx + 1} of {quizBank.length}</span>
                <span className="text-amber-400 font-bold">Score: {score}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / quizBank.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h4 className="text-lg sm:text-xl font-cinzel font-bold text-slate-100 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isCorrect = idx === currentQ.correctIndex;
                  const isChosen = idx === selectedOption;

                  let btnStyle = 'bg-slate-950/80 text-slate-200 border-slate-800 hover:bg-slate-800';
                  if (showExplanation) {
                    if (isCorrect) btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
                    else if (isChosen) btnStyle = 'bg-rose-500/20 border-rose-400 text-rose-300 font-semibold';
                    else btnStyle = 'bg-slate-950/40 text-slate-500 border-slate-900';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={showExplanation}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all border flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />}
                      {showExplanation && isChosen && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {showExplanation && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-200 space-y-3 animate-in fade-in duration-200">
                  <div>
                    <strong className="text-amber-400 font-mono uppercase block mb-1">Historical Explanation:</strong>
                    <p className="leading-relaxed">{currentQ.explanation}</p>
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    {currentIdx + 1 === quizBank.length ? 'View Curator Certificate' : 'Next Question →'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results & Certificate */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-2xl shadow-amber-500/40">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold font-cinzel text-slate-100">Exhibition Completed!</h4>
                <p className="text-sm text-slate-400 font-mono mt-1">
                  You scored <span className="text-amber-400 font-bold">{score} / {quizBank.length}</span> (
                  {Math.round((score / quizBank.length) * 100)}%)
                </p>
              </div>

              {/* Virtual Certificate Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-amber-500/40 shadow-2xl max-w-md mx-auto text-center space-y-3 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                  Certificate of Cultural Connoisseurship
                </span>
                <h5 className="font-cinzel text-lg font-bold text-slate-100">
                  {score >= 7 ? 'Master Curator of Indian Art History' : 'Apprentice of Indian Heritage'}
                </h5>
                <p className="text-xs text-slate-300 font-cormorant leading-relaxed">
                  Conferred for demonstrating rigorous appreciation of 4,500 years of Indian artistic traditions, metallurgy, sculpture, and painting.
                </p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
                  Kāla Digital Humanities Initiative • 2500 BCE – 1935 CE
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
