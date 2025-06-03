// src/components/PostGraduationBenefits.jsx
import React from 'react';

const CheckmarkIcon = () => (
  // SVG de um checkmark padrão (Heroicons solid check-circle)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-yellow-400 flex-shrink-0 mr-4" // Ajuste a cor se o amarelo do print for diferente
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.536-1.64-1.64a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);


const PostGraduationBenefits = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16 text-white text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
        Uma Pós-graduação feita para <br /> profissionais...
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 mb-12">
        {/* Benefício 1 */}
        {/* O fundo é bg-zinc-900 (preto/cinza escuro) como no print. */}
        {/* Se quiser gradiente, me diga como! */}
        <div className="flex items-start bg-zinc-900 p-6 rounded-lg shadow-md text-left">
          <CheckmarkIcon />
          <p className="text-base md:text-lg leading-relaxed">
            Que querem ser uma autoridade em treinamento funcional, se tornar uma
            referência e potencializar o seu faturamento.
          </p>
        </div>

        {/* Benefício 2 */}
        <div className="flex items-start bg-zinc-900 p-6 rounded-lg shadow-md text-left">
          <CheckmarkIcon />
          <p className="text-base md:text-lg leading-relaxed">
            Dominarem na prática métodos para hipertrofia, emagrecimento e
            performance para os seus alunos.
          </p>
        </div>

        {/* Benefício 3 */}
        <div className="flex items-start bg-zinc-900 p-6 rounded-lg shadow-md text-left">
          <CheckmarkIcon />
          <p className="text-base md:text-lg leading-relaxed">
            Terem o passo a passo para serem referência no treinamento funcional e ter
            mais segurança para dominar a prescrição e periodização de treinos
            personalizados.
          </p>
        </div>
      </div>

      {/* Botão Fazer Minha Matrícula */}
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg
        inline-flex items-center justify-center transition-colors duration-300
        text-lg md:text-xl">
        FAZER MINHA MATRÍCULA
        <ChevronDownIcon />
      </button>
    </section>
  );
};

export default PostGraduationBenefits;