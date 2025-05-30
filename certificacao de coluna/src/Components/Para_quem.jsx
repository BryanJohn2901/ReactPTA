// src/components/Para_quem.jsx
import React from "react";

// Ícone de check verde
const CheckIcon = () => (
  <svg
    className="w-7 h-7 text-green-600 flex-shrink-0 mt-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Para_quem = () => {
  return (
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título centralizado */}
        <h2 className="text-3xl font-bold text-center">Para quem é este curso</h2>

        {/* Grid com os cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            <CheckIcon />
            <p>
              Personal Trainers que evitam exercícios de carga axial por medo de dor lombar
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            <CheckIcon />
            <p>
              Treinadores que atendem alunos com hérnias, protrusões ou lombalgia crônica
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            <CheckIcon />
            <p>
              Profissionais que querem se destacar com domínio técnico superior
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            <CheckIcon />
            <p>
              Quem busca cobrar mais por possuir certificação reconhecida em coluna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Para_quem;
