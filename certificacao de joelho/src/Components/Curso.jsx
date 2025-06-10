// src/components/Curso.jsx
import React from "react"; // Importa a biblioteca React, que é fundamental para a construção de componentes de interface.

// Ícone SVG verde
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon para renderizar um ícone de "check".
  <svg
    // Inicia a definição de um Scalable Vector Graphics (SVG), usado para exibir o ícone vetorial.
    className="w-5 h-5 text-green-600 flex-shrink-0" // Aplica classes CSS (Tailwind CSS) para estilização do SVG:
    // - w-5, h-5: Define a largura e altura do SVG como 1.25rem (20px).
    // - text-green-600: Define a cor do traço (stroke) do SVG como um tom de verde.
    // - flex-shrink-0: Impede que o ícone seja reduzido dentro de um container flexível.
    fill="none" // Define que o preenchimento interno do SVG não terá cor (será transparente).
    stroke="currentColor" // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de `text-green-600`).
    strokeWidth="2" // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24" // Define a caixa de visualização do SVG, que é o sistema de coordenadas internas do SVG.
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone de 'check'. As propriedades `strokeLinecap` e `strokeLinejoin` arredondam as pontas e junções. */}
  </svg>
);

// Componente Curso com duas colunas
const Curso = () => {
  // Define o componente funcional principal chamado Curso.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para o conteúdo do curso.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara, quase branca.
          - text-black: Define a cor do texto padrão dentro desta seção como preto.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}

      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10">
        {" "}
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - grid: Habilita o display CSS Grid para organizar o conteúdo em colunas.
            - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas de tamanho igual. Em telas menores, os cards se empilharão (comportamento padrão do fluxo de documentos).
            - gap-10: Adiciona um espaçamento de 2.5rem (40px) entre as colunas do grid. */}

        {/* Coluna: Para quem é */}
        <div className="border border-green-600 rounded-xl p-6 space-y-4 shadow-sm">
          {" "}
          {/* Define o estilo do primeiro card, que descreve o público-alvo do curso.
              - border border-green-600: Adiciona uma borda de 1px com cor verde.
              - rounded-xl: Bordas arredondadas grandes.
              - p-6: Padding interno de 1.5rem (24px).
              - space-y-4: Adiciona um espaçamento vertical de 1rem (16px) entre os elementos filhos diretos.
              - shadow-sm: Adiciona uma sombra suave ao card. */}
          <h3 className="text-xl font-bold">Para quem é este curso:</h3>{" "}
          {/* Título da seção "Para quem é". */}
          <ul className="space-y-3 text-base">
            {" "}
            {/* Lista não ordenada de itens de público-alvo, com espaçamento vertical e tamanho de fonte base. */}
            <li className="flex items-start gap-2">
              {" "}
              {/* Item da lista, usando flexbox para alinhar o ícone e o texto.
                  - flex items-start: Alinha os itens ao início do eixo cruzado (topo).
                  - gap-2: Adiciona um espaçamento de 0.5rem (8px) entre o ícone e o span de texto. */}
              <CheckIcon /> {/* Renderiza o componente CheckIcon (o ícone de 'check' verde). */}
              <span>
                <strong>Personal Trainers</strong> que evitam prescrever
                exercícios como remada ou supino por medo da dor articular.
              </span>{" "}
              {/* Texto do item, com "Personal Trainers" em negrito. */}
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>
                <strong>Profissionais que querem se destacar</strong> com domínio
                técnico superior e segurança na prescrição.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>
                <strong>Treinadores</strong> que atendem alunos com dor no ombro
                e sentem insegurança técnica.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>
                <strong>Profissionais que querem ganhar mais</strong> por ter
                uma certificação reconhecida
              </span>
            </li>
          </ul>
        </div>

        {/* Coluna: Benefícios após o curso */}
        <div className="border border-green-600 rounded-xl p-6 space-y-4 shadow-sm">
          {" "}
          {/* Define o estilo do segundo card, que lista os benefícios do curso. Estilos similares ao primeiro card. */}
          <h3 className="text-xl font-bold">Benefícios imediatos após o curso</h3>{" "}
          {/* Título da seção "Benefícios". */}
          <ul className="space-y-3 text-base">
            {" "}
            {/* Lista não ordenada de benefícios, com espaçamento vertical e tamanho de fonte base. */}
            <li className="flex items-start gap-2">
              {" "}
              {/* Item da lista, usando flexbox para alinhar o ícone e o texto. */}
              <CheckIcon />
              <span>Domínio técnico avançado da cintura escapular (Shoulder Core).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>
                Prescrição segura e forte dos exercícios mais importantes para
                membros superiores.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>
                Correção prática e rápida das compensações biomecânicas, sem
                depender do fisioterapeuta.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Mais performance, menos risco de dor nos alunos.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Curso; // Exporta o componente Curso para que ele possa ser importado e usado em outras partes da aplicação.
