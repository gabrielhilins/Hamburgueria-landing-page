'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { formatPrice } from '@/app/utils/animations';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  specs?: string[];
}

interface ProductCardProps {
  product: Product;
  variant?: 'menu' | 'home'; 
}

export const ProductCard = ({ product, variant = 'menu' }: ProductCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`group relative bg-[#121212] rounded-3xl border border-[#2A2A2A] hover:border-iron-red/50 transition-colors overflow-hidden flex flex-col ${variant === 'home' ? 'h-full' : ''}`}
    >
      <div className="relative h-48 md:h-64 w-full overflow-hidden bg-[#0a0a0a]">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80"></div>
        
        {product.popular && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-lg border border-red-400 z-10">
            Alta Demanda
          </div>
        )}

        <div className="absolute top-3 left-3 font-mono text-xs text-iron-red/50 border border-iron-red/20 px-1 rounded z-10">
          #{product.id.toString().padStart(3, '0')}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between relative z-10 -mt-2">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display font-bold text-xl text-white tracking-wide group-hover:text-iron-red transition-colors w-2/3">
              {product.name}
            </h3>
            {variant === 'home' && (
               <span className="bg-iron-red text-iron-bg font-bold px-3 py-1 rounded text-sm">
                 R$ {formatPrice(product.price)}
               </span>
            )}
          </div>
          
          {variant === 'menu' && product.specs && (
            <div className="flex flex-wrap gap-2 mb-3">
              {product.specs.map((spec, i) => (
                <span key={i} className="text-[10px] font-mono text-gray-400 bg-[#1F1F1F] px-2 py-0.5 rounded border border-[#2A2A2A]">
                  {spec}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-2">
            {product.description}
          </p>
        </div>

        {variant === 'menu' ? (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#222]">
            <span className="font-display font-bold text-2xl text-iron-red">
              R$ {formatPrice(product.price)}
            </span>
            <div className="text-gray-600 group-hover:text-iron-red transition-colors">
              <FaInfoCircle size={18} />
            </div>
          </div>
        ) : (
          <Link href="/links" className="w-full block text-center border border-[#333] py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-colors uppercase text-sm mt-4">
            Eu Quero
          </Link>
        )}
      </div>
    </motion.div>
  );
};