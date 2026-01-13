'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaHamburger, FaInstagram, FaClock, FaChevronRight, FaStar, FaArrowRight, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { useCurrentDate } from '@/app/utils/useCurrentDate';
import { DeveloperBadge } from '@/app/components/ui/DeveloperBadge';
import { itemVariants, containerVariants } from '@/app/utils/animations';

export default function LinksPage() {
  const { weekday, fullDate } = useCurrentDate();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center py-16 px-4 selection:bg-iron-red selection:text-black">
      <div className="w-full max-w-lg bg-[#121212] shadow-2xl shadow-black border border-[#1E1E1E] rounded-[2.5rem] relative overflow-hidden flex flex-col">
        
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1E1E1E] to-[#121212] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0 pointer-events-none"></div>

        <motion.div 
          className="relative z-10 px-8 pt-10 pb-6 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group cursor-pointer shrink-0">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-iron-red via-red-600 to-transparent animate-spin-slow rounded-full"></div>
            <div className="absolute inset-1 rounded-full bg-[#121212] flex items-center justify-center overflow-hidden border-4 border-[#121212]">
               <div className="w-full h-full bg-iron-red flex items-center justify-center text-black font-display font-black text-3xl italic tracking-tighter">
                 IRON
               </div>
            </div>
            
            <div className="absolute -bottom-1 -right-1 bg-[#1E1E1E] border border-[#333] px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-lg">
               <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
               </span>
               <span className="text-[7px] font-bold uppercase tracking-wider text-white">Aberto</span>
            </div>
          </div>

          <div className="text-left">
            <h1 className="font-display font-extrabold text-2xl text-white mb-0.5 tracking-wide">IRON BURGER</h1>
            <p className="text-gray-400 text-xs font-medium leading-relaxed">O verdadeiro sabor industrial. <br/>Desde 2018 forjando qualidade.</p>
          </div>

        </motion.div>

        <div className="px-6 pb-12 flex flex-col gap-3 relative z-10">
            
            {/* 1. Novidade */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative bg-[#181818] rounded-2xl p-3 border border-[#2A2A2A] overflow-hidden group hover:border-iron-red/50 transition-colors">
                 <div className="absolute top-0 right-0 bg-iron-red text-black text-[9px] font-bold px-2 py-0.5 rounded-bl-lg z-20">NOVIDADE</div>
                 <div className="flex items-center gap-3 relative z-10">
                    <div className="w-16 h-16 bg-cover bg-center rounded-lg shadow-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=200&auto=format&fit=crop')" }}></div>
                    <div className="flex-1 text-left">
                       <h3 className="font-display font-bold text-base text-white leading-tight">THE ANVIL</h3>
                       <p className="text-[10px] text-gray-400 mb-1">Gorgonzola fundido e geleia de pimenta.</p>
                       <Link href="/menu" className="text-iron-red text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ver Detalhes <FaChevronRight size={8} />
                       </Link>
                    </div>
                 </div>
                 <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-iron-red/10 blur-3xl rounded-full pointer-events-none"></div>
              </div>
            </motion.div>

            {/* 2. Pedir no Zap */}
            <motion.a 
              href="https://wa.me/5511999999999" 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-black p-3 rounded-xl flex items-center justify-center gap-2 font-bold text-base shadow-[0_0_15px_rgba(37,211,102,0.1)] transition-all transform hover:scale-[1.02]"
            >
              <FaWhatsapp size={20} /> 
              PEDIR NO ZAP
            </motion.a>

            {/* 3. Conheça o Iron Burger */}
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Link 
                  href="/" 
                  className="flex items-center justify-between p-4 bg-[#1E1E1E] rounded-xl border border-[#2A2A2A] hover:bg-[#2A2A2A] hover:border-iron-red transition-all group"
                >
                   <div className="flex items-center gap-3">
                      <div className="bg-[#121212] p-2 rounded-lg text-white group-hover:text-iron-red transition-colors">
                         <FaGlobe size={18} />
                      </div>
                      <span className="text-sm font-bold text-white group-hover:text-iron-red transition-colors uppercase tracking-wide">
                         Conheça o Iron Burger
                      </span>
                   </div>
                   <FaArrowRight className="text-gray-600 group-hover:text-iron-red group-hover:translate-x-1 transition-all" size={14} />
                </Link>
            </motion.div>

            {/* 4. Siga no Instagram */}
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-[#1E1E1E] rounded-xl border border-[#2A2A2A] hover:bg-[#2A2A2A] hover:border-iron-red transition-all group"
                >
                   <div className="flex items-center gap-3">
                      <div className="bg-[#121212] p-2 rounded-lg text-white group-hover:text-iron-red transition-colors">
                         <FaInstagram size={18} />
                      </div>
                      <span className="text-sm font-bold text-white group-hover:text-iron-red transition-colors uppercase tracking-wide">
                         Siga @ironburger no instagram
                      </span>
                   </div>
                   <FaArrowRight className="text-gray-600 group-hover:text-iron-red group-hover:translate-x-1 transition-all" size={14} />
                </a>
            </motion.div>

            {/* 5. Grid Cardápio e Como Chegar */}
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/menu" className="col-span-1">
                <motion.div variants={itemVariants} className="h-full bg-[#1E1E1E] border border-[#2A2A2A] hover:border-iron-red p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center group transition-colors">
                  <div className="bg-[#2A2A2A] p-1.5 rounded-full text-white group-hover:text-iron-red transition-colors">
                     <FaHamburger size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-200">Cardápio</span>
                </motion.div>
              </Link>

              <a href="https://maps.google.com" target="_blank" className="col-span-1">
                <motion.div variants={itemVariants} className="h-full bg-[#1E1E1E] border border-[#2A2A2A] hover:border-blue-500 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center group transition-colors">
                  <div className="bg-[#2A2A2A] p-1.5 rounded-full text-white group-hover:text-blue-500 transition-colors">
                     <FaMapMarkerAlt size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-200">Como Chegar</span>
                </motion.div>
              </a>
            </motion.div>

            {/* 6. Funcionamento */}
            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex items-center justify-between p-4 bg-[#181818] rounded-xl border border-[#2A2A2A]">
               <div className="flex items-center gap-3">
                  <div className="bg-[#2A2A2A] p-2 rounded-lg text-iron-red">
                     <FaClock size={18} />
                  </div>
                  <div className="text-left">
                     <p className="text-xs text-iron-red font-bold uppercase tracking-wider mb-0.5">
                         {weekday} • {fullDate}
                     </p>
                     <p className="text-sm font-medium text-white">Aberto: 18:00 - 23:30</p>
                  </div>
               </div>
            </motion.div>
        </div>

        <div className="py-6 border-t border-[#1E1E1E] bg-[#121212]/50 text-center">
            <p className="text-gray-500 text-[10px] font-bold tracking-widest">
              &copy; {new Date().getFullYear()} Iron Burger. Todos os direitos reservados
            </p>
        </div>

      </div>

      <footer className="mt-8 flex flex-col items-center gap-4 text-center">
         <DeveloperBadge />
      </footer>
    </main>
  );
}