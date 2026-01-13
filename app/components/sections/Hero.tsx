'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/utils/animations';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10"></div>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="text-left"
        >
          <div className="inline-block bg-[#2A2A2A] px-4 py-1 rounded-full border border-iron-red/30 mb-6">
             <span className="text-iron-red font-bold uppercase text-sm tracking-widest">Desde 2018</span>
          </div>
          <h1 className="font-display font-extrabold italic text-6xl md:text-8xl leading-[0.9] text-white mb-6">
            FORJADO <br/> NO <span className="text-transparent bg-clip-text bg-gradient-to-r from-iron-red to-red-600">FOGO</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
            Não somos apenas uma hamburgueria. Somos uma experiência industrial de sabor. Carne 100% Angus, queijo de verdade e sem frescura.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/links" className="bg-iron-red text-iron-bg font-display font-bold text-xl px-8 py-4 rounded-xl hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.3)] text-center">
              VER CARDÁPIO
            </Link>
            <a href="#origem" className="border border-[#2A2A2A] bg-[#1E1E1E]/50 backdrop-blur text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2A2A2A] transition-colors text-center">
              NOSSA HISTÓRIA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
