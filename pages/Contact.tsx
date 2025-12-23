
import React from 'react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/573000000000";

  return (
    <div className="pt-48 px-6 md:px-12 lg:px-24 pb-40 bg-black min-h-screen text-white pixel-bg">
      <div className="max-w-screen-2xl mx-auto">
        {/* Encabezado de Sección */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-16 h-[2px] bg-brand-red"></span>
            <span className="text-brand-red text-[10px] font-black uppercase tracking-[0.6em]">Conexión Inmediata</span>
          </div>
          <h2 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.75] mb-8">
            Hablemos<br />
            <span className="text-brand-red">Negocios.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-32 items-start">
          {/* Columna Izquierda: Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-10">
              <p className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight">
                Ubicados en <span className="font-black border-b-8 border-brand-red">Villavicencio</span>, listos para impacto global.
              </p>
              
              {/* WhatsApp Button Rediseñado - SIN VERDE */}
              <div className="pt-8">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-6 bg-white text-black px-12 py-7 text-xs font-black uppercase tracking-[0.4em] overflow-hidden transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Business
                  </span>
                  <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <style>{`
                    .group:hover span { color: white; }
                    .group:hover { background-color: #ff4d00; }
                  `}</style>
                </a>
              </div>
            </div>
            
            <div className="space-y-16 pt-20 border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase mb-4 text-brand-red tracking-[0.4em]">Email Directo</h4>
                  <a href="mailto:hola@camaleonstudio.co" className="text-xl md:text-2xl font-black block hover:text-brand-red transition-colors">hola@camaleonstudio.co</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase mb-4 text-brand-red tracking-[0.4em]">Sede Principal</h4>
                  <p className="text-xl md:text-2xl font-black uppercase">Villavicencio, Meta</p>
                  <p className="text-[10px] font-bold text-neutral-600 uppercase mt-1 tracking-widest italic">Puerta del Llano 🇨🇴</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase mb-8 text-brand-red tracking-[0.4em]">Encuéntranos</h4>
                <div className="flex flex-wrap gap-10">
                  {['Instagram', 'Behance', 'LinkedIn', 'YouTube'].map((link) => (
                    <a key={link} href="#" className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400 border-b border-transparent hover:text-brand-red hover:border-brand-red transition-all pb-2">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Refinado */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/40 p-10 md:p-20 backdrop-blur-2xl border border-white/5 relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-[100px] pointer-events-none"></div>
              
              <form className="relative z-10 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red">Nombre o Empresa</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 outline-none text-2xl font-light py-4 focus:border-brand-red transition-all placeholder:text-white/5" 
                      placeholder="Identifícate" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 outline-none text-2xl font-light py-4 focus:border-brand-red transition-all placeholder:text-white/5" 
                      placeholder="ejemplo@web.com" 
                    />
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red">¿En qué podemos ayudarte?</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/10 outline-none text-2xl font-light py-4 focus:border-brand-red transition-all appearance-none cursor-pointer">
                        <option disabled selected className="bg-black text-white/20">Selecciona un ecosistema...</option>
                        <option className="bg-black">Estrategia Digital 360</option>
                        <option className="bg-black">Producción Audiovisual / Aftermovies</option>
                        <option className="bg-black">Branding e Identidad Adaptativa</option>
                        <option className="bg-black">Streaming & Contenido Pro</option>
                      </select>
                      <div className="absolute right-0 bottom-6 pointer-events-none text-brand-red text-[10px]">▼</div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red">Tu Visión / Brief</label>
                    <textarea 
                      className="w-full bg-transparent border-b border-white/10 outline-none text-2xl font-light py-4 focus:border-brand-red transition-all placeholder:text-white/5 resize-none h-40" 
                      placeholder="Cuéntanos tus objetivos..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row items-center gap-12">
                  <button className="group relative bg-brand-red text-white px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] overflow-hidden transition-all w-full md:w-auto">
                    <span className="relative z-10">Enviar Propuesta</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <style>{`
                      .group:hover span { color: black; }
                    `}</style>
                  </button>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 max-w-[200px] text-center md:text-left leading-relaxed">
                    Respuesta garantizada en menos de 12 horas hábiles.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
