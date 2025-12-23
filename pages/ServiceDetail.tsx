
import React from 'react';
import { ServiceCategory } from '../types';
import { CATEGORY_PROJECTS, SERVICES } from '../constants';

interface ServiceDetailProps {
  category: ServiceCategory;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ category }) => {
  const projects = CATEGORY_PROJECTS[category] || [];
  const serviceInfo = SERVICES.find(s => s.slug === category);

  return (
    <div className="pt-40 pb-24 bg-black min-h-screen">
      {/* Header del Servicio */}
      <div className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <span className="text-brand-red font-black text-xs uppercase tracking-[0.4em] mb-6 block">
              Especialidad / {category.replace('-', ' ')}
            </span>
            <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-10 text-white">
              {serviceInfo?.name}
            </h2>
            <p className="text-2xl md:text-4xl font-light text-neutral-400 leading-tight">
              {serviceInfo?.description} Proyectos que definen el estándar visual de la región.
            </p>
          </div>
          <div className="hidden lg:block pb-4 text-right">
             <div className="text-9xl font-black text-brand-red/20 leading-none select-none">
               {projects.length.toString().padStart(2, '0')}
             </div>
             <span className="text-xs font-black uppercase tracking-widest text-brand-red">Efectividad Camaleón</span>
          </div>
        </div>
      </div>

      {/* Grid Interactivo */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-40">
          {projects.map((project, idx) => (
            <div key={project.id} className={`group ${idx % 3 === 1 ? 'lg:mt-40' : idx % 3 === 2 ? 'lg:mt-20' : ''}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-6 right-6 bg-brand-red text-white font-black text-[11px] px-4 py-2 shadow-2xl">
                  {project.year}
                </div>
              </div>
              <div className="mt-10 flex justify-between items-start border-b border-brand-red/20 pb-6 group-hover:border-brand-red transition-all">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors">{project.title}</h3>
                  <p className="text-neutral-500 font-mono text-xs uppercase mt-2 tracking-widest font-bold">{project.subtitle}</p>
                </div>
                <div className="text-3xl text-brand-red group-hover:rotate-45 transition-transform duration-500">↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-64 px-6 text-center">
        <h4 className="text-[7vw] font-black uppercase tracking-tighter mb-12 text-white">¿Impulsamos tu Marca?</h4>
        <button className="bg-brand-red text-white px-16 py-8 text-xl font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_60px_rgba(255,77,0,0.3)]">
          Iniciar Proyecto
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
