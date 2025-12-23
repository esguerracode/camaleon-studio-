
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black pt-40 pb-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-40">
        <div>
          <h4 className="text-[10px] font-black uppercase text-brand-red mb-10 tracking-[0.4em]">Explorar</h4>
          <ul className="space-y-6 text-sm font-black uppercase tracking-[0.2em]">
            <li><button onClick={() => onNavigate('work')} className="hover:text-brand-red transition-all">Portafolio</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-brand-red transition-all">Servicios</button></li>
            <li><button onClick={() => onNavigate('agency')} className="hover:text-brand-red transition-all">Agencia</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-red transition-all">Contacto</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase text-brand-red mb-10 tracking-[0.4em]">Conectar</h4>
          <ul className="space-y-6 text-sm font-black uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-brand-red transition-all">Instagram ↗</a></li>
            <li><a href="#" className="hover:text-brand-red transition-all">Vimeo ↗</a></li>
            <li><a href="#" className="hover:text-brand-red transition-all">WhatsApp ↗</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2 flex flex-col items-end justify-start">
           <div className="text-right">
             <h4 className="text-[10px] font-black uppercase text-brand-red mb-10 tracking-[0.4em]">Ubicación</h4>
             <p className="text-4xl md:text-5xl font-black text-white leading-none uppercase">Villavicencio</p>
             <p className="text-sm font-bold text-neutral-500 uppercase mt-4 tracking-widest">Meta • Colombia 🇨🇴</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-20 gap-12">
        <div className="text-[18vw] font-black tracking-tighter text-neutral-900/50 leading-none pointer-events-none select-none uppercase -mb-6 transition-all hover:text-brand-red/10">
          CAMALEÓN
        </div>
        <div className="text-[9px] text-neutral-700 uppercase tracking-[0.4em] font-black text-right pb-6">
          ©2024 CAMALEÓN STUDIO®. ADAPTABILIDAD DIGITAL.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
