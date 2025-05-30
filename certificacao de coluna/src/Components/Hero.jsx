// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner_coluna.webp')" }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 text-white py-16 px-4 text-center">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {/* Título principal */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Domine a Biomecânica da Coluna e Prescreva Treinos Seguros, Estáveis e Sem Dor Lombar
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Elimine de vez a insegurança ao prescrever exercícios para a coluna, torne-se referência técnica e transforme alunos com dores nas costas em cases de sucesso.
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
      </div>
    </section>
  );
};

export default Hero;
