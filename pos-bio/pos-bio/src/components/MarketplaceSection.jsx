// src/components/MarketplaceSection.jsx
import React from 'react';

const MarketplaceSection = () => {
  // Placeholder para a URL da imagem do laptop (descomente quando for usar)
  const laptopImageUrl = "/path/to/your/laptop-mockup.png"; // Substitua pelo caminho real da sua imagem

  // Dimensões fornecidas em pixels
  const blueBannerHeight = 149; // Altura da faixa azul
  const laptopHeight = 176;     // Altura do notebook
  const laptopWidth = 265;      // Largura do notebook

  // Cálculos para o posicionamento preciso do notebook e padding do bloco de descrição
  // laptopTopOffset: Distância do topo do pai relativo para o topo do notebook.
  // Negativo porque o notebook se estende acima do topo da faixa azul.
  // Cálculo: (altura_faixa_azul / 2) - (altura_notebook / 2)
  const laptopTopOffset = (blueBannerHeight / 2) - (laptopHeight / 2); // Resulta em -13.5px

  // descriptionPaddingTop: Padding superior para o bloco de descrição cinza.
  // É a soma do padding padrão do Tailwind (p-8 = 32px)
  // mais a parte do notebook que se projeta para baixo do banner.
  // Parte do notebook que se projeta para baixo: (altura_notebook - altura_faixa_azul) / 2 = 13.5px
  const descriptionPaddingTop = 32 + ((laptopHeight - blueBannerHeight) / 2); // 32 + 13.5 = 45.5px

  return (
    <section className="bg-[#F3F4F6] py-16 flex flex-col items-center">
      <div className="w-full text-center relative"> {/* Este div é o pai relativo para o posicionamento absoluto do notebook */}

        {/* Faixa azul de largura total com texto dos lados e espaço central */}
        <div className="bg-blue-700 text-white w-full flex items-center px-4 md:px-8 lg:px-12 relative z-10"
             style={{ height: `${blueBannerHeight}px` }}> {/* Altura exata da faixa azul */}

          {/* Conteúdo flexível para alinhar texto dos lados e deixar espaço central para o notebook */}
          {/* max-w-7xl mx-auto para limitar a largura do conteúdo interno e centralizá-lo */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            {/* Texto do lado esquerdo (visível apenas em telas maiores para evitar quebra de layout) */}
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-left flex-1 pr-4 hidden sm:block">
              Mercado de Trabalho da
              <br />
              Personal Trainer Academy
            </h2>

            {/* Espaço vazio para o notebook no meio. flex-shrink-0 garante que este espaço não encolha. */}
            <div className="flex-shrink-0" style={{ width: `${laptopWidth}px` }}></div> 

            {/* Texto do lado direito (visível apenas em telas maiores) */}
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-right flex-1 pl-4 hidden sm:block">
              Mercado de Trabalho da
              <br />
              Personal Trainer Academy
            </h2>
          </div>

          {/* Título centralizado para mobile. Aparece APENAS em telas pequenas quando o layout lateral não cabe */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold leading-tight sm:hidden text-center w-full px-4">
            Mercado de Trabalho da
            <br />
            Personal Trainer Academy
          </h2>
        </div>

        {/* Imagem do laptop: posicionada de forma absoluta para sobrepor o banner e o bloco de texto */}
        {/* left-1/2 e transform -translate-x-1/2 para centralização horizontal */}
        {/* top: laptopTopOffset calcula a posição vertical para que o centro do notebook esteja no centro da faixa azul */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20"
             style={{ top: `${laptopTopOffset}px` }}> {/* Ex: top: -13.5px para centralização vertical relativa à faixa */}
          {/* Tag <img> comentada. Descomente e insira o caminho da sua imagem real */}
          {/* <img
            src={laptopImageUrl}
            alt="Mercado de Trabalho da Personal Trainer Academy"
            className="w-[${laptopWidth}px] h-[${laptopHeight}px] object-contain"
          /> */}
          {/* Placeholder visual para a imagem */}
          <div className="bg-gray-300 flex items-center justify-center text-gray-600 text-sm md:text-lg shrink-0 rounded-lg"
               style={{ width: `${laptopWidth}px`, height: `${laptopHeight}px` }}>
            Placeholder Notebook ({laptopWidth}x{laptopHeight})
          </div>
        </div>

        {/* Bloco de descrição cinza: posicionado abaixo do banner, com padding para acomodar o notebook */}
        {/* mt-0 porque ele já começa logo abaixo do banner (não precisa de margin negativo para subir) */}
        <div className="bg-gray-200 p-8 md:p-10 relative z-0 mt-0 px-4 md:px-8 lg:px-12"
             style={{ paddingTop: `${descriptionPaddingTop}px` }}> {/* Padding superior ajustado */}
          <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
            Um marketplace exclusivo à disposição de todos os formados na Pós-graduação. Com inscrição gratuita e total liberdade para
            compartilhar seus dados de prestação de serviços e assim atrair alunos diretamente até você. Nossa equipe de marketing irá
            trabalhar para que este Marketplace alcance potenciais clientes aos inscritos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;