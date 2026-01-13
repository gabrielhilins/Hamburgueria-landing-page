'use client';

import { motion } from 'framer-motion';
import { FaFireAlt } from 'react-icons/fa';

export const AboutSection = () => {
  return (
    <section id="origem" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
         <motion.div 
           className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
         >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <p className="font-display font-bold text-3xl text-white">GARAGEM 01</p>
              <p className="text-iron-red font-mono text-sm">EST. 2018</p>
            </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="font-display font-extrabold italic text-5xl text-white mb-6">
             A ORIGEM DO <span className="text-[#2A2A2A] text-stroke-white">FERRO</span>
           </h2>
           <p className="text-gray-400 text-lg leading-relaxed mb-6">
             Tudo começou numa garagem velha, com uma chapa de ferro fundido herdada e uma obsessão: criar o hambúrguer perfeito. Sem ingredientes processados, sem atalhos.
           </p>
           <p className="text-gray-400 text-lg leading-relaxed mb-8">
             Nossa filosofia é brutalista: carne fresca moída diariamente, pão de fermentação natural e molhos feitos na casa. O estilo industrial não é apenas decoração, é nossa essência de trabalho duro e qualidade inegociável.
           </p>
           
           <div className="flex items-center gap-4">
              <FaFireAlt className="text-iron-red text-3xl" />
              <div>
                 <h4 className="font-bold text-white">Smash Burger Original</h4>
                 <p className="text-sm text-gray-500">Técnica de prensagem única.</p>
              </div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};
