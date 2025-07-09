import React from 'react';
import { PlusCircle } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imagem ou bloco visual à esquerda */}
        <div className="bg-black w-full h-96 md:h-full rounded-lg"></div>

        {/* Texto à direita */}
        <div className="space-y-6 font-sans text-[#1E1E28] text-center md:text-left px-2 md:px-0">
          <span className="uppercase text-sm font-semibold text-gray-400 block">
            Atenção personal
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            EVITE OS ERROS QUE LESIONAM OS JOELHOS DOS SEUS CLIENTES
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            Um simples desalinhamento no agachamento pode causar desgastes graves nas cartilagens patelares. Não espere que o problema apareça para corrigi-lo:
          </p>

          {/* Blocos com ícones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
            {/* Item 1 */}
            <div className="space-y-2">
              <PlusCircle className="text-blue-500 w-8 h-8" />
              <h3 className="text-xl font-bold font-poppins">Previna e trate</h3>
              <p className="text-gray-500 text-[16px]">
                Previna e trate síndromes de dor com conhecimento preciso.
              </p>
            </div>

            {/* Item 2 */}
            <div className="space-y-2">
              <PlusCircle className="text-blue-500 w-8 h-8" />
              <h3 className="text-xl font-bold font-poppins">Movimentos adequados</h3>
              <p className="text-gray-500 text-[16px]">
                Utilize o guia prático para orientar movimentos adequados no dia a dia e nos treinos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
