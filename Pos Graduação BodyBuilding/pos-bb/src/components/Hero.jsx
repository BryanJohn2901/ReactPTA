import React from 'react';

const Hero = () => {
  return (
    // A section agora tem um layout flex col para empilhar conteúdo e a faixa de oferta
    <section className="relative w-full h-auto bg-red-900 text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* TODO: Adicionar o background gradiente escuro ou imagem de fundo se houver um */}
      {/* O overlay do background deve cobrir apenas a área de conteúdo principal, não a faixa de oferta */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-black opacity-90 z-0"></div> {/* z-0 para garantir que fique por baixo */}

      {/* Conteúdo principal centralizado e responsivo - ACIMA do overlay de fundo */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 pb-12 md:pb-0">
        {/* Lado Esquerdo - Conteúdo Textual */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-0">
          {/* Logo e Texto Superior */}
          <div className="mb-4">
            {/* TODO: Adicionar o logo da Bodybuilding (imagem) */}
            <img src="" alt="Bodybuilding Logo" className="h-10 md:h-12 lg:h-16 mb-2" /> {/* TODO: Adicionar o src do logo */}
            <p className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
              Especialização
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            BODYBUILDING E ESTÉTICA CORPORAL
          </h1>

          {/* Descrição */}
          <p className="text-base md:text-lg text-gray-300 max-w-md mb-8">
            Descubra e aplique protocolos avançados de treinamento e gere grandes resultados estéticos no shape de seus atletas ou alunos de musculação.
          </p>

          {/* Botão de Ação */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out shadow-lg">
            Matricule-se agora
          </button>
        </div>

        {/* Lado Direito - Vídeo/Imagem de Destaque */}
        <div className="relative w-full md:w-1/2 lg:w-2/5 aspect-video bg-gray-800 rounded-lg shadow-xl overflow-hidden mt-8 md:mt-0 flex items-center justify-center">
          {/* TODO: Adicionar o vídeo ou imagem de destaque aqui */}
          {/* Exemplo para um vídeo: */}
          {/* <video
            src="" // TODO: Adicionar o src do vídeo
            controls={false} // Remover controles se for autoplay de fundo
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          ></video> */}
          {/* Exemplo para uma imagem com overlay: */}
          <img src="" alt="Vídeo de Bodybuilding" className="w-full h-full object-cover" /> {/* TODO: Adicionar o src da imagem */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Conteúdo do overlay, como o play button ou texto */}
            <span className="text-xl md:text-2xl font-semibold text-white">no</span>
            <span className="text-4xl md:text-5xl font-bold text-red-500 mx-2">notável</span>
            <span className="text-xl md:text-2xl font-semibold text-white">vel</span>
          </div>
          {/* Botão "Continuar assistindo" */}
          <button className="absolute bottom-4 right-4 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 text-white text-sm py-2 px-4 rounded-full transition duration-300">
            Continuar assistindo
          </button>
        </div>
      </div>

      {/* Faixa inferior de "Oferta por tempo limitado" */}
      {/* Mantém as classes de fluxo normal e adiciona z-index para garantir que esteja acima de qualquer fundo */}
      <div className="relative z-20 w-full bg-red-600 py-2 md:py-3 mt-8 md:mt-16 flex flex-wrap justify-center items-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-wider">
        <span>Oferta por tempo limitado</span>
        <span className="hidden md:inline-block">●</span>
        <span>Oferta por tempo limitado</span>
        <span className="hidden md:inline-block">●</span>
        <span>Oferta por tempo limitado</span>
        <span className="hidden lg:inline-block">●</span>
        <span className="hidden lg:inline-block">Oferta por tempo limitado</span>
      </div>
    </section>
  );
};

export default Hero;