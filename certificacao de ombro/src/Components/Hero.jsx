// src/components/Hero.jsx
import React from "react";

// Componente Hero com vídeo embed do YouTube
const Hero = () => {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          DOMINE A BIOMECÂNICA DO OMBRO E <br />
          PRESCREVA TREINOS SEGUROS, FORTES E SEM DOR
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Elimine de vez a insegurança ao prescrever exercícios para ombros,
          torne-se referência técnica e transforme alunos sensíveis em casos de sucesso
        </p>

        {/* Vídeo YouTube */}
        <div className="mt-10 flex justify-center">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/SEU_VIDEO_ID" // Substitua pelo ID do seu vídeo
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-3xl rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Botão CTA */}
        <div className="mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-sm md:text-base transition duration-300">
            QUERO DOMINAR A MOBILIDADE NA PRÁTICA AGORA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
