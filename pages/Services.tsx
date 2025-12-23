
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

interface ServicesProps {
  onSelectCategory: (cat: ServiceCategory) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectCategory }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="pt-40 px-6 md:px-12 lg:px-24 pb-24 min-h-screen bg-black">
      <div className="mb-24">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] text-white">
          Nuestros<br /><span className="text-brand-red">Servicios.</span>
        </h2>
      </div>

      <div className="relative border-t border-brand-red/20">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            onMouseEnter={() => setHoveredService(service.slug)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => onSelectCategory(service.slug)}
            className="group py-12 md:py-24 border-b border-brand-red/20 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center px-4 hover:bg-brand-red/5 transition-all duration-500"
          >
            <div className="z-10">
              <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors">
                {service.name}
              </h3>
              <p className="text-neutral-500 mt-6 text-xl md:text-2xl font-light max-w-xl group-hover:text-white transition-colors">
                {service.description}
              </p>
            </div>
            <div className="mt-10 md:mt-0 z-10">
              <span className="text-brand-red font-black text-xs border-2 border-brand-red px-8 py-4 rounded-full uppercase tracking-widest group-hover:bg-brand-red group-hover:text-white transition-all">
                Ver Proyectos
              </span>
            </div>

            {/* Hover Image Reveal */}
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] aspect-[3/4] pointer-events-none z-0 opacity-0 transition-opacity duration-500 overflow-hidden ${hoveredService === service.slug ? 'md:opacity-40' : ''}`}>
              <img src={service.image} alt={service.name} className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 text-center max-w-4xl mx-auto border-t border-brand-red/10 pt-20">
         <p className="text-3xl md:text-5xl font-light text-neutral-400 leading-tight">
           En Camaleón Studio, cada disciplina se entrelaza para construir una <span className="text-brand-red font-black uppercase">identidad adaptativa</span>.
         </p>
      </div>
    </div>
  );
};

export default Services;
