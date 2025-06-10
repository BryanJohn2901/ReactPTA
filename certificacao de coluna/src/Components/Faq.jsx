// src/components/Faq.jsx
import React from "react"; // Importa a biblioteca React, essencial para construir componentes de interface.

// Lista de perguntas e respostas
const faqItems = [
  // Define um array de objetos, onde cada objeto representa uma pergunta frequente (FAQ).
  {
    pergunta: "Para quem é essa certificação?", // A chave 'pergunta' armazena a questão.
    resposta:
      "Personal trainers, educadores físicos e demais profissionais da saúde que desejam se especializar na prevenção e reabilitação de dores na coluna, elevando sua autoridade e resultados.", // A chave 'resposta' armazena a resposta correspondente.
  },
  {
    pergunta: "Preciso ter formação na área da saúde para participar?",
    resposta:
      "Sim. Esta certificação é voltada a quem já possui formação e quer aprofundar conhecimentos em coluna e dor lombar.",
  },
  {
    pergunta: "A certificação é reconhecida?",
    resposta:
      "Sim. Você receberá um certificado válido para comprovar especialização e agregar valor ao currículo.",
  },
  {
    pergunta: "O curso é 100 % online?",
    resposta: "Sim, permitindo estudar de qualquer lugar, sem interromper sua rotina.",
  },
  {
    pergunta: "Quanto tempo dura a certificação?",
    resposta: "Depende da sua disponibilidade, mas a maioria conclui entre 1 e 2 semanas.",
  },
  {
    pergunta: "Como posso me inscrever?",
    resposta:
      "Clique no botão “Quero garantir a oferta”, preencha os dados e conclua o pagamento. Acesso liberado imediatamente!",
  },
];

// Componente FAQ com lista de perguntas
const Faq = ({ onScrollToCheckout }) => {
  // Define o componente funcional Faq. Ele recebe uma prop `onScrollToCheckout`, que é uma função para rolar a página até a seção de checkout.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-black text-white py-20 px-4">
      {" "}
      {/* Define uma seção HTML que serve como container principal.
          - bg-black: Define o fundo da seção como preto.
          - text-white: Define a cor do texto padrão da seção como branco.
          - py-20: Adiciona um padding vertical de 5rem (80px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}
      {/* Container central com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-8">
        {" "}
        {/* Define uma div para centralizar o conteúdo e limitar sua largura.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200px.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-8: Adiciona um espaçamento vertical de 2rem (32px) entre os elementos filhos diretos. */}
        {/* Título */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-6">
          {" "}
          {/* Define o título da seção de FAQ.
              - text-center: Centraliza o texto.
              - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em telas médias e maiores).
              - font-bold: Define o peso da fonte como negrito.
              - text-green-600: Define a cor do texto como um tom de verde.
              - mb-6: Adiciona uma margem inferior de 1.5rem (24px). */}
          Perguntas frequentes
        </h2>
        {/* Perguntas */}
        {faqItems.map((item, index) => (
          // O método `map` é usado para iterar sobre o array `faqItems`. Para cada item (pergunta/resposta), ele renderiza uma div.
          <div
            key={index} // A prop `key` é essencial para otimizar a renderização de listas no React. O `index` do array é usado como uma key única aqui.
            className="bg-white text-black p-6 rounded-xl space-y-2 shadow-sm"
            // Aplica classes CSS para estilizar cada "card" de FAQ:
            // - bg-white: Define o fundo do card como branco.
            // - text-black: Define a cor do texto do card como preto.
            // - p-6: Adiciona um padding de 1.5rem (24px) em todas as direções.
            // - rounded-xl: Arredonda os cantos do card.
            // - space-y-2: Adiciona um espaçamento vertical de 0.5rem (8px) entre o título da pergunta e a resposta.
            // - shadow-sm: Adiciona uma sombra suave ao card.
          >
            <h3 className="text-base md:text-lg font-bold text-green-700">
              {item.pergunta}
            </h3>{" "}
            {/* Exibe a pergunta (item.pergunta) com estilos de fonte e cor. */}
            <p className="text-sm md:text-base">{item.resposta}</p>{" "}
            {/* Exibe a resposta (item.resposta) com tamanhos de fonte responsivos. */}
          </div>
        ))}
        {/* Botão final com scroll para checkout */}
        <div className="text-center pt-6">
          {" "}
          {/* Container para o botão, centralizando-o e adicionando padding superior. */}
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
            // - transition duration-300: Adiciona uma transição suave para as mudanças de estilo.
          >
            GARANTIR MINHA CERTIFICAÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq; // Exporta o componente Faq para que ele possa ser usado em outras partes da aplicação.