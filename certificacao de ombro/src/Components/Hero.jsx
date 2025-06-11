// src/components/Hero.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Componente Hero com vídeo embed do YouTube
// O componente agora recebe a prop 'onScrollToCheckout' para permitir a rolagem para a seção de checkout.
const Hero = ({ onScrollToCheckout }) => { // Define o componente funcional Hero e desestrutura a prop 'onScrollToCheckout'.
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      {/* Define o elemento HTML <section>, que serve como o contêiner principal para o conteúdo da seção Hero.
          - bg-black: Define a cor de fundo da seção como preto.
          - text-white: Define a cor do texto padrão dentro desta seção como branco.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px).
          - text-center: Centraliza o texto de todos os elementos filhos diretos dentro desta seção. */}

      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título, subtítulo, vídeo e botão CTA). */}

        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {/* Título principal da página, com tamanhos de fonte responsivos, peso de fonte extra-negrito e espaçamento entre linhas apertado.
              - text-3xl: Tamanho da fonte grande (30px).
              - md:text-5xl: Tamanho da fonte maior em telas médias e grandes (48px).
              - font-extrabold: Peso da fonte extra-negrito para destaque máximo.
              - leading-tight: Linha altura menor para um texto mais compacto. */}
          DOMINE A BIOMECÂNICA DO OMBRO E <br />
          PRESCREVA TREINOS SEGUROS, FORTES E SEM DOR
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          {/* Parágrafo de subtítulo, com cor cinza claro, tamanhos de fonte responsivos, e centralizado com largura máxima.
              - text-gray-300: Cor do texto cinza claro para contraste com o fundo escuro.
              - text-lg: Tamanho da fonte (18px).
              - md:text-xl: Tamanho da fonte maior em telas médias e grandes (20px).
              - max-w-2xl: Limita a largura máxima do parágrafo a 42rem (672px).
              - mx-auto: Centraliza o parágrafo horizontalmente. */}
          Elimine de vez a insegurança ao prescrever exercícios para ombros,
          torne-se referência técnica e transforme alunos sensíveis em casos de sucesso
        </p>

        {/* Vídeo YouTube */}
        <div className="mt-10 flex justify-center">
          {/* Contêiner para o iframe do vídeo do YouTube.
              - mt-10: Adiciona uma margem superior de 2.5rem (40px).
              - flex justify-center: Usa flexbox para centralizar o iframe horizontalmente. */}
          <iframe
            width="100%" // Define a largura do iframe para 100% do seu contêiner.
            height="600" // Define a altura fixa do iframe como 600px.
            src="https://www.youtube.com/embed/SEU_VIDEO_ID" // O atributo `src` define a URL do vídeo a ser incorporado. Lembre-se de substituir "SEU_VIDEO_ID" pelo ID real do vídeo do YouTube.
            title="YouTube video player" // Título para o iframe, importante para acessibilidade e SEO.
            frameBorder="0" // Remove a borda padrão do iframe.
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permite certas funcionalidades (aceleração, autoplay, etc.) para o vídeo.
            allowFullScreen // Permite que o vídeo seja exibido em tela cheia.
            className="w-full max-w-3xl rounded-lg shadow-lg"
          // Aplica classes CSS ao iframe:
          // - w-full: Ocupa 100% da largura disponível do seu contêiner.
          // - max-w-3xl: Limita a largura máxima do iframe a 48rem (768px), garantindo que não fique muito largo em telas grandes.
          // - rounded-lg: Arredonda os cantos do iframe.
          // - shadow-lg: Adiciona uma sombra grande ao iframe.
          ></iframe>
        </div>

        {/* Botão CTA */}
        <div className="mt-10">
          {/* Contêiner para o botão de Call To Action (CTA), com margem superior.
              - mt-10: Adiciona uma margem superior de 2.5rem (40px). */}
          <button
            onClick={onScrollToCheckout} // Este `onClick` chama a função `onScrollToCheckout` recebida como prop, que fará a página rolar para o componente de checkout.
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-sm md:text-base transition duration-300"
          // Estiliza o botão com Tailwind CSS.
          // - bg-green-600: Define a cor de fundo do botão como um tom de verde.
          // - hover:bg-green-700: Altera a cor de fundo para um tom mais escuro de verde ao passar o mouse.
          // - text-white: Define a cor do texto como branco.
          // - font-semibold: Define o peso da fonte como semi-negrito.
          // - py-3 px-6: Padding vertical e horizontal.
          // - rounded-lg: Arredonda os cantos do botão.
          // - text-sm md:text-base: Define o tamanho da fonte (pequeno em telas menores, base em médias/maiores).
          // - transition duration-300: Aplica uma transição suave de 300ms para as propriedades que mudam (ex: hover effects).
          >
            QUERO DOMINAR A MOBILIDADE NA PRÁTICA AGORA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; // Exporta o componente Hero para que ele possa ser importado e usado em outras partes da aplicação.
