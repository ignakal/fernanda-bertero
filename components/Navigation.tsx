import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Filosofía', href: '#philosophy' },
  { label: 'Servicios', href: '#services' },
//   { label: 'Tu Aliada IA', href: '#ai-advisor' },
  { label: 'Contacto', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#E8E4DF]/90 backdrop-blur-md border-b border-[#1F5670]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* <a href="#" className="font-serif text-2xl tracking-wider text-[#1F5670] font-semibold">
              FERNANDA<span className="text-[#D42D6F]">.</span>BERTERO
            </a> */}
            <img 
              src="/logos/fernanda_bertero_isotipo.png" 
              alt="Fernanda Bertero" 
              className="h-8 md:hidden" 
            />
            <img 
              src="/logos/fernanda_bertero_horizontal.png" 
              alt="Fernanda Bertero" 
              className="hidden md:block h-12" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-[#1F5670] hover:text-[#D42D6F] transition-colors duration-300 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F5670] hover:text-[#D42D6F] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#E8E4DF] border-t border-[#1F5670]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 font-sans text-base font-medium text-[#1F5670] hover:text-[#D42D6F] hover:bg-[#1F5670]/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};