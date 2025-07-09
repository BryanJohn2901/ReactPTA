import React from 'react';

const index = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row rounded-xl overflow-hidden text-white">

        {/* Coluna Esquerda */}
        <div className="w-full lg:w-1/2 bg-[#1e1e26] px-8 py-10 space-y-6">
          <h2 className="text-[#00A3FF] text-2xl font-bold">O que você vai receber:</h2>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#00A3FF] text-xl">✔</span>
              Segurança e confiança na prescrição de exercícios.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00A3FF] text-xl">✔</span>
              Estratégias claras para o fortalecimento equilibrado do joelho.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00A3FF] text-xl">✔</span>
              Redução de lesões e dores, melhorando a performance de seus clientes.
            </li>
          </ul>

          <div className="space-y-4 pt-4">
            <h3 className="text-[#A6FF00] font-bold text-lg uppercase">E Ainda De Presente:</h3>

            <div className="flex items-center gap-2 border border-[#A6FF00] rounded-md px-4 py-2 text-sm bg-transparent">
              <span className="text-[#A6FF00] text-xl">🎁</span>
              Ganhe acesso a MasterClass Do Joelho
            </div>

            <div className="flex items-center gap-2 border border-[#A6FF00] rounded-md px-4 py-2 text-sm bg-transparent">
              <span className="text-[#A6FF00] text-xl">🎁</span>
              Certificado após conclusão da MasterClass
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#2497FF] to-[#001C54] px-8 py-10 text-center flex flex-col items-center justify-center space-y-5">
          <p className="text-white font-semibold text-lg">Oferta imperdível de R$59,90 por</p>

          <p className="text-5xl font-bold text-white">R$14,99</p>

          <p className="uppercase text-white text-sm">ACESSO imediato e vitalício</p>

          <button className="bg-[#e1dfdf] text-[#003DAD] font-bold px-6 py-3 rounded-md hover:bg-white transition text-sm flex items-center gap-2">
            QUERO GARANTIR A OFERTA <span className="text-lg">📲</span>
          </button>

          <p className="text-white text-sm max-w-xs">
            Adquira agora o guia <strong>"Biomecânica do Joelho"</strong> e destaque-se como especialista!
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
