
import React from 'react';
import { SERVICES } from '../constants';

const Extras: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-black uppercase mb-8">Servicios 360</h2>
          <div className="text-xs font-mono text-neutral-500 uppercase">Capacidades completas</div>
        </div>
        
        <div className="lg:col-span-9">
          <ul className="divide-y divide-neutral-800">
            {SERVICES.map((service) => (
              <li key={service.id} className="group py-8 flex justify-between items-center cursor-pointer hover:px-4 transition-all duration-300">
                <span className="text-3xl md:text-4xl font-light group-hover:font-bold transition-all">{service.name}</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-neutral-900 p-8 rounded-xl aspect-square flex flex-col justify-between group cursor-pointer overflow-hidden relative">
          <div className="z-10">
            <h3 className="text-xl font-bold uppercase">Blog Llanero</h3>
            <p className="text-sm text-neutral-400 mt-2">Tendencias de marketing en Colombia</p>
          </div>
          <div className="text-4xl z-10">↗</div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        </div>
        <div className="bg-neutral-900 p-8 rounded-xl aspect-square flex flex-col justify-between group cursor-pointer overflow-hidden relative">
          <div className="z-10">
            <h3 className="text-xl font-bold uppercase">Nuestra Cultura</h3>
            <p className="text-sm text-neutral-400 mt-2">Del asado al pixel</p>
          </div>
          <div className="text-4xl z-10">↗</div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        </div>
        <div className="bg-neutral-900 p-8 rounded-xl aspect-square flex flex-col justify-between group cursor-pointer overflow-hidden relative border-2 border-dashed border-neutral-700">
          <div className="z-10">
            <h3 className="text-xl font-bold uppercase">Llanera Shop</h3>
            <p className="text-sm text-neutral-400 mt-2">Merchandising exclusivo</p>
          </div>
          <div className="text-4xl z-10">↗</div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
