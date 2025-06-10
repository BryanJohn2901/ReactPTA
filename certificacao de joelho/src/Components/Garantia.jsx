// src/components/Garantia.jsx
import React from "react"; // Importa a biblioteca React, que é fundamental para a criação de componentes de interface.

// Componente Garantia com imagem à esquerda
const Garantia = () => {
  // Define o componente funcional Garantia.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-black text-white py-20 px-6">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para a garantia.
          - bg-black: Define a cor de fundo da seção como preto.
          - text-white: Define a cor do texto padrão dentro da seção como branco.
          - py-20: Adiciona um padding vertical de 5rem (80px), criando um bom espaçamento acima e abaixo do conteúdo.
          - px-6: Adiciona um padding horizontal de 1.5rem (24px) para garantir que o conteúdo não toque as bordas da tela. */}
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-10">
        {" "}
        {/* Define uma div que serve como contêiner interno para o conteúdo da garantia.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels, evitando que ele se espalhe demais em telas grandes.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - grid: Habilita o display CSS Grid para organizar o conteúdo em colunas.
            - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas de tamanho igual. Em telas menores, o layout será de uma única coluna (comportamento padrão do fluxo de documentos).
            - items-center: Alinha os itens do grid (as duas colunas) ao centro verticalmente, garantindo que a imagem e o texto fiquem alinhados.
            - gap-10: Adiciona um espaçamento de 2.5rem (40px) entre as colunas do grid. */}
        {/* Coluna da imagem da garantia */}
        <div className="flex justify-center">
          {" "}
          {/* Define uma div para a coluna que contém a imagem.
              - flex justify-center: Usa flexbox para centralizar a imagem horizontalmente dentro desta coluna, especialmente útil em telas menores onde há apenas uma coluna. */}
          <img
            src="/garantia.webp" // Define o caminho da imagem da garantia.
            alt="Garantia de 7 dias" // Texto alternativo para acessibilidade da imagem, importante para leitores de tela.
            className="w-full max-w-sm md:max-w-full h-auto object-contain"
            // Aplica classes CSS para estilizar a imagem:
            // - w-full: Faz a imagem ocupar 100% da largura do seu container.
            // - max-w-sm: Limita a largura máxima da imagem a 24rem (384px) em telas pequenas, para que ela não fique muito grande.
            // - md:max-w-full: Em telas médias e maiores, a imagem pode ocupar a largura total disponível na coluna do grid.
            // - h-auto: Mantém a proporção da altura da imagem, evitando distorções.
            // - object-contain: Redimensiona a imagem para caber completamente dentro do seu container, mantendo suas proporções e adicionando espaço (se necessário) para que a imagem não seja cortada.
          />
        </div>
        {/* Coluna do texto e botão */}
        <div className="space-y-6 text-center md:text-left">
          {" "}
          {/* Define uma div para a coluna que contém o texto e o botão.
              - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título, parágrafo, botão).
              - text-center: Centraliza o texto horizontalmente em telas pequenas.
              - md:text-left: Alinha o texto à esquerda em telas médias e maiores, complementando o layout de duas colunas. */}
          <h3 className="text-[#D00727] text-lg font-semibold">
            {" "}
            {/* Título da seção de garantia.
                - text-[#D00727]: Define a cor do texto como um tom de vermelho específico.
                - text-lg: Define o tamanho da fonte.
                - font-semibold: Define o peso da fonte como semi-negrito, destacando o título. */}
            Satisfação garantida ou o seu dinheiro de volta
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {" "}
            {/* Parágrafo com a descrição detalhada da garantia.
                - text-sm md:text-base: Define o tamanho da fonte (pequeno em telas menores, base em telas médias e maiores).
                - text-gray-300: Define a cor do texto como um tom de cinza claro, para contraste com o fundo preto.
                - leading-relaxed: Define o espaçamento entre linhas (line-height) como relaxado, melhorando a legibilidade do bloco de texto. */}
            Você tem 7 dias para assistir a todo o conteúdo. Se não sentir
            evolução na sua prescrição, basta enviar uma mensagem e devolveremos
            100 % do valor investido.
          </p>
          <button className="bg-[#D00727] hover:bg-[#b9061f] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            {" "}
            {/* Botão de chamada para ação (Call to Action - CTA).
                - bg-[#D00727]: Define o fundo do botão como vermelho.
                - hover:bg-[#b9061f]: Altera a cor de fundo para um tom mais escuro de vermelho ao passar o mouse, indicando interatividade.
                - text-white: Define a cor do texto como branco.
                - font-bold: Define o peso da fonte como negrito, tornando o texto do botão proeminente.
                - py-3 px-6: Adiciona padding vertical e horizontal, dando "respiro" ao texto do botão.
                - rounded-lg: Arredonda os cantos do botão.
                - transition duration-300: Adiciona uma transição suave de 300 milissegundos para as mudanças de estilo (como a cor de fundo ao hover). */}
            SIM! QUERO A CERTIFICAÇÃO!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Garantia; // Exporta o componente Garantia para que ele possa ser utilizado em outras partes da aplicação.
