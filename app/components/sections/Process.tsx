'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, lineAnimation } from '@/app/utils/animations';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { processSteps } from '@/app/data/content';

export const ProcessSection = () => {
  return (
    <section className="py-24 px-6 bg-[#121212] border-t border-[#2A2A2A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="PROTOCOLO DE ENTREGA" subtitle="Logística" />

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#333] z-0 overflow-hidden">
             <motion.div 
               {...lineAnimation}
               className="w-full h-full bg-gradient-to-r from-transparent via-iron-red to-transparent"
             />
             
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-12"
          >
            {processSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="bg-[#1E1E1E] w-24 h-24 rounded-full border-4 border-[#121212] flex items-center justify-center text-iron-red shadow-lg mb-6 group hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} />
                </div>
                <div className="bg-[#2A2A2A] px-3 py-1 rounded-full text-[10px] font-bold text-gray-400 mb-4 border border-[#333]">PASSO {item.step}</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
