
import React from 'react';

const Agency: React.FC = () => {
  return (
    <div className="pt-40 px-6 md:px-12 lg:px-24 pb-24">
      <h2 className="text-[10vw] font-black uppercase tracking-tighter mb-20 leading-none">
        Nuestra<br />Mutación.
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <p className="text-3xl md:text-5xl font-light leading-tight">
            En <span className="text-brand-red font-bold">Camaleón Studio</span>, no solo observamos el entorno; nos convertimos en la mejor versión de él.
          </p>
          <img src="https://picsum.photos/800/600?random=11" alt="Camaleón Studio Space" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        
        <div className="space-y-12 lg:pt-32">
          <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
            Somos un colectivo multidisciplinario basado en Villavicencio. Nuestra filosofía se basa en la adaptabilidad: entendemos que cada marca tiene un ecosistema único y requiere una respuesta visual y estratégica a medida.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-12">
            <div>
              <h4 className="text-xs font-bold uppercase text-neutral-500 mb-4">Base</h4>
              <p className="text-sm">Villavicencio, Meta<br/>Puerta del Llano</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-neutral-500 mb-4">Filosofía</h4>
              <p className="text-sm">Adaptabilidad Total<br/>Digital First</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
