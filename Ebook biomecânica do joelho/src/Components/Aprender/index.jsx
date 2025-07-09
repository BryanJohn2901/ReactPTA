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
              O QUE VOCÊ VAI APRENDER?
            </h2>

            <ul className="space-y-4 text-[16px] md:text-[18px] text-gray-700">
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                A estrutura funcional do joelho: articulação tibiofemoral e patelofemoral.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                O papel crucial dos meniscos e como evitar seu desgaste precoce.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Condromalácia e síndrome da dor patelofemoral: causas, prevenção e tratamento.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                5 dicas práticas para o fortalecimento e alinhamento ideal do joelho.
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 w-5 h-5 mt-1" />
                Quando os joelhos podem ou não ultrapassar a ponta dos pés durante o agachamento.
              </li>
            </ul>
          </div>

          {/* Coluna da imagem */}
          <div className="flex justify-center">
            <img
              src="/Bio-do-joelho.webp"
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
