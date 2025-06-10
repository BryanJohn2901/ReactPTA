// src/components/Professor.jsx
import React from "react"; // Importa a biblioteca React, que é a base para a construção de componentes de interface.

// Componente Professor com imagem e descrição
const Professor = ({ onScrollToCheckout }) => {
  // Define o componente funcional Professor. Ele recebe uma prop `onScrollToCheckout`, que é uma função para rolar a página até a seção de checkout.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-[#fefcf6] py-16 px-4">
      {" "}
      {/* Define uma seção HTML que serve como o container principal para as informações do professor.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara, quase branca.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {" "}
        {/* Define uma div que serve como container interno para o conteúdo.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels, evitando que ele se espalhe demais em telas grandes.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - grid: Habilita o display CSS Grid para organizar o conteúdo em colunas.
            - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas de tamanho igual. Em telas menores, os elementos se empilharão (comportamento padrão do fluxo de documentos).
            - gap-10: Adiciona um espaçamento de 2.5rem (40px) entre as colunas do grid.
            - items-center: Alinha os itens do grid (as duas colunas) ao centro verticalmente. */}
        {/* Texto */}
        <div className="text-black space-y-6">
          {" "}
          {/* Define uma div para a coluna do texto.
              - text-black: Define a cor do texto como preto.
              - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título, parágrafo, botão). */}
          <h2 className="text-2xl md:text-3xl font-bold">Quem é André Albuquerque?</h2>{" "}
          {/* Título da seção, perguntando sobre o professor.
              - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em telas médias e maiores).
              - font-bold: Define o peso da fonte como negrito. */}
          <p className="text-base leading-relaxed">
            {" "}
            {/* Parágrafo de descrição do professor.
                - text-base: Define o tamanho da fonte padrão.
                - leading-relaxed: Define o espaçamento entre linhas (line-height) como relaxado, melhorando a legibilidade. */}
            Professor de Educação Física e Mestre em Biomecânica, André conecta
            com mais de 200 mil pessoas nas redes, é autor dos livros
            Biomecânica Aplicada à Reabilitação de Lesões e Biomecânica Prática
            no Exercício Físico e já formou 23 mil alunos. Especialista em
            aplicar biomecânica clínica no cotidiano do treino, agora traz o
            Expertise em Coluna para profissionais que querem dominar a dor
            lombar.
          </p>
          {/* Botão CTA com scroll para o checkout */}
          <button
            onClick={onScrollToCheckout} // Quando o botão é clicado, a função `onScrollToCheckout` (passada como prop) é executada.
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            // Aplica classes CSS para estilizar o botão:
            // - bg-green-600: Define o fundo do botão como verde.
            // - hover:bg-green-700: Altera a cor de fundo para um tom mais escuro de verde ao passar o mouse.
            // - text-white: Define a cor do texto como branco.
            // - font-bold: Define o peso da fonte como negrito.
            // - py-3 px-6: Adiciona padding vertical e horizontal.
            // - rounded-lg: Arredonda os cantos do botão.
            // - transition duration-300: Adiciona uma transição suave de 300ms para as mudanças de estilo.
          >
            QUERO EXPERIMENTAR AGORA
          </button>
        </div>
        {/* Imagem */}
        <div className="flex justify-center">
          {" "}
          {/* Define uma div para a coluna da imagem.
              - flex justify-center: Usa flexbox para centralizar a imagem horizontalmente dentro desta coluna. */}
          <img
            src="/professor_andre.webp" // Define o caminho da imagem do professor.
            alt="Foto de André Albuquerque" // Texto alternativo para acessibilidade da imagem.
            className="rounded-xl" // Arredonda os cantos da imagem.
          />
        </div>
      </div>
    </section>
  );
};

export default Professor; // Exporta o componente Professor para que ele possa ser importado e utilizado em outras partes da aplicação.