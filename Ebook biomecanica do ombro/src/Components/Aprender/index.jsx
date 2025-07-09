import React from 'react';
import { Clock } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto bg-white rounded-3xl shadow-md p-6 md:p-12">
        {/* Grid com conteúdo e imagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Coluna de texto */}
          <div className="space-y-6 font-sans text-center md:text-left px-2 md:px-0">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-blue-500 uppercase">
              UM PASSO A PASSO EXCLUSIVO:
            </h2>

            {/* Parágrafos explicativos */}
            <div className="space-y-4 text-[16px] md:text-[18px] text-[#374151] max-w-4xl mx-auto text-left">
              <p>
                Você sabia que a dor no ombro é a segunda mais comum em praticantes de atividades físicas? Muitos profissionais ainda desconhecem os detalhes biomecânicos dessa articulação.
              </p>
              <p>
                O conhecimento do ritmo escapuloumeral, dos músculos estabilizadores e da biomecânica do ombro faz toda a diferença para:
              </p>
            </div>


            <ul className="space-y-4 text-[16px] md:text-[18px] text-gray-700">
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Estrutura e função dos discos intervertebrais.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Como evitar desgastes com mobilidade e estabilização adequadas.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                4 exercícios exclusivos para dores lombares, apresentados por especialistas.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Estratégias para aplicar a compressão e descompressão no dia a dia.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Como a má postura e o sedentarismo impactam diretamente a coluna.
              </li>
            </ul>
          </div>

          {/* Coluna da imagem */}
          <div className="flex justify-center">
            <img
              src="\bio-ao-ombro2-1024x1024.webp"
              alt="Mockup do ebook"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
