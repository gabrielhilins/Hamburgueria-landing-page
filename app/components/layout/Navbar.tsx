import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="bg-iron-red p-2 rounded-full text-iron-bg">
              <FaHamburger size={24} />
           </div>
           <span className="font-display font-bold text-2xl tracking-wider text-white">IRON BURGER</span>
        </div>

        <div className="hidden md:flex gap-8 font-medium text-gray-300">
          <NavLink href="#origem" label="A Origem" />
          <NavLink href="#reconhecimento" label="Reconhecimento" />
          <NavLink href="#menu" label="Menu" />
          <NavLink href="#localizacao" label="Localização" />
        </div>

        <Link href="/links" className="hidden md:block bg-iron-red text-iron-bg font-bold px-6 py-2 rounded-lg hover:bg-red-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all duration-300 ease-out uppercase tracking-wide">
          Peça Agora
        </Link>

        <div className="md:hidden text-white">
           <Link href="/links" className="text-sm font-bold text-iron-red border border-iron-red px-3 py-1 rounded">PEDIR</Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="relative group hover:text-iron-red transition-colors">
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-iron-red transition-all duration-300 group-hover:w-full"></span>
  </a>
);
