import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do componente.
import { Clock, Video, FileText, ClipboardList, Percent } from 'lucide-react'; // Importa ícones específicos da biblioteca lucide-react.
import Popup from './Popup'; // Importa o componente Popup. Certifique-se de que o caminho './Popup' está correto para o seu projeto.

const Abordagem = () => {
  // Define o estado 'showPopup' e a função 'setShowPopup' para controlar a visibilidade do Popup.
  // Inicialmente, 'showPopup' é 'false', o que significa que o popup não estará visível.
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* O fragmento <>...</> é usado para agrupar múltiplos elementos JSX sem adicionar um nó extra ao DOM. */}
      <section className="bg-black text-white py-16 px-4">
        {/* Define a seção principal do componente 'Abordagem'.
            - bg-black: Define a cor de fundo como preta.
            - text-white: Define a cor do texto padrão dentro desta seção como branca.
            - py-16: Adiciona um padding vertical de 4rem (64px).
            - px-4: Adiciona um padding horizontal de 1rem (16px). */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contêiner principal com largura máxima e layout de grid.
              - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
              - mx-auto: Centraliza o contêiner horizontalmente.
              - grid: Habilita o display CSS Grid.
              - grid-cols-1: Em telas pequenas, o grid terá 1 coluna.
              - md:grid-cols-3: Em telas médias (md) e maiores, o grid terá 3 colunas de tamanho igual.
              - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os itens do grid. */}

          {/* Título principal da seção, ocupando todas as colunas em telas médias e maiores. */}
          <div className="md:col-span-3 text-center">
            {/* - md:col-span-3: Faz esta div ocupar 3 colunas em telas médias e maiores.
                - text-center: Centraliza o texto. */}
            <h2 className="text-2xl md:text-3xl font-bold">
              {/* Título com tamanhos de fonte responsivos e negrito. */}
              <span className="text-red-500">Abordagem prática</span> e exemplos do seu dia a dia com:
              {/* - text-red-500: Define a cor de uma parte do texto como vermelho. */}
            </h2>
          </div>

          {/* Card 1: Horário Flexível */}
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-4">
            {/* - bg-zinc-900: Cor de fundo do card (cinza escuro).
                - p-6: Padding de 1.5rem (24px).
                - rounded-xl: Bordas arredondadas.
                - flex flex-col gap-4: Layout flexbox em coluna com espaçamento de 1rem (16px) entre os itens. */}
            <Clock className="text-red-500 w-6 h-6" />
            {/* Ícone 'Clock' da lucide-react.
                - text-red-500: Cor do ícone vermelha.
                - w-6 h-6: Tamanho do ícone (1.5rem / 24px). */}
            <h3 className="text-xl font-semibold">Horário Flexível</h3>
            {/* Título do card. */}
            <p className="text-sm text-gray-300">
              {/* Texto de descrição. */}
              As aulas serão ministradas um final de semana por mês, <span className="text-red-500">no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.</span>
            </p>
          </div>

          {/* Card 2: Aula Ao Vivo (estrutura e comentários similares ao Card 1) */}
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-4">
            <Video className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-semibold">Aula Ao Vivo</h3>
            <p className="text-sm text-gray-300">
              Você poderá assistir a aula ao vivo ou a <span className="text-red-500">gravação que ficará disponível para assistir quando quiser.</span>
            </p>
          </div>

          {/* Card 3: Artigos Atualizados (estrutura e comentários similares ao Card 1) */}
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-4">
            <FileText className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-semibold">Artigos Atualizados</h3>
            <p className="text-sm text-gray-300">
              Artigos sobre o assunto, recentes, selecionados e <span className="text-red-500">disponíveis para você.</span>
            </p>
          </div>

          {/* Card 4: Avaliações Dinâmicas (estrutura e comentários similares ao Card 1) */}
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-4">
            <ClipboardList className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-semibold">Avaliações Dinâmicas</h3>
            <p className="text-sm text-gray-300">
              Desenvolva suas habilidades e aplique seus conhecimentos <span className="text-red-500">através das nossas avaliações ativas.</span>
            </p>
          </div>

          {/* Card 5: Método EspecialistaPro (ocupa 2 colunas em telas médias e maiores) */}
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-4 md:col-span-2">
            {/* - md:col-span-2: Faz este card ocupar 2 colunas em telas médias e maiores, criando um layout diferenciado. */}
            <Percent className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-semibold">Método EspecialistaPro</h3>
            <p className="text-sm text-gray-300">
              O método <span className="text-red-500">Especialista PRO</span>, parte essencial da Pós-graduação em Bodybuilding e Estética Corporal: prescrição e treinamento para atletas e <span className="text-red-500">praticantes de musculação</span> foi criado para que você aplique o Bodybuilding de forma prática, elevando sua credibilidade e aumentando seu faturamento.
            </p>
          </div>

          {/* Botão para ativar o popup */}
          <div className="md:col-span-3 text-center mt-8">
            {/* - md:col-span-3: Faz esta div ocupar todas as colunas para centralizar o botão.
                - text-center: Centraliza o botão.
                - mt-8: Margem superior de 2rem (32px). */}
            <button
              // O evento 'onClick' define o estado 'showPopup' como 'true' ao clicar no botão.
              // Isso fará com que o componente 'Popup' seja renderizado.
              onClick={() => setShowPopup(true)}
              className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-red-100 transition"
              // Estilização do botão com Tailwind CSS.
              // - bg-white: Fundo branco.
              // - text-red-600: Cor do texto vermelha.
              // - font-bold: Texto em negrito.
              // - py-3 px-6: Padding.
              // - rounded-xl: Bordas arredondadas.
              // - hover:bg-red-100: Altera a cor de fundo para um tom de vermelho muito claro ao passar o mouse.
              // - transition: Adiciona uma transição suave para as mudanças de estilo.
            >
              Matricule-se agora
            </button>
          </div>
        </div>
      </section>

      {/* Popup condicional:
          O componente Popup só é renderizado (e, portanto, visível) se 'showPopup' for 'true'.
          A prop 'onClose' é passada para o Popup, permitindo que ele se feche ao clicar no botão 'X' interno,
          alterando 'showPopup' de volta para 'false'. */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Abordagem; // Exporta o componente Abordagem para que ele possa ser importado e usado em outras partes da aplicação.
