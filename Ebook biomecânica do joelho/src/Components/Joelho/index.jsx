import React from 'react';
import { CheckCircle } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Grid centralizado com largura máxima de 1300px */}
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Coluna de texto */}
        <div className="space-y-6 font-sans text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-blue-500 uppercase leading-snug">
            O JOELHO: A ARTICULAÇÃO QUE MAIS SOFRE, MAS A MENOS ENTENDIDA
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            A articulação do joelho é fundamental para locomoção e sustentação, mas também uma das mais vulneráveis a lesões. Com o conhecimento correto sobre biomecânica, você será capaz de:
          </p>

          <ul className="space-y-3 text-[16px] md:text-[18px] text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Prevenir lesões comuns como condromalácia e dores patelofemorais.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Propor agachamentos e exercícios seguros.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Melhorar o desempenho e qualidade de vida dos seus clientes.
            </li>
          </ul>
        </div>

        {/* Coluna da imagem */}
        <div className="flex justify-center">
          <img
            src="/Bio-do-joelho.webp"
            alt="Mockup do produto"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
