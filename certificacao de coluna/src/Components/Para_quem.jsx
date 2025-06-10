// src/components/Para_quem.jsx
import React from "react"; // Importa a biblioteca React, essencial para a criação de componentes de interface.

// Ícone de check verde
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon. Ele representa um ícone de 'check' (✓).
  <svg
    // Inicia a definição de um Scalable Vector Graphics (SVG), usado para exibir o ícone.
    className="w-7 h-7 text-green-600 flex-shrink-0 mt-1"
    // Aplica classes de utilidade do Tailwind CSS para estilizar o SVG:
    // - w-7, h-7: Define a largura e altura do SVG como 1.75rem (28px).
    // - text-green-600: Define a cor do traço (stroke) do SVG como um tom de verde.
    // - flex-shrink-0: Impede que o ícone diminua dentro de um container flexível.
    // - mt-1: Adiciona uma margem superior de 0.25rem (4px).
    fill="none"
    // Define que o preenchimento interno do SVG não terá cor (será transparente).
    stroke="currentColor"
    // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de `text-green-600`).
    strokeWidth="2"
    // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24"
    // Define a caixa de visualização do SVG, que é o sistema de coordenadas internas do SVG.
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone de 'check'. As propriedades `strokeLinecap` e `strokeLinejoin` arredondam as pontas e junções. */}
  </svg>
);

const Para_quem = () => {
  // Define o componente funcional principal chamado Para_quem.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      {" "}
      {/* Define uma seção HTML que serve como o container principal para o conteúdo.
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
        {/* Título centralizado */}
        <h2 className="text-3xl font-bold text-center">Para quem é este curso</h2>{" "}
        {/* Define o título principal da seção.
            - text-3xl: Define o tamanho da fonte.
            - font-bold: Define o peso da fonte como negrito.
            - text-center: Centraliza o texto. */}
        {/* Grid com os cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {" "}
          {/* Define uma div que organiza os cards em um layout de grid.
              - grid: Habilita o display CSS Grid.
              - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas. Em telas menores, os cards se empilharão (comportamento padrão de bloco).
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente). */}
          {/* Card 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            {" "}
            {/* Define o estilo de um card individual.
                - bg-black: Fundo preto.
                - text-white: Texto branco.
                - rounded-xl: Bordas arredondadas.
                - p-6: Padding interno.
                - flex items-start gap-4: Usa flexbox para alinhar o ícone e o texto lado a lado, com o ícone no topo e espaçamento entre eles. */}
            <CheckIcon /> {/* Renderiza o ícone de 'check'. */}
            <p>
              Personal Trainers que evitam exercícios de carga axial por medo de
              dor lombar
            </p>{" "}
            {/* Parágrafo descrevendo o público-alvo específico para este card. */}
          </div>
          {/* Card 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            {" "}
            {/* Estrutura e estilos repetidos para o segundo card. */}
            <CheckIcon />
            <p>
              Treinadores que atendem alunos com hérnias, protrusões ou
              lombalgia crônica
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            {" "}
            {/* Estrutura e estilos repetidos para o terceiro card. */}
            <CheckIcon />
            <p>
              Profissionais que querem se destacar com domínio técnico superior
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4">
            {" "}
            {/* Estrutura e estilos repetidos para o quarto card. */}
            <CheckIcon />
            <p>
              Quem busca cobrar mais por possuir certificação reconhecida em
              coluna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Para_quem; // Exporta o componente Para_quem para que ele possa ser importado e usado em outras partes da aplicação.