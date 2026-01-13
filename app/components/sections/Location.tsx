'use client';

import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 px-6 max-w-7xl mx-auto">
       <div className="grid md:grid-cols-2 gap-12 bg-[#1E1E1E] rounded-3xl overflow-hidden border border-[#2A2A2A]">
          <div className="p-12 flex flex-col justify-center">
             <h2 className="font-display font-bold text-4xl text-white mb-8">A BASE <span className="text-iron-red">IRON</span></h2>
             
             <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="bg-[#2A2A2A] p-3 rounded-full h-fit text-iron-red">
                      <FaMapMarkerAlt size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl text-white mb-1">Endereço</h4>
                      <p className="text-gray-400">Rua do Ferro Fundido, 666<br/>Distrito Industrial, São Paulo - SP</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="bg-[#2A2A2A] p-3 rounded-full h-fit text-iron-red">
                      <FaClock size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl text-white mb-1">Horários</h4>
                      <p className="text-gray-400">Terça a Domingo<br/><span className="text-white font-bold">18h às 23h30</span></p>
                   </div>
                </div>
             </div>

          </div>

          <div className="min-h-[400px] h-full bg-[#2A2A2A] relative overflow-hidden group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0216976694846!2d-46.5696535!3d-23.531722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f53e8593967%3A0xa92de87f09687a2a!2sIron%20Burguer%20Hamburgueria!5e0!3m2!1spt-BR!2sbr!4v1768284197757!5m2!1spt-BR!2sbr" 
               className="absolute inset-0 w-full h-full"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
       </div>
    </section>
  );
};
