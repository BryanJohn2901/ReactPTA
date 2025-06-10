import React from 'react'; // Importa a biblioteca React, essencial para criar componentes de interface.
import { CheckCircle } from 'lucide-react'; // Importa o ícone 'CheckCircle' da biblioteca 'lucide-react', usado para indicar benefícios.

// Lista de benefícios exibidos no componente
const beneficios = [
  // Define um array de strings, onde cada string é um benefício a ser listado.
  'Clareza para justificar cada exercício e carga.',
  'Redução drástica de erros e improvisos.',
  'Planilha automatizada que acelera a montagem de treinos.',
  'Maior retenção e satisfação dos alunos.',
];

const Beneficios = () => {
  // Define o componente funcional principal chamado Beneficios.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-[#fdfbf4] py-16">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para os benefícios.
          - bg-[#fdfbf4]: Define uma cor de fundo personalizada muito clara, quase branca.
          - py-16: Adiciona um padding vertical de 4rem (64px), criando espaçamento acima e abaixo do conteúdo. */}

      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
        {" "}
        {/* Define o título principal da seção.
            - text-3xl md:text-4xl: Define o tamanho da fonte (3xl em telas menores, 4xl em telas médias e maiores).
            - font-bold: Define o peso da fonte como negrito.
            - text-center: Centraliza o texto.
            - text-zinc-900: Define a cor do texto como um tom muito escuro de cinza (quase preto).
            - mb-12: Adiciona uma margem inferior de 3rem (48px) para separar o título dos cards. */}
        Benefícios imediatos após o curso
      </h2>

      {/* Container com grid para os benefícios */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {" "}
        {/* Define uma div que age como um contêiner interno para os cards de benefícios.
            - max-w-6xl: Limita a largura máxima do contêiner a 72rem (1152px).
            - mx-auto: Centraliza o contêiner horizontalmente na tela.
            - grid: Habilita o display CSS Grid.
            - grid-cols-1: Em telas pequenas (padrão), o grid terá 1 coluna.
            - md:grid-cols-2: Em telas médias (md) e maiores, o grid terá 2 colunas de tamanho igual.
            - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente).
            - px-4: Adiciona um padding horizontal de 1rem (16px) para garantir espaçamento nas laterais em telas menores. */}

        {beneficios.map((beneficio, index) => (
          // O método `map` é usado para iterar sobre o array `beneficios`.
          // Para cada `beneficio` no array, ele renderiza um bloco de JSX (um "card" de benefício).
          <div
            key={index} // `key` é uma propriedade especial no React que ajuda na identificação de elementos em listas, melhorando a performance. `index` é usado aqui como uma key única.
            className="flex items-center gap-4 bg-black text-white p-6 rounded-xl shadow-md"
            // Aplica classes CSS para estilizar cada card de benefício:
            // - flex: Habilita o display flexbox para este contêiner.
            // - items-center: Alinha os itens flexíveis (o ícone e o parágrafo) ao centro no eixo cruzado (verticalmente).
            // - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis.
            // - bg-black: Define o fundo do card como preto.
            // - text-white: Define a cor do texto dentro do card como branco.
            // - p-6: Adiciona um padding (espaçamento interno) de 1.5rem (24px) em todas as direções.
            // - rounded-xl: Arredonda os cantos do card com um raio grande.
            // - shadow-md: Adiciona uma sombra média ao card, dando um efeito de profundidade.
          >
            {/* Ícone de check verde */}
            <CheckCircle className="text-green-500" size={32} />
            {/* Renderiza o ícone CheckCircle.
                - text-green-500: Define a cor do ícone como um tom de verde.
                - size={32}: Define o tamanho do ícone como 32 pixels. */}

            {/* Texto do benefício */}
            <p className="text-sm md:text-base leading-relaxed">
              {" "}
              {/* Parágrafo que contém o texto do benefício atual.
                  - text-sm: Tamanho da fonte pequeno (14px).
                  - md:text-base: Tamanho da fonte padrão em telas médias e maiores (16px).
                  - leading-relaxed: Define o espaçamento entre linhas (line-height) como relaxado, melhorando a legibilidade. */}
              {beneficio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios; // Exporta o componente Beneficios para que ele possa ser importado e usado em outras partes da aplicação.
