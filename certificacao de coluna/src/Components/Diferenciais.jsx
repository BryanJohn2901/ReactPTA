// src/components/Diferenciais.jsx
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

// Componente Diferenciais
const Diferenciais = () => {
  return (
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center">
          Diferenciais deste treinamento
        </h2>

        {/* Cards de diferenciais */}
        <div className="space-y-6">
          {[
            "Conceito exclusivo Core Spine – método simples e poderoso para máxima estabilidade",
            "Conteúdo 100 % aplicável – use na próxima sessão de treino",
            "Acesso vitalício e atualizações contínuas",
            "Certificação de valor – destaque seu currículo com credibilidade técnica",
          ].map((texto, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-xl p-6 flex items-start gap-4"
            >
              <CheckIcon />
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
