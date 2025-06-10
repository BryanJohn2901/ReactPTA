import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Fundo com imagem comentado */}
      {/* <div className="absolute inset-0">
        <img
          src="/caminho-da-imagem-de-fundo.jpg"
          alt="Fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Coluna da Esquerda */}
        <div className="max-w-xl">
          {/* Logo comentado */}
          {/* <img
            src="/caminho-do-logo.png"
            alt="Logo Biomecânica"
            className="mb-6 w-64"
          /> */}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Biomecânica, Musculação e <br /> Reabilitação Musculoesquelética
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            O título de pós-graduação que você precisa para aplicar a{" "}
            <span className="text-blue-400">biomecânica de maneira prática</span>, ter maior credibilidade com seus clientes e{" "}
            <span className="text-blue-400">aumentar o seu faturamento</span>.
          </p>

          <a
            href="#"
            className="inline-block mt-8 bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-6 rounded-md transition-all duration-200"
          >
            MATRICULE-SE AGORA →
          </a>
        </div>

        {/* Coluna da Direita: Vídeo comentado */}
        {/* <div className="w-full max-w-xl rounded-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div> */}
      </div>

      {/* Faixa inferior com texto rolando */}
      <div className="relative z-20 bg-blue-700 py-2 whitespace-nowrap overflow-hidden">
        <div className="animate-marquee text-sm font-bold tracking-wide text-white">
          BÔNUS ATÉ ACABAR AS VAGAS ✦ BÔNUS ATÉ ACABAR AS VAGAS ✦ BÔNUS ATÉ ACABAR AS VAGAS ✦ BÔNUS ATÉ ACABAR AS VAGAS ✦ BÔNUS ATÉ ACABAR AS VAGAS ✦
        </div>
      </div>
    </section>
  );
}
