import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado dos modais/popups.
import Popup from './Popup'; // Importa o componente Popup. Certifique-se de que o caminho está correto ('./Popup' ou '../components/Popup' dependendo da estrutura de pastas).

const HeroSection = () => {
  // Define o estado 'showModal' para controlar a visibilidade do modal de vídeo.
  // Inicialmente, 'showModal' é 'false' (modal de vídeo invisível por padrão).
  const [showModal, setShowModal] = useState(false);
  // Define o estado 'showPopup' para controlar a visibilidade do popup de inscrição.
  // Inicialmente, 'showPopup' é 'false' (popup de inscrição invisível por padrão).
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* O fragmento <>...</> é usado para agrupar múltiplos elementos JSX sem adicionar um nó extra ao DOM. */}
      <section
        className="bg-cover bg-center bg-no-repeat" // Classes Tailwind para estilização do background: cobrir, centralizar, não repetir.
        style={{
          backgroundImage: 'url(/bg_hero.jpg)', // Define a imagem de fundo da seção hero.
          height: '90vh', // Define a altura da seção hero para 90% da altura da viewport.
        }}
      >
        {/* Overlay com gradiente para melhor legibilidade do texto sobre a imagem de fundo. */}
        <div className="w-full h-full bg-gradient-to-r from-black/90 to-red-900/80 py-16">
          {/* - w-full h-full: Ocupa 100% da largura e altura do seu contêiner pai.
              - bg-gradient-to-r from-black/90 to-red-900/80: Aplica um gradiente de preto (90% opacidade) para um vermelho escuro (80% opacidade), da esquerda para a direita.
              - py-16: Adiciona um padding vertical de 4rem (64px). */}

          {/* Container centralizado com largura máxima de 1200px para o conteúdo principal do hero. */}
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative gap-[50px] h-full">
            {/* - max-w-[1200px]: Limita a largura máxima do conteúdo.
                - mx-auto: Centraliza horizontalmente.
                - flex: Habilita o display flexbox.
                - flex-col md:flex-row: Em telas pequenas, os itens ficam em coluna; em telas médias e maiores, em linha.
                - items-center: Alinha os itens verticalmente ao centro.
                - justify-between: Distribui o espaço entre os itens.
                - px-6: Padding horizontal de 1.5rem (24px).
                - relative: Permite posicionamento absoluto de elementos filhos.
                - gap-[50px]: Espaçamento de 50px entre as colunas.
                - h-full: Ocupa 100% da altura do pai. */}

            {/* Coluna Esquerda: Conteúdo textual e botão de inscrição. */}
            <div className="flex-1 text-white space-y-6">
              {/* - flex-1: Permite que a coluna se expanda e ocupe o espaço disponível.
                  - text-white: Define a cor do texto como branco.
                  - space-y-6: Adiciona espaçamento vertical de 1.5rem (24px) entre os elementos filhos. */}
              <img src="/logo_bb.webp" alt="Logo Bodybuilding" className="w-48" />
              {/* Logo do Bodybuilding.
                  - w-48: Largura de 12rem (192px). */}

              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {/* Título principal do Hero.
                    - text-3xl md:text-5xl: Tamanhos de fonte responsivos.
                    - font-bold: Peso da fonte negrito.
                    - text-white: Cor do texto branca. */}
                BODYBUILDING E ESTÉTICA CORPORAL
              </h1>

              <p className="text-lg text-gray-300">
                {/* Parágrafo de descrição.
                    - text-lg: Tamanho da fonte grande.
                    - text-gray-300: Cor do texto cinza claro. */}
                Descubra e aplique protocolos avançados de treinamento e{' '}
                <span className="text-red-500 font-semibold">
                  {/* Destaque em vermelho e semi-negrito. */}
                  gere grandes resultados estéticos no shape
                </span>{' '}
                de seus atletas ou alunos de musculação.
              </p>

              <button
                onClick={() => setShowPopup(true)} // Ao clicar, define 'showPopup' como 'true' para exibir o popup de inscrição.
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-red-100 transition"
                // Estilização do botão de inscrição.
                // - bg-white: Fundo branco.
                // - text-red-600: Texto vermelho.
                // - font-bold: Negrito.
                // - py-3 px-6: Padding.
                // - rounded-xl: Bordas arredondadas.
                // - hover:bg-red-100: Efeito hover com fundo vermelho muito claro.
                // - transition: Transição suave para efeitos de hover.
              >
                Matricule-se agora
              </button>
            </div>

            {/* Coluna Direita: Capa do vídeo com botão de play. */}
            <div className="flex-1 relative">
              {/* - flex-1: Permite que a coluna se expanda.
                  - relative: Permite posicionamento absoluto de elementos filhos. */}
              <img
                src="/capa_video_hero.webp" // Imagem de capa do vídeo.
                alt="Capa do Vídeo" // Texto alternativo.
                className="rounded-xl shadow-lg" // Bordas arredondadas e sombra grande.
              />

              {/* Botão Play sobre a capa do vídeo. */}
              <button
                onClick={() => setShowModal(true)} // Ao clicar, define 'showModal' como 'true' para exibir o modal de vídeo.
                className="absolute inset-0 flex items-center justify-center"
                // - absolute inset-0: Posiciona o botão para cobrir toda a imagem de capa.
                // - flex items-center justify-center: Centraliza o conteúdo (texto e ícone) do botão.
              >
                <div className="bg-red-700 bg-opacity-80 text-white px-6 py-4 rounded-lg text-center">
                  {/* Estilização do botão de play.
                      - bg-red-700 bg-opacity-80: Fundo vermelho com 80% de opacidade.
                      - text-white: Texto branco.
                      - px-6 py-4: Padding.
                      - rounded-lg: Bordas arredondadas.
                      - text-center: Centraliza o texto. */}
                  <p className="font-semibold">Clique aqui</p>
                  <svg
                    className="mx-auto w-8 h-8 my-2" // Ícone de play SVG.
                    fill="currentColor" // Preenchimento com a cor do texto.
                    viewBox="0 0 24 24" // Caixa de visualização do SVG.
                  >
                    <path d="M3 22v-20l18 10-18 10z" /> {/* Caminho do ícone de play. */}
                  </svg>
                  <p>para ativar o som</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modal com vídeo (renderizado condicionalmente) */}
        {showModal && ( // O modal só é renderizado se 'showModal' for 'true'.
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            {/* Overlay fixo para o modal.
                - fixed inset-0: Ocupa toda a viewport.
                - bg-black bg-opacity-80: Fundo preto com 80% de opacidade.
                - flex items-center justify-center: Centraliza o conteúdo do modal.
                - z-50: Z-index alto para ficar sobre todos os outros elementos. */}
            <div className="bg-black w-[90%] max-w-6xl h-[70vh] rounded-xl overflow-hidden relative">
              {/* Contêiner do vídeo dentro do modal.
                  - bg-black: Fundo preto.
                  - w-[90%] max-w-6xl: Largura responsiva (90% até 6xl - 72rem/1152px).
                  - h-[70vh]: Altura de 70% da altura da viewport.
                  - rounded-xl: Bordas arredondadas.
                  - overflow-hidden: Esconde qualquer conteúdo que exceda as bordas.
                  - relative: Permite posicionamento absoluto de elementos filhos (como o botão de fechar). */}
              <button
                onClick={() => setShowModal(false)} // Ao clicar, define 'showModal' como 'false' para fechar o modal.
                className="absolute top-2 right-2 text-white text-2xl"
                // Botão de fechar o modal.
                // - absolute top-2 right-2: Posicionado no canto superior direito.
                // - text-white text-2xl: Cor do texto branca, tamanho grande.
              >
                &times; {/* Símbolo 'x' para fechar. */}
              </button>

              <iframe
                className="w-full h-full" // Ocupa 100% da largura e altura do seu contêiner.
                src="https://www.youtube.com/embed/gsNaR6FRuO0?autoplay=1" // URL do vídeo do YouTube. 'autoplay=1' para iniciar automaticamente.
                title="Video de Bodybuilding" // Título para o iframe.
                frameBorder="0" // Remove a borda padrão do iframe.
                allow="autoplay; encrypted-media" // Permite autoplay e mídia criptografada.
                allowFullScreen // Permite a exibição em tela cheia.
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Popup de inscrição (renderizado condicionalmente) */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* O componente Popup é renderizado se 'showPopup' for 'true'.
          A prop 'onClose' é passada para o Popup, permitindo que ele se feche. */}
    </>
  );
};

export default HeroSection; // Exporta o componente HeroSection.
