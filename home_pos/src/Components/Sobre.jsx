import React from 'react'

const Sobre = () => {
  return (
    // Seção com fundo claro e padding vertical e horizontal
    <section id='sobre' className="bg-[#f5fafe] py-20 px-4">
      {/* Container flexível que empilha no mobile e alinha em linha no desktop */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Bloco da imagem - ocupa 100% no mobile/tablet, 50% no desktop */}
        <div className="flex-1 w-full">
          <img
            src="/fundo_sobre.webp"
            alt="Instituição"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Bloco de texto - ocupa 100% no mobile/tablet, 50% no desktop */}
        <div className="flex-1 text-[#014237] text-center lg:text-left">
          
          {/* Subtítulo laranja */}
          <p className="text-[#FE7750] font-semibold mb-2 text-sm sm:text-base">
            Sobre a Instituição
          </p>

          {/* Título principal */}
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            A instituição que mais forma especialistas em Treinamento e Estética do Brasil
          </h2>

          {/* Parágrafo descritivo */}
          <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
            Na Personal Trainer Academy, unimos ciência, prática e experiência de mercado para formar os
            profissionais mais completos do país. Cada módulo é pensado para quem quer aplicar o conhecimento
            e entregar resultados reais. Nossos professores são referências em suas áreas e fazem parte ativa do mercado.
          </p>

          {/* Destaque em números */}
          <div className="text-3xl sm:text-4xl font-bold mb-2">23+</div>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            anos de experiência combinada dos nossos professores.
          </p>

          {/* Botão de chamada para ação */}
          <button className="border border-[#014237] text-[#014237] hover:bg-[#014237] hover:text-white transition-colors duration-300 py-3 px-6 rounded-full font-semibold text-sm sm:text-base">
            Conheça mais sobre a PTA
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sobre
