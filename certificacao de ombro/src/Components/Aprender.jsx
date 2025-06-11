// src/components/Faq.jsx
import React from "react"; // Importa a biblioteca React, essencial para a criação de componentes.

// Lista de perguntas e respostas (FAQ)
const faqItems = [
  // Define um array de objetos, onde cada objeto representa uma pergunta e sua respectiva resposta.
  // Esta estrutura facilita a renderização dinâmica das FAQs.
  {
    pergunta: "Preciso ser formado em Educação Física?",
    resposta: "Sim. A certificação é voltada a profissionais graduados ou estudantes no último ano.",
  },
  {
    pergunta: "Recebo materiais prontos?",
    resposta: "Sim. Você terá acesso à planilha principal e modelos de micro/mesociclos.",
  },
  {
    pergunta: "O curso é 100 % online?",
    resposta: "Totalmente. Assista onde e quando quiser, com acesso vitalício.",
  },
  {
    pergunta: "O curso é 100% online ou tem aulas presenciais?",
    resposta:
      "O curso é totalmente online. Você poderá assistir às aulas no seu ritmo, em qualquer lugar e dispositivo, sem precisar interromper sua rotina diária de atendimentos.",
  },
  {
    pergunta: "Quanto tempo dura o curso?",
    resposta:
      "O tempo médio para conclusão do curso varia de acordo com seu ritmo pessoal, mas a maioria dos alunos conclui o curso em até duas semanas, estudando de forma tranquila e prática.",
  },
  {
    pergunta: "Como posso me inscrever?",
    resposta:
      "Basta clicar no botão de inscrição nesta página, preencher seus dados corretamente e confirmar sua vaga. Logo após a confirmação do pagamento, você terá acesso imediato às aulas, materiais complementares e comunidade exclusiva.",
  },
];

// Componente FAQ com lista de perguntas
// Ele recebe a prop 'onScrollToCheckout' para acionar a rolagem para a seção de checkout.
const Faq = ({ onScrollToCheckout }) => { // Define o componente funcional Faq e desestrutura a prop 'onScrollToCheckout'.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-black text-white py-20 px-4">
      {/* Define uma seção HTML que serve como o contêiner principal para a seção de Perguntas Frequentes.
          - bg-black: Define a cor de fundo da seção como preto.
          - text-white: Define a cor do texto padrão dentro da seção como branco.
          - py-20: Adiciona um padding vertical de 5rem (80px), criando um bom espaçamento acima e abaixo do conteúdo.
          - px-4: Adiciona um padding horizontal de 1rem (16px) para garantir que o conteúdo não toque as bordas da tela. */}

      {/* Container central com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Define uma div que age como um contêiner interno para o conteúdo da FAQ.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-8: Adiciona um espaçamento vertical de 2rem (32px) entre os elementos filhos diretos (o título e os cards de perguntas). */}

        {/* Título da seção */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-6">
          {/* Título principal da seção de perguntas frequentes.
              - text-center: Centraliza o texto.
              - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em telas médias e grandes).
              - font-bold: Define o peso da fonte como negrito.
              - text-green-600: Define a cor do texto como um tom de verde.
              - mb-6: Adiciona uma margem inferior de 1.5rem (24px) para separar o título das perguntas. */}
          Perguntas frequentes
        </h2>

        {/* Perguntas */}
        {faqItems.map((item, index) => (
          // O método `map` é usado para iterar sobre o array `faqItems`.
          // Para cada `item` (pergunta/resposta) no array, ele renderiza uma div que age como um "card" de FAQ.
          <div key={index} className="bg-white text-black p-6 rounded-xl space-y-2 shadow-sm">
            {/* Define o estilo de cada card de pergunta/resposta.
                - key={index}: `key` é uma propriedade especial no React que ajuda na identificação de elementos em listas, melhorando a performance. `index` é usado aqui como uma key única.
                - bg-white: Define o fundo do card como branco.
                - text-black: Define a cor do texto dentro do card como preto.
                - p-6: Adiciona um padding interno de 1.5rem (24px) em todas as direções.
                - rounded-xl: Arredonda os cantos do card com um raio grande.
                - space-y-2: Adiciona um espaçamento vertical de 0.5rem (8px) entre o título da pergunta e o texto da resposta.
                - shadow-sm: Adiciona uma sombra suave ao card. */}
            <h3 className="font-semibold text-green-700 text-lg md:text-xl">{item.pergunta}</h3>
            {/* Título da pergunta.
                - font-semibold: Peso da fonte semi-negrito.
                - text-green-700: Cor do texto verde escuro.
                - text-lg md:text-xl: Tamanho da fonte responsivo. */}
            <p className="text-sm md:text-base">{item.resposta}</p>
            {/* Parágrafo da resposta.
                - text-sm md:text-base: Tamanho da fonte responsivo. */}
          </div>
        ))}

        {/* Botão final */}
        <div className="text-center pt-6">
          {/* Contêiner para o botão de Call To Action (CTA) final, centralizado.
              - text-center: Centraliza o conteúdo (o botão).
              - pt-6: Adiciona um padding superior de 1.5rem (24px). */}
          <button
            onClick={onScrollToCheckout} // Este `onClick` chama a função `onScrollToCheckout` recebida como prop, que fará a página rolar para o componente de checkout.
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            // Aplica classes CSS para estilizar o botão:
            // - bg-green-600: Define a cor de fundo do botão como um tom de verde.
            // - hover:bg-green-700: Altera a cor de fundo para um tom mais escuro de verde ao passar o mouse.
            // - text-white: Define a cor do texto como branco.
            // - font-bold: Define o peso da fonte como negrito.
            // - py-3 px-6: Adiciona padding vertical e horizontal.
            // - rounded-lg: Arredonda os cantos do botão.
            // - transition duration-300: Adiciona uma transição suave de 300ms para as mudanças de estilo.
          >
            GARANTIR MINHA CERTIFICAÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq; // Exporta o componente Faq para que ele possa ser importado e usado em outras partes da aplicação.
