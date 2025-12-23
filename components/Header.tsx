
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

interface HeaderProps {
  onNavigate: (page: string, category?: ServiceCategory | null) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (page: string, category: ServiceCategory | null = null) => {
    onNavigate(page, category);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { id: 'work', label: 'Casos' },
    { id: 'services', label: 'Servicios', hasDropdown: true },
    { id: 'agency', label: 'Agencia' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5 py-5' : 'bg-transparent'}`}>
        {/* Logo - Más imponente */}
        <button 
          onClick={() => handleMobileNav('home')}
          className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-brand-red hover:opacity-80 transition-all pointer-events-auto flex items-center gap-1"
        >
          CAMALEÓN STUDIO<span className="text-[10px] align-top font-bold text-white mt-1">®</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <button 
                  onClick={() => onNavigate(link.id)}
                  className={`hover:text-brand-red transition-colors flex items-center gap-2 uppercase ${(currentPage === link.id || (link.id === 'services' && currentPage === 'service-detail')) ? 'text-brand-red' : 'text-white'}`}
                >
                  {link.label}
                  {link.hasDropdown && <span className={`text-[8px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-brand-red' : ''}`}>▼</span>}
                </button>

                {link.hasDropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-400 origin-top ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                    <div className="bg-black border border-brand-red/40 p-3 min-w-[300px] shadow-[0_50px_100px_rgba(0,0,0,1)] rounded-sm overflow-hidden">
                      <div className="py-3 px-5 border-b border-white/10 mb-2 text-center">
                        <span className="text-[8px] text-brand-red font-black tracking-[0.5em] uppercase">Nuestras Especialidades</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        {SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => onNavigate('service-detail', service.slug)}
                            className="w-full text-left py-4 px-6 text-[10px] font-black text-white hover:text-white hover:bg-brand-red transition-all uppercase tracking-[0.3em]"
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-brand-red text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all shadow-[0_15px_40px_rgba(255,77,0,0.4)] active:scale-95"
          >
            HABLEMOS
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white font-black text-[10px] uppercase tracking-widest border-2 border-brand-red px-5 py-2 bg-black active:scale-90 transition-transform"
        >
          {isMenuOpen ? 'Cerrar' : 'Menu'}
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden overflow-y-auto ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col min-h-full p-10 pt-40">
          <div className="flex flex-col gap-10">
            <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.6em] mb-4">Mutación Digital</span>
            {navLinks.map((link) => (
              <div key={link.id} className="flex flex-col">
                <button 
                  onClick={() => link.hasDropdown ? setIsServicesOpen(!isServicesOpen) : handleMobileNav(link.id)}
                  className={`text-6xl font-black uppercase tracking-tighter text-left flex items-center justify-between transition-colors ${isServicesOpen && link.hasDropdown ? 'text-brand-red' : 'text-white'}`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <span className={`text-3xl transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>▼</span>}
                </button>
                {link.hasDropdown && isServicesOpen && (
                  <div className="flex flex-col gap-6 mt-8 pl-6 border-l-4 border-brand-red">
                    {SERVICES.map((s) => (
                      <button key={s.id} onClick={() => handleMobileNav('service-detail', s.slug)} className="text-2xl font-black uppercase text-white/60 hover:text-brand-red text-left tracking-tight">
                        {s.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleMobileNav('contact')}
              className="mt-10 bg-brand-red text-white py-8 text-xl font-black uppercase tracking-widest"
            >
              HABLEMOS HOY
            </button>
          </div>
        </div>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 w-16 h-16 flex items-center justify-center bg-brand-red rounded-full text-white font-black text-2xl shadow-2xl">✕</button>
      </div>
    </>
  );
};

export default Header;
