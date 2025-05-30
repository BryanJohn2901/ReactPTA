// src/components/Conquista.jsx
import React from "react";

// Ícone SVG de check (sem dependência externa)
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Conquista
const Conquista = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {/* Largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Título */}
        <h2 className="text-3xl font-bold">O que você vai conquistar:</h2>

        {/* Bloco com ícone e texto */}
        <div className="bg-black text-white rounded-xl p-6 flex items-center gap-4 justify-center mt-6">
          <CheckIcon />
          <p className="text-left text-base md:text-lg max-w-4xl">
            Prescreva treinos para membros superiores com domínio técnico, segurança articular e lógica biomecânica — mesmo em alunos com dor ou instabilidade no ombro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conquista;
