// src/components/Curso.jsx
import React from "react";

// Ícone SVG verde
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Curso com duas colunas
const Curso = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10">
        {/* Coluna: Para quem é */}
        <div className="border border-green-600 rounded-xl p-6 space-y-4 shadow-sm">
          <h3 className="text-xl font-bold">Para quem é este curso:</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>Personal Trainers</strong> que evitam prescrever exercícios como remada ou supino por medo da dor articular.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>Profissionais que querem se destacar</strong> com domínio técnico superior e segurança na prescrição.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>Treinadores</strong> que atendem alunos com dor no ombro e sentem insegurança técnica.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>Profissionais que querem ganhar mais</strong> por ter uma certificação reconhecida</span>
            </li>
          </ul>
        </div>

        {/* Coluna: Benefícios após o curso */}
        <div className="border border-green-600 rounded-xl p-6 space-y-4 shadow-sm">
          <h3 className="text-xl font-bold">Benefícios imediatos após o curso</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Domínio técnico avançado da cintura escapular (Shoulder Core).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Prescrição segura e forte dos exercícios mais importantes para membros superiores.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Correção prática e rápida das compensações biomecânicas, sem depender do fisioterapeuta.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Mais performance, menos risco de dor nos alunos.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Curso;
