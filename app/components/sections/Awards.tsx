'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { awards } from '@/app/data/content';

export const AwardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const currentAward = awards[currentIndex];

  return (
    <section id="reconhecimento" className="py-24 px-6 bg-[#0F0F0F] border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="SALÃO DE TROFÉUS" subtitle="Reconhecimento" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
            >
              {/* Lado Esquerdo: O Card "Vitrine" */}
              <div className="relative group">
                 {/* Fundo Decorativo */}
                 <div className="absolute inset-0 bg-iron-red/20 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                 
                 <div className="relative aspect-square bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-[2rem] border border-[#2A2A2A] flex items-center justify-center p-12 shadow-2xl overflow-hidden">
                    {/* Linhas decorativas estilo blueprint */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-iron-red/30"></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-iron-red/30"></div>

                    {/* Ícone Gigante */}
                    <currentAward.icon size={140} className="text-iron-red drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500" />
                 </div>
              </div>

              {/* Lado Direito: Conteúdo e Controles */}
              <div className="flex flex-col justify-center">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                 >
                    <span className="text-iron-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                      {currentAward.org}
                    </span>
                    <h3 className="font-display font-black italic text-5xl md:text-6xl text-white mb-6 leading-none">
                      {currentAward.title}
                    </h3>
                    <div className="w-20 h-1 bg-iron-red mb-8"></div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                      {currentAward.desc}
                    </p>

                    {/* Controles de Navegação */}
                    <div className="flex items-center gap-6">
                       <div className="flex gap-2">
                          <button 
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-iron-red hover:border-iron-red hover:text-black transition-all group cursor-pointer"
                          >
                             <FaChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                          </button>
                          <button 
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-iron-red hover:border-iron-red hover:text-black transition-all group cursor-pointer"
                          >
                             <FaChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                       </div>

                       {/* Contador */}
                       <div className="h-px flex-1 bg-[#2A2A2A]"></div>
                       <div className="font-mono text-sm text-gray-500 font-bold">
                          <span className="text-white">0{currentIndex + 1}</span> / 0{awards.length}
                       </div>
                    </div>
                 </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};