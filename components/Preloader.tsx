
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white p-10 overflow-hidden">
      <div className="flex flex-col items-center animate-pulse">
        <div className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
          Camaleón Studio®
        </div>
        <div className="h-[2px] w-24 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-white animate-[loading_2s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
        </div>
        <div className="mt-8 text-xs font-mono opacity-50 space-y-1 text-center">
          <div>VILLAVICENCIO, META</div>
          <div>ESTRATEGIA ADAPTABLE</div>
          <div>COLOMBIA EST. 2024</div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
