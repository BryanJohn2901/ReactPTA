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
            O TREINO PODE CURAR OU LESIONAR SEU CLIENTE
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            Você sabia que a dor no ombro é a segunda mais comum em praticantes de atividades físicas? Muitos profissionais ainda desconhecem os detalhes biomecânicos dessa articulação.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            O conhecimento do ritmo escapuloumeral, dos músculos estabilizadores e da biomecânica do ombro faz toda a diferença para:
          </p>

          <ul className="space-y-3 text-[16px] md:text-[18px] text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Corrigir a síndrome do impacto.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Prevenir discinesias e melhorar a rotação.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              Fortalecer ombros e escápulas com baixa incidência de lesões.
            </li>
          </ul>
        </div>

        {/* Coluna da imagem */}
        <div className="flex justify-center">
          <img
            src="\bio-ao-ombro2-1024x1024.webp"
            alt="Mockup do produto"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
