// src/components/Hero.jsx
import React from "react"; // Importa a biblioteca React, fundamental para a criação de componentes.

const Hero = ({ onScrollToCheckout }) => {
  // Define o componente funcional Hero. Ele recebe uma prop `onScrollToCheckout`, que é uma função para rolar a página até a seção de checkout.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section
      className="relative bg-cover bg-center bg-no-repeat" // Define o estilo da seção: posicionamento relativo, imagem de fundo cobrindo o elemento, centralizada e sem repetição.
      style={{ backgroundImage: "url('/banner_coluna.webp')" }} // Define a imagem de fundo através de um estilo inline. O caminho `/banner_coluna.webp` aponta para a imagem.
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/70 z-0" />{" "}
      {/* Cria uma div que serve como um overlay escuro semi-transparente.
          - absolute: Posiciona a div absolutamente em relação ao seu pai (`<section>`).
          - inset-0: Faz a div ocupar 100% da largura e altura do pai.
          - bg-black/70: Define a cor de fundo como preta com 70% de opacidade.
          - z-0: Define a ordem de empilhamento (z-index) para que fique abaixo do conteúdo principal. */}
      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 text-white py-16 px-4 text-center">
        {" "}
        {/* Container para todo o conteúdo do hero, posicionado relativamente e com z-index maior para ficar acima do overlay.
            - relative: Posiciona a div relativamente.
            - z-10: Define a ordem de empilhamento (z-index) para que fique acima do overlay.
            - text-white: Define a cor do texto como branco.
            - py-16: Adiciona um padding vertical de 4rem (64px).
            - px-4: Adiciona um padding horizontal de 1rem (16px).
            - text-center: Centraliza o texto. */}
        <div className="max-w-[1200px] mx-auto space-y-6">
          {" "}
          {/* Container interno para o conteúdo, limitando a largura e adicionando espaçamento vertical.
              - max-w-[1200px]: Limita a largura máxima a 1200px.
              - mx-auto: Centraliza horizontalmente.
              - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos. */}
          {/* Título principal */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {" "}
            {/* Título principal da página.
                - text-3xl md:text-5xl: Define o tamanho da fonte (3xl em telas menores, 5xl em telas médias e maiores).
                - font-extrabold: Define o peso da fonte como extra-negrito.
                - leading-tight: Define o espaçamento entre linhas como apertado. */}
            Domine a Biomecânica da Coluna e Prescreva Treinos Seguros, Estáveis
            e Sem Dor Lombar
          </h1>
          {/* Subtítulo */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            {" "}
            {/* Parágrafo de subtítulo.
                - text-gray-300: Define a cor do texto como um tom de cinza claro.
                - text-lg md:text-xl: Define o tamanho da fonte (lg em telas menores, xl em telas médias e maiores).
                - max-w-2xl: Limita a largura máxima do parágrafo.
                - mx-auto: Centraliza o parágrafo horizontalmente. */}
            Elimine de vez a insegurança ao prescrever exercícios para a coluna,
            torne-se referência técnica e transforme alunos com dores nas costas
            em cases de sucesso.
          </p>
          {/* Vídeo YouTube */}
          <div className="mt-10 flex justify-center">
            {" "}
            {/* Container para o vídeo do YouTube.
                - mt-10: Adiciona uma margem superior de 2.5rem (40px).
                - flex justify-center: Usa flexbox para centralizar o iframe do vídeo. */}
            <iframe
              width="100%" // Define a largura do iframe para 100% do seu container.
              height="600" // Define a altura fixa do iframe como 600px.
              src="https://www.youtube.com/embed/SEU_VIDEO_ID" // Substitua pelo ID do seu vídeo // O atributo `src` define a URL do vídeo a ser incorporado. Atualmente aponta para um endereço genérico.
              title="YouTube video player" // Título para o iframe, importante para acessibilidade.
              frameBorder="0" // Remove a borda do iframe.
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permite certas funcionalidades como aceleração, autoplay, etc.
              allowFullScreen // Permite que o vídeo seja exibido em tela cheia.
              className="w-full max-w-3xl rounded-lg shadow-lg"
              // Aplica classes CSS:
              // - w-full: Ocupa 100% da largura disponível.
              // - max-w-3xl: Limita a largura máxima do iframe a 48rem (768px).
              // - rounded-lg: Arredonda os cantos do iframe.
              // - shadow-lg: Adiciona uma sombra grande.
            ></iframe>
          </div>
          {/* Botão CTA */}
          <div className="mt-10">
            {" "}
            {/* Container para o botão de Call To Action (CTA), com margem superior. */}
            <button
              onClick={onScrollToCheckout} // Quando o botão é clicado, a função `onScrollToCheckout` (passada como prop) é executada, tipicamente para rolar a página.
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-sm md:text-base transition duration-300"
              // Estiliza o botão:
              // - bg-green-600: Fundo verde.
              // - hover:bg-green-700: Fundo verde mais escuro no hover.
              // - text-white: Texto branco.
              // - font-semibold: Fonte semi-negrito.
              // - py-3 px-6: Padding.
              // - rounded-lg: Bordas arredondadas.
              // - text-sm md:text-base: Tamanho da fonte responsivo.
              // - transition duration-300: Transição suave em 300ms para o hover.
            >
              QUERO DOMINAR A MOBILIDADE NA PRÁTICA AGORA!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; // Exporta o componente Hero para que ele possa ser importado e usado em outras partes da aplicação.