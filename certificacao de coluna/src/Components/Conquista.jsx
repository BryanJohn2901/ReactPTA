// src/components/Conquista.jsx
import React from "react";

// Ícone SVG de check (verde)
const CheckIcon = () => (
  <svg
    className="w-8 h-8 text-green-600 mt-1 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Conquista
const Conquista = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título e subtítulo (sem fundo) */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">O que você vai conquistar</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Prescreva treinos para tronco e membros inferiores com domínio técnico, segurança articular e lógica biomecânica — mesmo em alunos com dor ou instabilidade lombar.
          </p>
        </div>

        {/* Cards de módulos */}
        <div className="space-y-6">
          {/* Módulo 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <CheckIcon />
            <div>
              <h3 className="text-xl font-bold">Módulo 1 – Fundamentos Essenciais</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- - Anatomia funcional da coluna (lombar, torácica e cervical).</li>
                <li>- Mobilizar × Estabilizar: quando e por que usar cada estratégia.</li>
              </ul>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <CheckIcon />
            <div>
              <h3 className="text-xl font-bold">Módulo 2 – Avaliação Prática</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- 12 testes objetivos (5 em pé, 4 deitado, 3 sentados).</li>
                <li>- 5 perguntas-chave de anamnese para direcionar o plano.</li>
              </ul>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <CheckIcon />
            <div>
              <h3 className="text-xl font-bold">Módulo 3 – Exercícios Críticos e Ajustes Técnicos</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- Agachamento, Stiff, Levantamento Terra.</li>
                <li>- Prancha, Bird-Dog, Hip Thrust.</li>
                <li>- Contraindicações, regressões e progressões seguras.</li>
              </ul>
            </div>
          </div>

          {/* Bônus */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <CheckIcon />
            <div>
              <h3 className="text-xl font-bold">Bônus Exclusivo</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- Masterclass de Biomecânica da Coluna.</li>
                <li>- Planilha de Progressões de Carga.</li>
                <li>- Certificado de conclusão reconhecido.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conquista;
