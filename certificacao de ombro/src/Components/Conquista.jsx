// src/components/Conquista.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Ícone SVG de check (sem dependência externa)
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon para renderizar um ícone de "check" em SVG.
  <svg
    // Inicia a definição de um Scalable Vector Graphics (SVG).
    className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" // Aplica classes CSS (Tailwind CSS) para estilização do SVG:
    // - w-6, h-6: Define a largura e altura do SVG como 1.5rem (24px).
    // - text-green-600: Define a cor do traço (stroke) do SVG como um tom de verde.
    // - mt-1: Adiciona uma margem superior de 0.25rem (4px) para alinhar o ícone com o texto.
    // - flex-shrink-0: Impede que o ícone seja reduzido dentro de um container flexível.
    fill="none" // Define que o preenchimento interno do SVG não terá cor (será transparente).
    stroke="currentColor" // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de `text-green-600`).
    strokeWidth="2" // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24" // Define a caixa de visualização do SVG, que é o sistema de coordenadas internas do SVG.
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone de 'check'.
        - strokeLinecap="round": Define as pontas do traço como arredondadas.
        - strokeLinejoin="round": Define as junções dos traços como arredondadas.
        - d="M5 13l4 4L19 7": São os comandos do caminho SVG que desenham a forma do 'check'. */}
  </svg>
);

// Componente Conquista
const Conquista = () => {
  // Define o componente funcional principal chamado Conquista.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para o conteúdo "O que você vai conquistar".
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara (quase branca) para a seção.
          - text-black: Define a cor do texto padrão dentro desta seção como preto.
          - py-16: Adiciona um padding vertical (superior e inferior) de 4rem (64px).
          - px-4: Adiciona um padding horizontal (esquerda e direita) de 1rem (16px).
          - text-center: Centraliza o texto de todos os elementos filhos diretos dentro desta seção. */}

      {/* Largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {" "}
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels, evitando que ele se espalhe demais em telas grandes.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título e o bloco de texto). */}

        {/* Título */}
        <h2 className="text-3xl font-bold">O que você vai conquistar:</h2>{" "}
        {/* Título principal da seção "O que você vai conquistar".
            - text-3xl: Define o tamanho da fonte (1.875rem / 30px).
            - font-bold: Define o peso da fonte como negrito. */}

        {/* Bloco com ícone e texto */}
        <div className="bg-black text-white rounded-xl p-6 flex items-center gap-4 justify-center mt-6">
          {" "}
          {/* Define o estilo do bloco que contém o ícone de check e o texto da conquista.
              - bg-black: Fundo preto.
              - text-white: Texto branco.
              - rounded-xl: Bordas arredondadas grandes.
              - p-6: Padding interno de 1.5rem (24px).
              - flex: Habilita o display flexbox.
              - items-center: Alinha os itens flexíveis ao centro no eixo cruzado (verticalmente).
              - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis (ícone e parágrafo).
              - justify-center: Centraliza o conteúdo horizontalmente dentro do bloco.
              - mt-6: Adiciona uma margem superior de 1.5rem (24px) para separar este bloco do título. */}
          <CheckIcon /> {/* Renderiza o componente CheckIcon (o ícone de 'check' verde). */}
          <p className="text-left text-base md:text-lg max-w-4xl">
            {" "}
            {/* Parágrafo que descreve a conquista principal.
                - text-left: Alinha o texto à esquerda (sobrescrevendo o `text-center` do pai).
                - text-base md:text-lg: Define o tamanho da fonte (base em telas menores, grande em médias/maiores).
                - max-w-4xl: Limita a largura máxima do parágrafo a 56rem (896px), garantindo que o texto não se espalhe muito em telas muito largas. */}
            Prescreva treinos para membros superiores com domínio técnico, segurança articular e lógica biomecânica — mesmo em alunos com dor ou instabilidade no ombro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conquista; // Exporta o componente Conquista para que ele possa ser importado e usado em outras partes da aplicação.
