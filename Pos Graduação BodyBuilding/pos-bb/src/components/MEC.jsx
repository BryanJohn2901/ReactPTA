import React from 'react';
import laptopImage from '../assets/laptop-portaria.webp';

const MEC = () => {
  return (
    <div className="bg-black py-6">
      <div className="bg-[#B91C1C] w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-8 md:py-10">
          {/* Text Section */}
          <div className="text-white font-bold uppercase text-center md:text-left text-xl md:text-2xl lg:text-3xl mb-6 md:mb-0 md:w-1/2">
            Pós-graduação reconhecida pelo ministério da educação (MEC)
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end md:w-1/2">
            <img 
              src={laptopImage} 
              alt="Laptop mostrando Portaria Nº 370 do MEC" 
              className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEC;

