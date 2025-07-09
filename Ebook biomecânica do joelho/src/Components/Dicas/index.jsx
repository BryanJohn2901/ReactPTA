import React from 'react';
import { Clock } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-[#FDFDFD] py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto e lista */}
        <div className="space-y-6 font-sans text-center md:text-left px-2 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-blue-500">
            5 DICAS ESSENCIAIS QUE VOCÊ VAI DOMINAR:
          </h2>

          <ul className="space-y-4 text-[16px] md:text-[18px] text-gray-700">
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Alinhamento perfeito: joelho alinhado com o pé em agachamentos.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Como determinar se os pés devem estar paralelos ou levemente abertos.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              A abertura ideal dos pés para evitar compensações.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Quando é seguro permitir que os joelhos ultrapassem a ponta dos pés.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Quando e por que usar o calço em agachamentos difíceis.
            </li>
          </ul>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src="/Bio-do-Joelho-1.webp"
            alt="Mockup ebook joelho"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
