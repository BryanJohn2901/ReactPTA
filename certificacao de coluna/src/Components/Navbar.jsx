// src/components/Navbar.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Componente Navbar estilizado com Tailwind CSS
const Navbar = ({ onScrollToCheckout }) => {
  // Define o componente funcional Navbar. Ele recebe uma prop `onScrollToCheckout`, que é uma função para rolar a página até a seção de checkout.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <header className="bg-black border-b-2 border-green-600">
      {" "}
      {/* Define o elemento HTML <header>, que geralmente contém a navegação do site.
          - bg-black: Define a cor de fundo do cabeçalho como preto.
          - border-b-2: Adiciona uma borda na parte inferior com 2px de espessura.
          - border-green-600: Define a cor dessa borda como um tom de verde. */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {" "}
        {/* Define uma div interna para controlar a largura máxima do conteúdo da navbar e centralizá-lo.
            - max-w-7xl: Limita a largura máxima do conteúdo a 80rem (1280px).
            - mx-auto: Centraliza a div horizontalmente na tela.
            - px-4: Adiciona um padding horizontal de 1rem (16px).
            - py-4: Adiciona um padding vertical de 1rem (16px).
            - flex: Habilita o display flexbox para os elementos filhos.
            - justify-between: Distribui o espaço entre os elementos filhos, empurrando-os para as extremidades.
            - items-center: Alinha os elementos filhos verticalmente ao centro. */}
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {" "}
          {/* Container para o logo.
              - flex items-center: Usa flexbox para alinhar itens (como a imagem) verticalmente ao centro.
              - space-x-2: Adiciona um espaçamento horizontal de 0.5rem (8px) entre os elementos filhos. */}
          <img
            src="/logo_coluna.png" // Define o caminho da imagem do logo.
            alt="Logo" // Texto alternativo para acessibilidade da imagem.
            className="w-[180px]" // Define a largura da imagem como 180px.
          />
        </div>
        {/* Botão de scroll */}
        <button
          onClick={onScrollToCheckout} // Quando o botão é clicado, a função `onScrollToCheckout` (passada como prop) é executada.
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          // Aplica classes CSS para estilizar o botão:
          // - bg-green-600: Define o fundo do botão como verde.
          // - text-white: Define a cor do texto como branco.
          // - font-semibold: Define o peso da fonte como semi-negrito.
          // - px-6 py-2: Adiciona padding horizontal e vertical.
          // - rounded-lg: Arredonda os cantos do botão.
          // - hover:bg-green-700: Altera a cor de fundo para um tom mais escuro de verde ao passar o mouse.
          // - transition duration-300: Adiciona uma transição suave de 300ms para as mudanças de estilo (como a cor de fundo).
        >
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default Navbar; // Exporta o componente Navbar para que ele possa ser importado e utilizado em outras partes da aplicação.