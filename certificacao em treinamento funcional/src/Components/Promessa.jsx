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
        <h2 className="text-3xl font-bold">Dor & Promessa</h2>

        {/* Texto de introdução */}
        <p className="text-lg">
          Você já montou um treino e sentiu que estava apenas “enchendo a ficha”?
        </p>
        <p className="text-base">
          Se você é Personal Trainer e já passou por isso, provavelmente sentiu:
        </p>

        {/* Cards com pontos de dor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Item 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Insegurança técnica ao periodizar ciclos e blocos.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Frustração por perder alunos que não veem resultado visível.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Medo de provocar lesão por falta de critério na carga e no estímulo.
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
