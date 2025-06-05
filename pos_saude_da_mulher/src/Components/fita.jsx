// src/components/Fita.jsx
import React from 'react';

const Fita = () => {
  return (
    <div className="w-full h-[70px] bg-gradient-to-r from-purple-700 to-purple-500 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-marquee text-white font-extralight tracking-[1px] text-sm uppercase h-full">
        {Array(20).fill('OFERTA POR TEMPO LIMITADO ✦').join(' ')}
      </div>
    </div>
  );
};

export default Fita;
