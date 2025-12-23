
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[3px] bg-brand-red"></div>
              <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.5em] font-black">Proyectos Destacados</span>
            </div>
            <h2 className="text-6xl md:text-[9vw] font-black uppercase tracking-tighter leading-[0.8]">Impacto<br/><span className="text-brand-red">Tangible.</span></h2>
          </div>
          <button className="group flex items-center gap-6 text-[11px] uppercase font-black tracking-widest text-brand-red hover:text-white transition-all">
            <span>Ver todo el archivo</span>
            <span className="w-16 h-[2px] bg-brand-red group-hover:w-24 group-hover:bg-white transition-all"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-48">
          {PROJECTS.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const gridSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const offset = idx === 1 ? 'md:mt-64' : idx === 2 ? 'md:mt-32' : '';

            return (
              <div key={project.id} className={`${gridSpan} ${offset} group cursor-pointer`}>
                <div className="relative overflow-hidden bg-neutral-900 rounded-sm aspect-[4/5] md:aspect-auto md:h-[70vh]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                  {/* Hover Overlay Naranja */}
                  <div className="absolute inset-0 bg-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                  
                  <div className="absolute bottom-10 left-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <div className="bg-brand-red text-white px-10 py-5 font-black text-xs uppercase tracking-widest shadow-2xl">
                       Ver Detalles del Proyecto
                     </div>
                  </div>
                </div>
                
                <div className="mt-10 flex justify-between items-start border-b border-white/10 pb-8 group-hover:border-brand-red transition-all">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
                    <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">{project.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-brand-red px-5 py-2 rounded-sm inline-block">
                      {project.category}
                    </span>
                    <p className="text-[10px] text-neutral-600 mt-4 font-mono font-black uppercase">© {project.year}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
