import React from 'react'; // Importa a biblioteca React, essencial para a criação de componentes.
import { Rocket, LineChart, ScrollText, BookOpenText } from 'lucide-react'; // Importa ícones específicos da biblioteca lucide-react.

const Cards = () => { // Define o componente funcional principal chamado Cards.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <section className="bg-gray-100 text-white py-16 px-4">
      {/* Define uma seção HTML que serve como o contêiner principal para os cards.
          - bg-gray-100: Define a cor de fundo da seção como um cinza muito claro.
          - text-white: Define a cor do texto padrão dentro desta seção como branco (será sobrescrito em alguns lugares).
          - py-16: Adiciona um padding vertical de 4rem (64px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}

      {/* Título da seção */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-12">
        {/* Título principal da seção.
            - text-center: Centraliza o texto.
            - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em médias e grandes).
            - font-bold: Define o peso da fonte como negrito.
            - text-black: Define a cor do texto como preto.
            - mb-12: Adiciona uma margem inferior de 3rem (48px) para separar o título dos cards. */}
        Uma Pós-graduação feita para <span className="text-red-600">profissionais...</span>
        {/* - text-red-600: Define a cor de uma parte do texto como vermelho para destaque. */}
      </h2>

      {/* Container de Cards */}
      <div className="max-w-[1200px] mx-auto bg-black rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Define uma div que age como um contêiner para os cards.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza o contêiner horizontalmente.
            - bg-black: Fundo preto para o contêiner dos cards.
            - rounded-xl: Bordas arredondadas grandes.
            - p-6 md:p-10: Padding interno (6 em telas menores, 10 em telas médias e maiores).
            - grid: Habilita o display CSS Grid.
            - grid-cols-1: Em telas pequenas, 1 coluna.
            - md:grid-cols-2: Em telas médias, 2 colunas.
            - lg:grid-cols-4: Em telas grandes (lg), 4 colunas.
            - gap-6: Espaçamento de 1.5rem (24px) entre os itens do grid. */}
        
        {/* Card 1 */}
        <div className="space-y-4">
          {/* Contêiner para o conteúdo do card.
              - space-y-4: Adiciona um espaçamento vertical de 1rem (16px) entre os elementos filhos (ícone e parágrafo). */}
          <Rocket className="text-red-500 w-6 h-6" />
          {/* Ícone 'Rocket' da lucide-react.
              - text-red-500: Cor do ícone vermelha.
              - w-6 h-6: Tamanho do ícone (1.5rem / 24px). */}
          <p className="text-sm leading-relaxed text-white">
            {/* Parágrafo de descrição do card.
                - text-sm: Tamanho da fonte pequeno.
                - leading-relaxed: Linha altura relaxada para melhor legibilidade.
                - text-white: Cor do texto branca. */}
            Que querem aprender com os maiores treinadores e professores do Brasil a se destacar como um especialista em bodybuilding, mesmo que você atenda apenas alunos e não atletas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="space-y-4">
          {/* Contêiner para o conteúdo do card. Estilos similares ao Card 1. */}
          <LineChart className="text-red-500 w-6 h-6" />
          {/* Ícone 'LineChart' da lucide-react. */}
          <p className="text-sm leading-relaxed text-white">
            Para profissionais que buscam resultados estéticos rápidos e impressionantes para seus alunos: Profissionais que desejam dominar técnicas capazes de transformar o físico de seus alunos em um prazo curto, utilizando estratégias eficazes comprovadas no mundo do bodybuilding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="space-y-4">
          {/* Contêiner para o conteúdo do card. Estilos similares ao Card 1. */}
          <ScrollText className="text-red-500 w-6 h-6" />
          {/* Ícone 'ScrollText' da lucide-react. */}
          <p className="text-sm leading-relaxed text-white">
            Para profissionais que querem aplicar estratégias de treinamento de elite, mesmo em alunos não competitivos e que pretende destravar o seu potencial e ganhar mais de 15 mil reais com o domínio de conhecimentos práticos e inovadores, se tornando autoridade como Personal Trainer.
          </p>
        </div>

        {/* Card 4 */}
        <div className="space-y-4">
          {/* Contêiner para o conteúdo do card. Estilos similares ao Card 1. */}
          <BookOpenText className="text-red-500 w-6 h-6" />
          {/* Ícone 'BookOpenText' da lucide-react. */}
          <p className="text-sm leading-relaxed text-white">
            Profissionais interessados em aprender e aplicar métodos de treinamento utilizados por atletas de elite do bodybuilding para potencializar a estética e a performance física de alunos que não competem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards; // Exporta o componente Cards para que ele possa ser importado e usado em outras partes da aplicação.
