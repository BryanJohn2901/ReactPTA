import React from "react";

// Ícone SVG inline (check verde)
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Aprender
const Aprender = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {/* Container central com largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título principal */}
        <h2 className="text-3xl font-bold">O que você vai aprender</h2>

        {/* Módulo 1 */}
        <div className="bg-black text-white rounded-xl p-6 text-left space-y-3">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Módulo 1 – Fundamentos</h3>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Anatomia funcional & princípios da periodização híbrida</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Módulo 2 */}
        <div className="bg-black text-white rounded-xl p-6 text-left space-y-3">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Módulo 2 – Aplicação Prática</h3>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Como e quando usar os 6 blocos (força, hipertrofia, potência, resistência, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Módulo 3 */}
        <div className="bg-black text-white rounded-xl p-6 text-left space-y-3">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Módulo 3 – Montagem & Personalização</h3>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Planilha principal + casos reais para 1-5 treinos/semana</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aprender;
