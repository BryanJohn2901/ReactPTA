// src/components/Professor.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Componente Professor com imagem e descrição
// O componente agora recebe a prop 'onScrollToCheckout' para permitir a rolagem para a seção de checkout.
const Professor = ({ onScrollToCheckout }) => { // Define o componente funcional Professor e desestrutura a prop 'onScrollToCheckout'.
  return (
    <section className="bg-[#fefcf6] py-16 px-4">
      {/* Define o elemento HTML <section>, que serve como o contêiner principal para as informações do professor.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara, quase branca.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - grid: Habilita o display CSS Grid para organizar o conteúdo em colunas.
            - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas de tamanho igual. Em telas menores, os elementos se empilharão (comportamento padrão do fluxo de documentos).
            - gap-10: Adiciona um espaçamento de 2.5rem (40px) entre as colunas do grid.
            - items-center: Alinha os itens do grid (as duas colunas) ao centro verticalmente. */}
        {/* Texto */}
        <div className="text-black space-y-6">
          {/* Define uma div para a coluna do texto.
              - text-black: Define a cor do texto como preto.
              - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título, parágrafo, botão). */}
          <h2 className="text-2xl md:text-3xl font-bold">Quem é Fernando Jaeger?</h2>
          {/* Título da seção, apresentando o nome do professor.
              - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em telas médias e maiores).
              - font-bold: Define o peso da fonte como negrito. */}
          <p className="text-base leading-relaxed">
            {/* Parágrafo de descrição do professor.
                - text-base: Define o tamanho da fonte padrão.
                - leading-relaxed: Define o espaçamento entre linhas (line-height) como relaxado, melhorando a legibilidade. */}
            Especialista em condicionamento funcional, criador do método de Periodização Híbrida Funcional e professor convidado em cursos de pós-graduação. Fernando já ajudou centenas de treinadores a organizar treinos de alto impacto com segurança.
          </p>

          {/* Botão CTA */}
          <button
            // Adicione o onClick para chamar a prop onScrollToCheckout
            // Este `onClick` chama a função `onScrollToCheckout` recebida como prop, que fará a página rolar para o componente de checkout.
            onClick={onScrollToCheckout}
            className="text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            // Estiliza o botão com Tailwind CSS e um estilo inline para a cor de fundo.
            // - text-white: Cor do texto branco.
            // - font-bold: Peso da fonte negrito.
            // - py-3 px-6: Padding vertical e horizontal.
            // - rounded-lg: Bordas arredondadas.
            // - transition duration-300: Aplica uma transição suave de 300ms para as propriedades que mudam (ex: hover effects).
            style={{ backgroundColor: '#D00727' }} // Define a cor de fundo do botão como um tom de vermelho específico.
          >
            QUERO EXPERIMENTAR AGORA
          </button>
        </div>

        {/* Imagem expandida */}
        <div className="flex justify-end">
          {/* Define uma div para a coluna da imagem.
              - flex justify-end: Usa flexbox para alinhar a imagem à direita dentro desta coluna. */}
          <img
            src="/professor_andre.webp" // O caminho da imagem ainda é "professor_andre.webp" - Comentário: Verifique se o nome da imagem e o 'alt' text estão corretos para "Fernando Jaeger" se a intenção for usar uma nova imagem para ele.
            alt="Foto de André Albuquerque" // Mantendo o alt text consistente com a imagem atual - Comentário: O 'alt' text deve ser atualizado para "Foto de Fernando Jaeger" se a imagem for realmente de Fernando Jaeger.
            className="rounded-xl w-full h-auto max-h-[600px] object-cover"
          // Aplica classes CSS à imagem:
          // - rounded-xl: Arredonda os cantos da imagem.
          // - w-full: Ocupa 100% da largura do seu container.
          // - h-auto: Mantém a proporção da altura da imagem.
          // - max-h-[600px]: Limita a altura máxima da imagem a 600px.
          // - object-cover: Redimensiona a imagem para cobrir a área do contêiner, cortando as partes que não cabem.
          />
        </div>
      </div>
    </section>
  );
};

export default Professor; // Exporta o componente Professor para que ele possa ser importado e usado em outras partes da aplicação.
