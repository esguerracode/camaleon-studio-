
import React from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  const displayText = text.includes('DISEÑO') 
    ? "ESTRATEGIA • ADAPTACIÓN • CREATIVIDAD • RESULTADOS • VILLAVICENCIO • 360 •" 
    : text;

  return (
    <div className="bg-black py-16 overflow-hidden border-y border-brand-red/30">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[10vw] font-black uppercase tracking-tighter leading-none opacity-20 text-brand-red px-10">
          {displayText} {displayText}
        </span>
        <span className="text-[10vw] font-black uppercase tracking-tighter leading-none opacity-20 text-brand-red px-10">
          {displayText} {displayText}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
