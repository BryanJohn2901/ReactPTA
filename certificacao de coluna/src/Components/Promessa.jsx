// src/components/Promessa.jsx
import React from "react"; // Importa a biblioteca React, essencial para a criação de componentes de interface.
import { CheckCircle } from "lucide-react"; // Importa o ícone 'CheckCircle' da biblioteca lucide-react, usado para listar os pontos de dor.

// Componente Promessa com layout de "dor e solução"
const Promessa = () => {
  // Define o componente funcional Promessa.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {" "}
      {/* Define uma seção HTML que serve como o container principal para o conteúdo da promessa.
          - bg-[#fefcf6]: Define uma cor de fundo personalizada muito clara (quase branca).
          - text-black: Define a cor do texto padrão dentro da seção como preto.
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px).
          - text-center: Centraliza o texto de todos os elementos filhos dentro desta seção. */}
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-6">
        {" "}
        {/* Define uma div que serve como container interno para o conteúdo.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels, evitando que ele se espalhe demais em telas grandes.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - space-y-6: Adiciona um espaçamento vertical de 1.5rem (24px) entre os elementos filhos diretos. */}
        {/* Título */}
        <h2 className="text-3xl font-bold">Dor & Promessa</h2>{" "}
        {/* Define o título principal da seção.
            - text-3xl: Define o tamanho da fonte.
            - font-bold: Define o peso da fonte como negrito. */}
        {/* Texto de introdução */}
        <p className="text-lg">
          {" "}
          {/* Primeiro parágrafo de introdução, com tamanho de fonte maior. */}
          Você já evitou exercícios como agachamento, levantamento terra ou
          stiff por medo de agravar a dor lombar do seu aluno?
        </p>
        <p className="text-base">
          {" "}
          {/* Segundo parágrafo de introdução, com tamanho de fonte padrão. */}
          Se você é Personal Trainer e já sentiu:
        </p>
        {/* Cards com pontos de dor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {" "}
          {/* Define uma div que organiza os "cards" de pontos de dor em um layout de grid.
              - grid: Habilita o display CSS Grid.
              - grid-cols-1: Em telas pequenas, haverá 1 coluna.
              - md:grid-cols-3: Em telas médias (md) e maiores, o grid terá 3 colunas de tamanho igual.
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid (tanto horizontal quanto verticalmente).
              - mt-8: Adiciona uma margem superior de 2rem (32px), criando um espaçamento entre os textos introdutórios e os cards. */}
          {/* Item 1 */}
          <div className="text-left bg-black text-white rounded-xl p-6 flex items-start gap-3">
            {" "}
            {/* Define o estilo de um card individual que representa um ponto de dor.
                - text-left: Alinha o texto à esquerda dentro do card (sobrescrevendo o `text-center` da seção pai).
                - bg-black: Define o fundo do card como preto.
                - text-white: Define a cor do texto do card como branco.
                - rounded-xl: Arredonda os cantos do card.
                - p-6: Adiciona um padding interno de 1.5rem (24px).
                - flex items-start gap-3: Usa flexbox para alinhar o ícone e o texto lado a lado, com o ícone no topo e espaçamento entre eles. */}
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />{" "}
            {/* Renderiza o ícone CheckCircle.
                - text-green-600: Define a cor do ícone como um tom de verde.
                - w-6 h-6: Define a largura e altura do ícone.
                - mt-1: Adiciona uma pequena margem superior para alinhar melhor o ícone com o texto. */}
            <p>Medo de agravar hérnias, protusões ou lombalgias;</p>{" "}
            {/* Parágrafo descrevendo o primeiro ponto de dor. */}
          </div>
          {/* Item 2 */}
          <div className="text-left bg-black text-white rounded-xl p-6 flex items-start gap-3">
            {" "}
            {/* Estrutura e estilos repetidos para o segundo card. */}
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>Insegurança sobre alinhamento pélvico e postura correta;</p>
          </div>
          {/* Item 3 */}
          <div className="text-left bg-black text-white rounded-xl p-6 flex items-start gap-3">
            {" "}
            {/* Estrutura e estilos repetidos para o terceiro card. */}
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <p>
              Frustração ao ver seus alunos sem <br /> resultado porque o treino
              precisa <br /> ser leve e genérico.
            </p>{" "}
            {/* Note o uso de `<br />` para quebrar as linhas do texto. */}
          </div>
        </div>
        {/* Texto final */}
        <p className="text-base mt-6">Chegou a hora de resolver isso!</p>{" "}
        {/* Parágrafo final que funciona como uma ponte para a solução ou chamada para ação.
            - mt-6: Adiciona uma margem superior para espaçamento. */}
      </div>
    </section>
  );
};

export default Promessa; // Exporta o componente Promessa para que ele possa ser importado e utilizado em outras partes da aplicação.