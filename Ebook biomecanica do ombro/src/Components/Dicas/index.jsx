import React from 'react';
import { Clock } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-[#FDFDFD] py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Texto e lista */}
        <div className="space-y-6 font-sans text-center md:text-left px-2 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold font-poppins text-blue-500">
            E SE VOCÊ NÃO AGIR AGORA?

          </h2>

          <ul className="space-y-4 text-[16px] md:text-[18px] text-gray-700">
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Clientes continuarão a sofrer com dores, lesões e incapacidade.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Você, como profissional, pode perder oportunidades de se destacar e fidelizar seus clientes.
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              Dominar a biomecânica dos discos intervertebrais é o que separa os profissionais medianos dos que transformam vidas.
            </li>
          </ul>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src="\bio-ao-ombro2-1024x1024.webp"
            alt="Mockup ebook joelho"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
