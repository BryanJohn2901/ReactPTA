import React from "react"; // Importa a biblioteca React, essencial para a criação de componentes.

// Ícone SVG inline (check vermelho)
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon. Ele renderiza um ícone de "check".
  <svg
    // Inicia a definição de um Scalable Vector Graphics (SVG), usado para exibir o ícone vetorial.
    className="w-6 h-6 text-[#D00727] flex-shrink-0 mt-1"
    // Aplica classes de utilidade do Tailwind CSS para estilização do SVG:
    // - w-6, h-6: Define a largura e altura do SVG como 1.5rem (24px).
    // - text-[#D00727]: Define a cor do traço (stroke) do SVG como um tom de vermelho específico.
    // - flex-shrink-0: Impede que o ícone seja reduzido dentro de um container flexível.
    // - mt-1: Adiciona uma margem superior de 0.25rem (4px), útil para alinhar o ícone com o texto.
    fill="none"
    // Define que o preenchimento interno do SVG não terá cor (será transparente).
    stroke="currentColor"
    // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de `text-[#D00727]`).
    strokeWidth="2"
    // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24"
    // Define a caixa de visualização do SVG, que é o sistema de coordenadas internas do SVG (0,0 é o canto superior esquerdo, 24,24 é o canto inferior direito).
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone de 'check'.
        - strokeLinecap="round": Define as pontas do traço como arredondadas.
        - strokeLinejoin="round": Define as junções dos traços como arredondadas.
        - d="M5 13l4 4L19 7": São os comandos do caminho SVG que desenham a forma do 'check'. */}
  </svg>
);

// Componente Aprender
const Aprender = () => {
  // Define o componente funcional principal chamado Aprender.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para o conteúdo "O que você vai aprender".
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara (quase branca).
          - text-black: Define a cor do texto padrão dentro desta seção como preto.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px).
          - text-center: Centraliza o texto de todos os elementos filhos diretos dentro desta seção. */}

      {/* Container central com largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {" "}
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-10: Adiciona um espaçamento vertical de 2.5rem (40px) entre os elementos filhos diretos (título e grid de módulos). */}

        {/* Título principal */}
        <h2 className="text-3xl font-bold">O que você vai aprender</h2>{" "}
        {/* Define o título principal da seção.
            - text-3xl: Define o tamanho da fonte (30px).
            - font-bold: Define o peso da fonte como negrito. */}

        {/* Grid de módulos - 3 por linha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {" "}
          {/* Define uma div que organiza os "cards" dos módulos em um layout de grid.
              - grid: Habilita o display CSS Grid.
              - grid-cols-1: Em telas pequenas (padrão), haverá 1 coluna.
              - md:grid-cols-3: Em telas médias (md) e maiores, o grid terá 3 colunas de tamanho igual.
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente).
              - text-left: Alinha o texto à esquerda dentro de cada card (sobrescrevendo o `text-center` da seção pai). */}

          {/* Módulo 1 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            {" "}
            {/* Define o estilo de um card de módulo individual.
                - bg-black: Fundo preto.
                - text-white: Texto branco.
                - rounded-xl: Bordas arredondadas grandes.
                - p-6: Padding interno de 1.5rem (24px).
                - space-y-3: Adiciona um espaçamento vertical de 0.75rem (12px) entre os elementos filhos diretos dentro do card. */}
            <div className="flex items-start gap-3">
              {" "}
              {/* Contêiner interno para o ícone e o conteúdo do módulo, usando flexbox para alinhamento.
                  - flex items-start: Usa flexbox para alinhar o ícone e o texto lado a lado, com o ícone no topo.
                  - gap-3: Adiciona um espaçamento de 0.75rem (12px) entre o ícone e o div de conteúdo. */}
              <CheckIcon /> {/* Renderiza o componente CheckIcon (o ícone de 'check' vermelho). */}
              <div>
                {" "}
                {/* Contêiner para o título do módulo e sua lista de itens. */}
                <h3 className="text-lg md:text-xl font-bold">HIP CORE:</h3>{" "}
                {/* Título do módulo com tamanhos de fonte responsivos e negrito. */}
                <ul className="list-disc list-inside text-sm mt-1">
                  {" "}
                  {/* Lista não ordenada com estilo de disco, itens indentados e tamanho de fonte pequeno.
                      - list-disc: Usa um disco como marcador de lista.
                      - list-inside: Coloca o marcador de lista dentro do conteúdo do item.
                      - text-sm: Tamanho da fonte pequeno (14px).
                      - mt-1: Adiciona uma pequena margem superior. */}
                  <li>
                    O grande responsável pela saúde do joelho, fortalecendo a
                    região do quadril e proporcionando maior estabilidade nos
                    movimentos.
                  </li>{" "}
                  {/* Item da lista, descrevendo o ponto de aprendizado. */}
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 2 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento paralelo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Exercício clássico que ativa toda a musculatura das pernas e
                    glúteos, garantindo força e estabilidade articular.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 3 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento sumo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Com uma base mais ampla, esse agachamento enfatiza o
                    trabalho dos adutores e glúteos, além de melhorar a
                    mobilidade do quadril.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 4 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento com os pés juntos</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Foca no quadríceps e exige maior equilíbrio, sendo ideal
                    para aprimorar o controle motor e fortalecer os joelhos.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 5 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento búlgaro</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Variante unilateral que melhora força, equilíbrio e
                    coordenação, reduzindo desequilíbrios musculares entre as
                    pernas.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 6 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Afundo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Exercício fundamental para o fortalecimento de pernas e
                    glúteos, promovendo maior estabilidade e resistência
                    muscular.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 7 (estrutura e comentários similares ao Módulo 1) */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Stiff</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>
                    Movimentação essencial para o fortalecimento dos
                    isquiotibiais e glúteos, além de trabalhar a mobilidade da
                    cadeia posterior.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bônus (estrutura e comentários similares aos módulos, mas com cor de fundo diferente) */}
          <div className="bg-[#D00727] text-white rounded-xl p-6 space-y-3">
            {" "}
            {/* O card de Bônus tem um fundo vermelho específico. */}
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">+ Bônus</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>✅ Testes biomecânicos para você compreender as dores no joelho</li>
                  <li>✅ MasterClass – analise biomecânica do joelho</li>
                  <li>✅ Livro digital “Biomecânica do joelho”</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aprender; // Exporta o componente Aprender para que ele possa ser importado e usado em outras partes da aplicação.
