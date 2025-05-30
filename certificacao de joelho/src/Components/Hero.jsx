// src/components/Hero.jsx
import React from "react";

// Componente Hero com vídeo embed do YouTube e imagem de fundo
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 text-center"
      style={{ backgroundImage: 'url(/banner_joelho2.webp)' }} // Caminho da nova imagem de fundo
    >
      {/* Overlay escuro cobrindo toda a seção */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 max-w-[1200px] mx-auto space-y-6">
        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Descubra o segredo que os melhores personal trainers utilizam para prevenir lesões de joelho!
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Aprenda a Prescrever Exercícios com Segurança e Resolver Dores Crônicas
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
          <button
            className="text-white font-semibold py-3 px-6 rounded-lg text-sm md:text-base transition duration-300"
            style={{ backgroundColor: '#D00727' }}
          >
            QUERO PREVINIR LESÕES NOS MEUS ALUNOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
