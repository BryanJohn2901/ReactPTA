// src/components/Beneficios.jsx
import React from "react";

// Ícone SVG de check verde
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

// Componente Benefícios Imediatos
const Beneficios = () => {
  return (
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center">
          Benefícios imediatos após o curso
        </h2>

        {/* Lista de benefícios */}
        <div className="space-y-6">
          {[
            "Domínio técnico avançado da Core Spine (estabilidade lombo-pélvica)",
            "Prescrição segura de agachamento, stiff e terra para alunos sensíveis",
            "Correção prática das compensações (valgo dinâmico, retroversão pélvica, etc.)",
            "Mais performance e menos risco de recaída de dor nas costas",
            "Argumentos biomecânicos sólidos para justificar suas decisões técnicas.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-xl p-6 flex items-start gap-4"
            >
              <CheckIcon />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
