import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, Sparkles, 
  Zap, CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PERFECTO_CHALLENGES } from './vocabData';

export default function PerfectoGameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = PERFECTO_CHALLENGES[currentIdx];
  const shuffledOptions = useMemo(() => {
    return [...currentChallenge.options].sort(() => Math.random() - 0.5);
  }, [currentChallenge]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIdx < PERFECTO_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[64px] p-12 shadow-2xl border-4 border-slate-100 space-y-8"
        >
          <Trophy className="w-24 h-24 text-amber-400 mx-auto" />
          <div className="space-y-2">
            <h2 className="text-5xl font-black text-slate-900 uppercase italic">ԱՐԴՅՈՒՆՔ</h2>
            <div className="text-8xl font-black text-indigo-600">
              {score}/{PERFECTO_CHALLENGES.length}
            </div>
          </div>

          <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">
            {score === PERFECTO_CHALLENGES.length ? 'ՀՐԱՇԱԼԻ Է!' : 'ԼԱՎ Է, ՇԱՐՈՒՆԱԿԻՐ ՍՈՎՈՐԵԼ'}
          </p>
          
          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-slate-900 text-white py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-slate-400 font-black uppercase text-xs tracking-widest hover:text-slate-900">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* HUD */}
      <div className="flex justify-between items-center text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-slate-900">
          ՀԱՐՑ {currentIdx + 1} / {PERFECTO_CHALLENGES.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / PERFECTO_CHALLENGES.length) * 100}%` }}
        />
      </div>

      {/* Challenge Card */}
      <motion.div
        key={currentIdx}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white rounded-[64px] p-8 sm:p-20 shadow-2xl border border-slate-100 text-center space-y-12 relative overflow-hidden"
      >
        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center ${isCorrect ? 'bg-indigo-600' : 'bg-rose-600'} text-white space-y-4`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-24 h-24" />
                  <h3 className="text-6xl font-black italic uppercase">ՃԻՇՏ Է!</h3>
                </>
              ) : (
                <>
                  <AlertCircle className="w-24 h-24" />
                  <h3 className="text-6xl font-black italic uppercase">ՍԽԱԼ Է!</h3>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Ճիշտ պատասխանը`</p>
                    <p className="text-3xl font-black uppercase">{currentChallenge.correctAnswer}</p>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${currentChallenge.type === 'irregular' ? 'bg-rose-100 text-rose-600' : 'bg-indigo-100 text-indigo-600'}`}>
            {currentChallenge.type === 'irregular' ? 'ԱՆԿԱՆՈՆ' : 'ԿԱՆՈՆԱՎՈՐ'}
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 italic uppercase tracking-tighter leading-tight">
            {currentChallenge.sentence.split('___')[0]}
            <span className="text-indigo-600 underline decoration-slate-200">___</span>
            {currentChallenge.sentence.split('___')[1]}
          </h2>
          <p className="text-slate-400 font-bold italic text-lg">
            {currentChallenge.translation}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {shuffledOptions.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(opt)}
              className="bg-slate-50 hover:bg-slate-100 p-6 rounded-3xl text-xl font-black text-slate-900 border border-slate-100 shadow-sm transition-all uppercase italic"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] flex items-center justify-center gap-2">
         <Zap className="w-3 h-3" /> PERFECTO MASTERY <Sparkles className="w-3 h-3" />
      </div>
    </div>
  );
}
