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
            A COLUNA É A BASE, MAS VOCÊ SABE REALMENTE CUIDAR DELA?
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            Cerca de 85% da população mundial sofrerá com dores na coluna ao longo da vida. Um problema crescente causado por má postura, sedentarismo e falta de orientação qualificada.
            Se você é profissional da saúde ou do movimento e não domina os discos intervertebrais, está perdendo a oportunidade de:
          </p>

          <ul className="space-y-3 text-[16px] md:text-[18px] text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Prevenir e tratar dores lombares nos seus clientes.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Aplicar exercícios seguros para fortalecer o CORE e a coluna.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Corrigir desgastes degenerativos e má posturas com eficácia.
            </li>
          </ul>
        </div>

        {/* Coluna da imagem */}
        <div className="flex justify-center">
          <img
            src="\Discors-intervertebrais-1024x683.webp"
            alt="Mockup do produto"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
