'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/app/utils/animations';
import { stats } from '@/app/data/content';

export const StatsSection = () => {
  return (
    <section className="py-12 border-b border-[#2A2A2A] bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="p-4">
              <h3 className="font-display font-bold text-4xl md:text-5xl text-iron-red mb-2">{stat.value}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
