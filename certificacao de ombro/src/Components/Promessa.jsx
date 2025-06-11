// src/components/Promessa.jsx
import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.
import { CheckCircle } from "lucide-react"; // Importa o ícone 'CheckCircle' da biblioteca 'lucide-react', usado para indicar pontos chave nos cards.

// Componente Promessa com layout de "dor e solução"
const Promessa = () => { // Define o componente funcional principal chamado Promessa.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal para o conteúdo da promessa.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara (quase branca) para a seção.
          - text-black: Define a cor do texto padrão dentro desta seção como preto.
          - py-16: Adiciona um padding vertical (superior e inferior) de 4rem (64px).
          - px-4: Adiciona um padding horizontal (esquerda e direita) de 1rem (16px).
          - text-center: Centraliza o texto de todos os elementos filhos diretos dentro desta seção. */}

      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {" "}
        {/* Define uma div que age como um contêiner interno para o conteúdo, limitando sua largura e centralizando-o.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels, evitando que ele se espalhe demais em telas grandes.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos (título, parágrafos e o grid de cards). */}

        {/* Título da seção */}
        <h2 className="text-3xl font-bold">Dor & Promessa</h2>{" "}
        {/* Título principal da seção, apresentando o tema "Dor & Promessa".
            - text-3xl: Define o tamanho da fonte (1.875rem / 30px).
            - font-bold: Define o peso da fonte como negrito. */}

        {/* Texto de introdução */}
        <p className="text-lg">
          {" "}
          {/* Primeiro parágrafo de introdução, com tamanho de fonte grande (1.125rem / 18px). */}
          Você já evitou exercícios como desenvolvimento, remada pesada ou supino
          por medo de causar dor no ombro do seu aluno?
        </p>
        <p className="text-base">
          {" "}
          {/* Segundo parágrafo de introdução, com tamanho de fonte base (1rem / 16px). */}
          Se você é Personal Trainer e já sentiu:
        </p>

        {/* Cards com pontos de dor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {" "}
          {/* Define uma div que organiza os "cards" de pontos de dor em um layout de grid.
              - grid: Habilita o display CSS Grid.
              - grid-cols-1: Em telas pequenas (padrão), o grid terá 1 coluna.
              - md:grid-cols-3: Em telas médias (md) e maiores, o grid terá 3 colunas de tamanho igual.
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente).
              - mt-8: Adiciona uma margem superior de 2rem (32px), criando um espaçamento entre os textos introdutórios e os cards. */}

          {/* Item 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            {" "}
            {/* Define o estilo de um card individual que representa um ponto de dor.
                - bg-black: Fundo preto.
                - text-white: Texto branco.
                - rounded-xl: Bordas arredondadas grandes.
                - p-6: Padding interno de 1.5rem (24px).
                - flex: Habilita o display flexbox.
                - items-start: Alinha os itens flexíveis ao início do eixo cruzado (topo).
                - gap-3: Adiciona um espaçamento de 0.75rem (12px) entre os itens flexíveis (ícone e parágrafo). */}
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />{" "}
            {/* Renderiza o ícone CheckCircle.
                - text-green-600: Define a cor do ícone como um tom de verde.
                - w-6 h-6: Define a largura e altura do ícone como 1.5rem (24px).
                - mt-1: Adiciona uma pequena margem superior para alinhamento. */}
            <p>
              {" "}
              {/* Parágrafo descrevendo o primeiro ponto de dor. */}
              Medo ao aplicar supino, remadas <br /> ou desenvolvimento;
            </p>
          </div>

          {/* Item 2 (estrutura e estilos similares ao Item 1) */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Insegurança sobre execução <br /> correta e postura;
            </p>
          </div>

          {/* Item 3 (estrutura e estilos similares ao Item 1) */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-3">
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Frustração ao ver seus alunos sem <br /> resultado porque o treino precisa <br /> ser leve e genérico.
            </p>
          </div>
        </div>

        {/* Texto final */}
        <p className="text-base mt-6">Chegou a hora de resolver isso!</p>{" "}
        {/* Parágrafo final que funciona como uma ponte para a solução ou chamada para ação.
            - text-base: Tamanho da fonte base.
            - mt-6: Adiciona uma margem superior de 1.5rem (24px). */}
      </div>
    </section>
  );
};

export default Promessa; // Exporta o componente Promessa para que ele possa ser importado e utilizado em outras partes da aplicação.
