// src/components/Promessa.jsx
import React from "react"; // Importa a biblioteca React, que é fundamental para a construção de componentes de interface.
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

        {/* Título */}
        <h2 className="text-3xl font-bold">A certificação que vai transformar sua abordagem</h2>{" "}
        {/* Define o título principal da seção.
            - text-3xl: Define o tamanho da fonte (1.875rem / 30px).
            - font-bold: Define o peso da fonte como negrito. */}

        {/* Texto de introdução */}
        <p className="text-lg">
          {" "}
          {/* Primeiro parágrafo de introdução, com tamanho de fonte grande (1.125rem / 18px). */}
          No tratamento do joelho e elevar sua autoridade profissional!
        </p>
        <p className="text-base">
          {" "}
          {/* Segundo parágrafo de introdução, com tamanho de fonte base (1rem / 16px). */}
          Muitos profissionais enfrentam dificuldades para se destacar na área e acabam perdendo oportunidades porque:
        </p>

        {/* Cards com pontos de dor - 4 itens em linha */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {" "}
          {/* Define uma div que organiza os "cards" de pontos de dor em um layout de grid.
              - grid: Habilita o display CSS Grid.
              - grid-cols-1: Em telas pequenas (padrão), o grid terá 1 coluna.
              - md:grid-cols-4: Em telas médias (md) e maiores, o grid terá 4 colunas de tamanho igual.
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente).
              - mt-8: Adiciona uma margem superior de 2rem (32px), criando um espaçamento entre os textos introdutórios e os cards. */}

          {/* Item 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            {" "}
            {/* Define o estilo de um card individual que representa um ponto de dor.
                - bg-black: Fundo preto.
                - text-white: Texto branco.
                - rounded-xl: Bordas arredondadas grandes.
                - p-6: Padding interno de 1.5rem (24px).
                - flex: Habilita o display flexbox.
                - flex-col: Organiza os itens flexíveis em coluna (verticalmente).
                - items-center: Alinha os itens ao centro no eixo cruzado (horizontalmente, pois o flex-direction é coluna).
                - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis (ícone e parágrafo). */}
            <CheckCircle className="text-[#D00727] w-8 h-8" />{" "}
            {/* Renderiza o ícone CheckCircle.
                - text-[#D00727]: Define a cor do ícone como um tom de vermelho específico.
                - w-8 h-8: Define a largura e altura do ícone como 2rem (32px). */}
            <p className="text-sm">
              {" "}
              {/* Parágrafo descrevendo o primeiro ponto de dor, com tamanho de fonte pequeno (0.875rem / 14px). */}
              Não possuem uma certificação especializada que comprove sua autoridade
            </p>
          </div>

          {/* Item 2 (estrutura e estilos similares ao Item 1) */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Se sentem inseguros ao tratar casos complexos de dor no joelho
            </p>
          </div>

          {/* Item 3 (estrutura e estilos similares ao Item 1) */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Encontram informações desencontradas e não sabem qual abordagem seguir
            </p>
          </div>

          {/* Item 4 (estrutura e estilos similares ao Item 1) */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center gap-4">
            <CheckCircle className="text-[#D00727] w-8 h-8" />
            <p className="text-sm">
              Não conseguem atrair mais pacientes e aumentar sua renda com atendimentos
            </p>
          </div>
        </div>

        {/* Texto final */}
        <p className="text-base mt-6">Chegou a hora de resolver tudo isso!</p>{" "}
        {/* Parágrafo final que funciona como uma ponte para a solução ou chamada para ação.
            - text-base: Tamanho da fonte base.
            - mt-6: Adiciona uma margem superior de 1.5rem (24px). */}
      </div>
    </section>
  );
};

export default Promessa; // Exporta o componente Promessa para que ele possa ser importado e utilizado em outras partes da aplicação.
