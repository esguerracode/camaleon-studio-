
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="agency" className="py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          El diseño y el código son herramientas. <span className="font-bold text-brand-red">Lo que nos diferencia es nuestra adaptabilidad.</span> Somos un colectivo creativo forjando el futuro digital del Meta.
        </h2>
      </div>
      <div className="lg:col-start-9 lg:col-span-4 space-y-8">
        <p className="text-lg text-neutral-400 leading-relaxed">
          Ubicados en Villavicencio, operamos como un estudio camaleónico que combina estrategia de marca, 
          tecnología de vanguardia y una pasión inigualable por los detalles. Durante los últimos 
          años, nos hemos convertido en el aliado para marcas que buscan impacto real.
        </p>
        <div className="flex gap-4">
          <button className="flex-1 bg-brand-red text-white py-4 text-center font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Agencia</button>
          <button className="flex-1 border-2 border-brand-red/30 py-4 text-center font-black uppercase text-xs tracking-widest hover:bg-brand-red transition-all text-white">Nuestro Clan</button>
        </div>
      </div>
    </section>
  );
};

export default About;
