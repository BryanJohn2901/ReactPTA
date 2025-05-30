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
          <h2 className="text-2xl md:text-3xl font-bold">Quem é André Albuquerque?</h2>
          <p className="text-base leading-relaxed">
            Professor de Educação Física e Mestre em Biomecânica, André conecta com mais de 200 mil pessoas nas redes,
            é autor dos livros Biomecânica Aplicada à Reabilitação de Lesões e Biomecânica Prática no Exercício Físico
            e já formou 23 mil alunos. Especialista em aplicar biomecânica clínica no cotidiano do treino, agora traz
            o Expertise em Coluna para profissionais que querem dominar a dor lombar.
          </p>

          {/* Botão CTA */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
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
