'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { products, categories } from '@/app/data/products';
import { ProductCard } from '@/app/components/ui/ProductCard';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white selection:bg-iron-red selection:text-black font-sans pb-24">
      
      <header className="sticky top-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="bg-[#1E1E1E] p-2 rounded hover:bg-[#2A2A2A] transition-colors">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="font-display font-bold text-xl uppercase tracking-widest text-iron-red">
                O Arsenal
              </h1>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Especificações Técnicas v2.0</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500 group-focus-within:text-iron-red transition-colors" />
            </div>
            <input
              type="text"
              placeholder="BUSCAR CÓDIGO..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#181818] border border-[#333] text-gray-300 text-sm rounded-lg focus:ring-1 focus:ring-iron-red focus:border-iron-red block w-36 md:w-64 pl-10 p-2.5 outline-none transition-all placeholder:font-mono placeholder:text-xs"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto no-scrollbar border-t border-[#1E1E1E]">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-300 font-bold text-xs uppercase tracking-wider
                  ${activeCategory === cat.id 
                    ? 'bg-iron-red text-black border-iron-red shadow-[0_0_15px_rgba(255,0,0,0.2)]' 
                    : 'bg-[#181818] text-gray-400 border-[#333] hover:border-gray-500 hover:text-white'
                  }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="menu" />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <FaInfoCircle className="mx-auto text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Nenhum item encontrado</h3>
            <p className="text-gray-500">Ajuste seus filtros de busca do sistema.</p>
          </div>
        )}
      </div>
    </main>
  );
}