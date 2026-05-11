import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ArrowLeft,
  Sparkles, Zap, Star
} from 'lucide-react';
import { PERFECTO_GRAMMAR } from './vocabData';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex p-3 bg-amber-100 rounded-2xl shadow-inner">
           <BookOpen className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 uppercase italic tracking-tighter">
          PRETÉRITO PERFECTO
        </h2>
        <p className="text-slate-500 font-bold italic max-w-xl mx-auto uppercase tracking-widest text-xs">
          Ինչպես խոսել անցյալի մասին
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Step 1: Haber */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[48px] p-8 border border-slate-100 shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">1</div>
            <h3 className="text-2xl font-black text-slate-900 italic uppercase">HABER (Օժանդակ բայ)</h3>
          </div>
          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-inner font-sans">
             {PERFECTO_GRAMMAR.auxiliary.map((row) => (
               <div key={row.p} className="flex border-b border-white last:border-0 hover:bg-white transition-colors">
                  <div className="w-1/2 p-4 font-black italic text-slate-400 uppercase text-xs tracking-widest">{row.p}</div>
                  <div className="w-1/2 p-4 font-black text-indigo-600 italic text-xl uppercase">{row.c}</div>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Step 2: Participle */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[48px] p-8 border border-slate-100 shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black">2</div>
            <h3 className="text-2xl font-black text-slate-900 italic uppercase">Հիմնական բայ</h3>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 space-y-4">
              <p className="text-xs font-black text-amber-600 uppercase tracking-widest">ԿԱՆՈՆԱՎՈՐ ԲԱՅԵՐ (-AR)</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-300 uppercase italic line-through">AR</span>
                <span className="text-5xl font-black text-amber-600 uppercase italic"> + ADO</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-700 italic">Trabajar → Trabajado</p>
                <p className="text-sm font-bold text-slate-700 italic">Estudiar → Estudiado</p>
                <p className="text-sm font-bold text-slate-700 italic">Viajar → Viajado</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl flex gap-3 italic text-sm text-slate-400 leading-relaxed">
              <Zap className="shrink-0 w-5 h-5 text-amber-500" />
              <span>Այս բաղադրյալ ժամանակաձևը ցույց է տալիս ավարտված գործողություն, որը կապված է ներկայի հետ։</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Example */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 text-white rounded-[48px] p-10 text-center space-y-4 shadow-2xl relative overflow-hidden"
      >
        <Star className="absolute top-4 right-4 text-amber-400 w-12 h-12 opacity-20" />
        <h4 className="text-xl font-bold uppercase tracking-[0.3em] opacity-40">Օրինակ</h4>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black italic uppercase leading-none">
            Yo <span className="text-indigo-400">he</span> trabaj<span className="text-amber-400">ado</span>
          </p>
          <p className="text-slate-400 font-bold italic">Ես աշխատել եմ</p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <section className="bg-indigo-600 rounded-[48px] p-8 sm:p-12 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Sparkles className="w-32 h-32 rotate-12" />
        </div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">Պատրա՞ստ ես խաղալ</h3>
          <p className="text-indigo-100 font-bold opacity-80 italic uppercase tracking-widest text-xs">Ստուգիր քո գիտելիքները միայնակ:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-indigo-500/30 backdrop-blur-md text-white border border-indigo-400 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:bg-indigo-500/50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
