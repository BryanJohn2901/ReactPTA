import React from 'react'

const Hero = () => {
  return (
    <section id='home' className="relative bg-[#014237] text-white pb-32 px-4 pt-[350px]">
      {/* Imagem decorativa no canto superior esquerdo */}
      <img
        src="/shape01.webp"
        alt="Shape decorativo"
        className="absolute top-0 left-0"
      />

      {/* Imagem decorativa no canto inferior direito */}
      <img
        src="/shape03.webp"
        alt="Shape decorativo"
        className="absolute bottom-0 right-0"
      />

      {/* Conteúdo centralizado */}
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        {/* Texto de boas-vindas */}
        <p className="text-[#FE7750] font-semibold mb-4 text-sm">
          Bem-vindo ao PTA
        </p>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Pós-Graduações Personal <br className="hidden md:block" />
          Trainer Academy
        </h1>

        {/* Descrição */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10">
          A formação completa para quem quer dominar a musculação, a biomecânica e a saúde da mulher com reconhecimento oficial e prática real.
        </p>

        {/* Botão de ação */}
        <button className="bg-[#FE7750] hover:bg-[#fa6a41] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 mb-12">
          Quero me tornar especialista
        </button>

        {/* Bloco com imagem e dados */}
        <div className="relative mt-6">
          {/* Card: Avaliações (esquerda) */}
          <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/4 hidden md:block">
            <div className="bg-white text-[#014237] rounded-xl shadow-md px-6 py-6 w-[350px] h-[250px] text-center flex flex-col justify-center items-center">
              <p className="text-[48px] font-bold mb-1">4.8</p>
              <p className="text-[18px] font-medium text-gray-600">
                +22.820 avaliações
              </p>
            </div>
          </div>

          {/* Card: Horas de conteúdo (direita) */}
          <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 hidden md:block">
            <div className="bg-white text-[#014237] rounded-xl shadow-md px-6 py-6 w-[350px] h-[250px] text-center flex flex-col justify-center items-center">
              <p className="text-sm font-medium text-gray-600">Mais de</p>
              <p className="text-[36px] font-bold mb-1">2.700+</p>
              <p className="text-[18px] font-medium text-gray-600">
                Horas de Conteúdo
              </p>
            </div>
          </div>

          {/* Imagem dos professores */}
          <img
            src="/professores.webp"
            alt="Professores"
            className="mx-auto w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
