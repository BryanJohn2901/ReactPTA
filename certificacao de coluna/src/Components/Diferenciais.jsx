// src/components/Diferenciais.jsx
import React from "react"; // Importa a biblioteca React, que é fundamental para a criação de componentes.

// Ícone SVG de check verde
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon. Ele representa um ícone de 'check' (✓).
  <svg
    // Inicia a definição de um Scalable Vector Graphics (SVG), que é um formato de imagem baseado em XML para gráficos bidimensionais.
    className="w-7 h-7 text-green-600 flex-shrink-0 mt-1"
    // Aplica classes de utilidade do Tailwind CSS para estilizar o SVG:
    // - w-7, h-7: Define a largura e altura do SVG como 1.75rem (28px).
    // - text-green-600: Define a cor do traço (stroke) do SVG como um tom de verde.
    // - flex-shrink-0: Impede que o item (o ícone) seja reduzido dentro de um container flexível.
    // - mt-1: Adiciona uma margem superior de 0.25rem (4px).
    fill="none"
    // Define que o preenchimento interno do SVG não terá cor (ou seja, será transparente).
    stroke="currentColor"
    // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de `text-green-600`).
    strokeWidth="2"
    // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24"
  // Define a caixa de visualização do SVG, que é o sistema de coordenadas internas do SVG (0,0 é o canto superior esquerdo, 24,24 é o canto inferior direito).
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone de 'check'.
        - strokeLinecap="round": Define as pontas do traço como arredondadas.
        - strokeLinejoin="round": Define as junções dos traços como arredondadas.
        - d="M5 13l4 4L19 7": São os comandos do caminho SVG, desenhando a forma do 'check'. */}
  </svg>
);

// Componente Diferenciais
const Diferenciais = () => {
  // Define o componente funcional principal chamado Diferenciais.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      {" "}
      {/* Define uma seção HTML que serve como o container principal para o conteúdo dos diferenciais.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px).
          - text-black: Define a cor do texto padrão dentro desta seção como preto. */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {" "}
        {/* Define uma div que age como um container interno para o conteúdo.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200px.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-10: Adiciona um espaçamento vertical de 2.5rem (40px) entre os elementos filhos diretos. */}
        {/* Título */}
        <h2 className="text-3xl font-bold text-center">
          {" "}
          {/* Define o título principal da seção.
              - text-3xl: Define o tamanho da fonte como 1.875rem (30px).
              - font-bold: Define o peso da fonte como negrito.
              - text-center: Centraliza o texto. */}
          Diferenciais deste treinamento
        </h2>
        {/* Cards de diferenciais */}
        <div className="space-y-6">
          {" "}
          {/* Define uma div para agrupar os "cards" individuais dos diferenciais.
              - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os cards. */}
          {[
            // Inicia um array de strings. Cada string representa o texto de um diferencial.
            "Conceito exclusivo Core Spine – método simples e poderoso para máxima estabilidade",
            "Conteúdo 100 % aplicável – use na próxima sessão de treino",
            "Acesso vitalício e atualizações contínuas",
            "Certificação de valor – destaque seu currículo com credibilidade técnica",
          ].map((texto, index) => (
            // O método `map` é usado para iterar sobre o array de `texto` (diferenciais).
            // Para cada `texto` no array, ele renderiza um bloco de JSX.
            <div
              key={index} // `key` é uma propriedade especial no React que ajuda na identificação de elementos em listas, melhorando a performance. `index` é usado aqui como uma key única.
              className="bg-black text-white rounded-xl p-6 flex items-start gap-4"
            // Aplica classes CSS para estilizar cada card de diferencial:
            // - bg-black: Define o fundo do card como preto.
            // - text-white: Define a cor do texto dentro do card como branco.
            // - rounded-xl: Arredonda os cantos do card com um raio grande.
            // - p-6: Adiciona um padding de 1.5rem (24px) em todas as direções dentro do card.
            // - flex: Habilita o display flexbox para este container.
            // - items-start: Alinha os itens flexíveis (o ícone e o parágrafo) ao início do eixo cruzado (topo).
            // - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis.
            >
              <CheckIcon /> {/* Renderiza o componente CheckIcon definido anteriormente. */}
              <p>{texto}</p>{" "}
              {/* Renderiza o texto do diferencial atual dentro de um parágrafo. */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais; // Exporta o componente Diferenciais para que ele possa ser importado e utilizado em outros arquivos da aplicação.