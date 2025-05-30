// src/components/Professor.jsx
import React from "react";

// Componente Professor com imagem e descrição
const Professor = () => {
  return (
    <section className="bg-[#fefcf6] py-16 px-4">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="text-black space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Quem é Fernando Jaeger?</h2>
          <p className="text-base leading-relaxed">
            Especialista em condicionamento funcional, criador do método de Periodização Híbrida Funcional e professor convidado em cursos de pós-graduação. Fernando já ajudou centenas de treinadores a organizar treinos de alto impacto com segurança.
          </p>

          {/* Botão CTA */}
          <button className="text-white font-bold py-3 px-6 rounded-lg transition duration-300" style={{ backgroundColor: '#D00727' }}>
            QUERO EXPERIMENTAR AGORA
          </button>
        </div>

        {/* Imagem expandida */}
        <div className="flex justify-end">
          <img
            src="/professor_andre.webp"
            alt="Foto de André Albuquerque"
            className="rounded-xl w-full h-auto max-h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Professor;
