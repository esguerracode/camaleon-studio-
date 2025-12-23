
import React from 'react';

interface HeroProps {
  onHablemos?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHablemos }) => {
  const whatsappUrl = "https://wa.me/573000000000";

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20 overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-50 grayscale contrast-125 brightness-75 transition-all duration-1000"
        >
          <source src="https://video.wixstatic.com/video/11062b_9f95f40332f14300a72049e29a8a7295/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-brand-red/5 mix-blend-color"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto pt-40">
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-20 bg-brand-red"></div>
            <span className="text-brand-red font-mono text-[11px] font-black tracking-[0.6em] uppercase">
              Agencia 360 • Villavicencio
            </span>
          </div>
        </div>

        <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter text-white uppercase mb-12">
          Marketing<br />
          <span className="text-brand-red inline-block relative">
            Adaptativo
            <span className="absolute -bottom-2 left-0 w-full h-[0.1em] bg-white opacity-20"></span>
          </span><br />
          <span className="flex items-center gap-6">
            <span className="hidden md:block h-[4px] flex-1 bg-brand-red/40"></span>
            Studio®
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12">
          <div className="max-w-2xl">
            <p className="text-white/80 text-xl md:text-3xl font-light leading-snug">
              Evolucionamos marcas llaneras con estrategias que <span className="text-brand-red font-black">mutan al ritmo</span> del cambio digital.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-brand-red">Agencia Activa en el Llano</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={onHablemos}
                className="group relative bg-brand-red text-white px-12 py-7 text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all shadow-[0_20px_60px_rgba(255,77,0,0.4)] flex-1 sm:flex-none text-center"
              >
                <span className="relative z-10">Agendar Consultoría</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <style>{`
                  .group:hover span { color: black; }
                `}</style>
              </button>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-brand-red text-brand-red px-12 py-7 text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all flex-1 sm:flex-none text-center bg-black/40 backdrop-blur-md"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </span>
                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <style>{`
                  .group:hover span { color: white; }
                `}</style>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
