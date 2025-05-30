// src/components/Promessa.jsx
import React from "react";
import { CheckCircle } from "lucide-react"; // Ícone de check

// Componente Promessa com layout de "dor e solução"
const Promessa = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Título */}
        <h2 className="text-3xl font-bold">A certificação que vai transformar sua abordagem</h2>

        {/* Texto de introdução */}
        <p className="text-lg">
          No tratamento do joelho e elevar sua autoridade profissional!
        </p>
        <p className="text-base">
          Muitos profissionais enfrentam dificuldades para se destacar na área e acabam perdendo oportunidades porque:
        </p>

        {/* Cards com pontos de dor - 4 itens em linha */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {/* Item 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Não possuem uma certificação especializada que comprove sua autoridade
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Se sentem inseguros ao tratar casos complexos de dor no joelho
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Encontram informações desencontradas e não sabem qual abordagem seguir
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Não conseguem atrair mais pacientes e aumentar sua renda com atendimentos
            </p>
          </div>
        </div>

        {/* Texto final */}
        <p className="text-base mt-6">Chegou a hora de resolver tudo isso!</p>
      </div>
    </section>
  );
};

export default Promessa;
