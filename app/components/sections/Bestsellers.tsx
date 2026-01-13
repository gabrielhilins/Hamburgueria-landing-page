'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/app/utils/animations';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { ProductCard } from '@/app/components/ui/ProductCard';
import { products } from '@/app/data/products';
import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';

export const BestsellersSection = () => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 3);

  return (
    <section id="menu" className="py-24 px-6 bg-[#1E1E1E] border-y border-[#2A2A2A]">
       <div className="max-w-7xl mx-auto">
          <SectionTitle title="PESOS PESADOS" subtitle="O Arsenal" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
             {bestsellers.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                   <ProductCard product={product} variant="home" />
                </motion.div>
             ))}
          </motion.div>
          
          <div className="text-center mt-12">
             <Link href="/links" className="inline-flex items-center gap-2 text-iron-red font-bold hover:text-white transition-colors border-b border-iron-red hover:border-white pb-1">
                Ver Cardápio Completo <FaHamburger/>
             </Link>
          </div>
       </div>
    </section>
  );
};
