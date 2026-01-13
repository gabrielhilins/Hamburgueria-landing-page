import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { DeveloperBadge } from '@/app/components/ui/DeveloperBadge';
import { SiIfood } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
           <span className="font-display font-bold text-2xl tracking-wider text-white">IRON BURGER</span>
           <p className="text-gray-500 text-sm mt-2">© 2026 Iron Burger. Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
           <SocialLink href="#" icon={<FaInstagram size={20} />} />
           <SocialLink href="#" icon={<FaWhatsapp size={20} />} />
           <SocialLink href="#" icon={<SiIfood size={20} />} />
        </div>

        <DeveloperBadge className="md:items-end" />
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} className="bg-[#1E1E1E] p-3 rounded-full text-white hover:bg-iron-red hover:text-iron-bg transition-colors">
    {icon}
  </a>
);
