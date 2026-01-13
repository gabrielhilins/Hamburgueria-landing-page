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
    <main className="min-h-screen bg-[#0A0A0A] text-white flex justify-center selection:bg-iron-red selection:text-black">
      <div className="w-full max-w-md bg-[#121212] min-h-screen shadow-2xl shadow-black border-x border-[#1E1E1E] relative overflow-hidden flex flex-col">
        
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1E1E1E] to-[#121212] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0 pointer-events-none"></div>

        <motion.div 
          className="relative z-10 px-6 pt-12 pb-6 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-6 group cursor-pointer">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-iron-red via-red-600 to-transparent animate-spin-slow rounded-full"></div>
            <div className="absolute inset-1 rounded-full bg-[#121212] flex items-center justify-center overflow-hidden border-4 border-[#121212]">
               <div className="w-full h-full bg-iron-red flex items-center justify-center text-black font-display font-black text-4xl italic tracking-tighter">
                 IRON
               </div>
            </div>
            
            <div className="absolute bottom-2 right-2 bg-[#1E1E1E] border border-[#333] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-[8px] font-bold uppercase tracking-wider text-white">Aberto</span>
            </div>
          </div>

          <h1 className="font-display font-extrabold text-3xl text-white mb-1 tracking-wide">IRON BURGER</h1>
          <p className="text-gray-400 text-sm font-medium mb-4">O verdadeiro sabor industrial. <br/>Desde 2018 forjando qualidade.</p>
          
          <div className="flex items-center gap-1 text-iron-red text-sm mb-2">
             <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
             <span className="text-gray-500 ml-1 text-xs">(4.9/5 com +2k avaliações)</span>
          </div>

        </motion.div>

        <div className="flex-1 px-6 pb-8 flex flex-col gap-4 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative bg-[#181818] rounded-2xl p-4 border border-[#2A2A2A] overflow-hidden group hover:border-iron-red/50 transition-colors">
                 <div className="absolute top-0 right-0 bg-iron-red text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg z-20">NOVIDADE</div>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="w-20 h-20 bg-cover bg-center rounded-lg shadow-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=200&auto=format&fit=crop')" }}></div>
                    <div className="flex-1 text-left">
                       <h3 className="font-display font-bold text-lg text-white leading-tight">THE ANVIL</h3>
                       <p className="text-xs text-gray-400 mb-2">Gorgonzola fundido e geleia de pimenta.</p>
                       <Link href="/menu" className="text-iron-red text-xs font-bold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ver Detalhes <FaChevronRight size={10} />
                       </Link>
                    </div>
                 </div>
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-iron-red/10 blur-3xl rounded-full pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="https://wa.me/5511999999999" 
                variants={itemVariants}
                className="col-span-2 bg-[#25D366] hover:bg-[#20bd5a] text-black p-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all transform hover:scale-[1.02]"
              >
                <FaWhatsapp size={24} /> 
                PEDIR NO ZAP
              </motion.a>

              <Link href="/menu" className="col-span-1">
                <motion.div variants={itemVariants} className="h-full bg-[#1E1E1E] border border-[#2A2A2A] hover:border-iron-red p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center group transition-colors">
                  <div className="bg-[#2A2A2A] p-2 rounded-full text-white group-hover:text-iron-red transition-colors">
                     <FaHamburger size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-200">Cardápio</span>
                </motion.div>
              </Link>

              <a href="https://maps.google.com" target="_blank" className="col-span-1">
                <motion.div variants={itemVariants} className="h-full bg-[#1E1E1E] border border-[#2A2A2A] hover:border-blue-500 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center group transition-colors">
                  <div className="bg-[#2A2A2A] p-2 rounded-full text-white group-hover:text-blue-500 transition-colors">
                     <FaMapMarkerAlt size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-200">Como Chegar</span>
                </motion.div>
              </a>
            </motion.div>

            <motion.div 
               className="space-y-3"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               <motion.div variants={itemVariants} className="flex items-center justify-between p-4 bg-[#181818] rounded-xl border border-[#2A2A2A]">
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
                
               <motion.div variants={itemVariants}>
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

               <motion.a 
                 href="https://instagram.com" 
                 target="_blank"
                 variants={itemVariants} 
                 className="flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-[#FF0000] via-[#D90429] to-[#8D0000] text-white hover:opacity-90 transition-all text-sm font-bold uppercase tracking-wider shadow-lg"
               >
                  <FaInstagram size={18} /> Siga @ironburger
               </motion.a>
            </motion.div>
        </div>

        <div className="py-8 border-t border-[#1E1E1E] bg-[#121212]">
           <DeveloperBadge />
        </div>

      </div>
    </main>
  );
}