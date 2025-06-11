// src/components/Navbar.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Componente Navbar estilizado com Tailwind CSS
// O componente agora recebe a prop 'onScrollToCheckout' para permitir a rolagem para a seção de checkout.
const Navbar = ({ onScrollToCheckout }) => { // Define o componente funcional Navbar e desestrutura a prop 'onScrollToCheckout'.
  return (
    <header className="bg-black border-b-2 border-green-600">
      {/* Define o elemento HTML <header>, que geralmente contém a navegação do site.
          - bg-black: Define a cor de fundo do cabeçalho como preto.
          - border-b-2: Adiciona uma borda na parte inferior com 2px de espessura.
          - border-green-600: Define a cor dessa borda como um tom de verde. */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Define uma div interna para controlar a largura máxima do conteúdo da navbar e centralizá-lo.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200px.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - px-4: Adiciona um padding horizontal de 1rem (16px).
            - py-4: Adiciona um padding vertical de 1rem (16px).
            - flex: Habilita o display flexbox para os elementos filhos.
            - justify-between: Distribui o espaço entre os elementos filhos, empurrando-os para as extremidades.
            - items-center: Alinha os elementos filhos verticalmente ao centro. */}
        {/* Logo sozinha à esquerda */}
        <img
          src="/logo_ombro.webp" // Define o caminho da imagem do logo.
          alt="Logo Expertise em Ombro" // Texto alternativo para acessibilidade da imagem.
          className="w-[180px] h-auto" // Define a largura da imagem como 180px e a altura automática para manter a proporção.
        />

        {/* Botão verde à direita */}
        <button
          onClick={onScrollToCheckout} // Adiciona o onClick para chamar a prop onScrollToCheckout, que acionará o scroll.
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        // Aplica classes CSS para estilizar o botão:
        // - bg-green-600: Define a cor de fundo do botão como um tom de verde.
        // - text-white: Define a cor do texto como branco.
        // - font-semibold: Define o peso da fonte como semi-negrito.
        // - px-6 py-2: Adiciona padding horizontal e vertical.
        // - rounded-lg: Arredonda os cantos do botão.
        // - hover:bg-green-700: Altera a cor de fundo para um tom mais escuro de verde ao passar o mouse.
        // - transition duration-300: Adiciona uma transição suave de 300ms para as mudanças de estilo.
        >
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default Navbar; // Exporta o componente Navbar para que ele possa ser importado e usado em outras partes da aplicação.
