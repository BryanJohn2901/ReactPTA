import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do popup.
import Popup from './Popup'; // Importa o componente Popup. Certifique-se de que o caminho está correto para o seu projeto.

const Resultados = () => { // Define o componente funcional principal chamado Resultados.
  // Define o estado 'showPopup' e a função 'setShowPopup' para controlar a visibilidade do Popup.
  // Inicialmente, 'showPopup' é 'false', o que significa que o popup não estará visível.
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* O fragmento <>...</> é usado para agrupar múltiplos elementos JSX sem adicionar um nó extra ao DOM. */}
      <section className="bg-black text-white py-16 px-4">
        {/* Define a seção principal do componente 'Resultados'.
            - bg-black: Define a cor de fundo como preta.
            - text-white: Define a cor do texto padrão dentro desta seção como branca.
            - py-16: Adiciona um padding vertical de 4rem (64px).
            - px-4: Adiciona um padding horizontal de 1rem (16px). */}

        {/* Título centralizado da seção */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Contêiner para o título, centralizado e com largura máxima.
              - text-center: Centraliza o texto.
              - max-w-4xl: Limita a largura máxima a 56rem (896px).
              - mx-auto: Centraliza horizontalmente.
              - mb-16: Adiciona uma margem inferior de 4rem (64px). */}
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            {/* Título com tamanhos de fonte responsivos, negrito e espaçamento entre linhas mais apertado. */}
            Aqui a sua evolução é constante e seus{' '}
            <span className="text-red-500">resultados são visíveis</span>, <br />
            {/* Parte do título em vermelho para destaque. */}
            através de um método que já formou mais de 4 mil alunos.
          </h2>
        </div>

        {/* Grid com 2 blocos principais */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contêiner principal para os dois blocos, usando grid.
              - max-w-[1200px]: Limita a largura.
              - mx-auto: Centraliza.
              - grid grid-cols-1 md:grid-cols-2: 1 coluna em telas pequenas, 2 colunas em telas médias e maiores.
              - gap-12: Espaçamento de 3rem (48px) entre os blocos.
              - items-center: Alinha os blocos verticalmente ao centro. */}

          {/* Bloco 1: Sistema expansão da prática */}
          <div className="text-center md:text-center space-y-4">
            {/* Contêiner do bloco.
                - text-center md:text-center: Texto centralizado em todas as telas (redundante mas seguro).
                - space-y-4: Espaçamento vertical de 1rem (16px) entre os elementos. */}
            <h3 className="text-xl font-bold text-red-800">Sistema expansão da prática</h3>
            {/* Título do bloco, com cor vermelha escura, negrito e tamanho de fonte. */}
            <p className="text-sm text-gray-300">
              {/* Parágrafo de descrição. */}
              O melhor sistema de aprendizado e prática desenvolvido pela <br />
              Personal Trainer Academy
            </p>
            <img
              src="/execucao.webp" // Caminho da imagem.
              alt="Sistema Execução" // Texto alternativo para acessibilidade.
              className="mx-auto md:mx-0 mt-4 max-w-full"
              // Imagem: centralizada, com margem superior, e largura máxima responsiva.
              // - mx-auto: Centraliza a imagem.
              // - md:mx-0: Remove a centralização em telas médias para alinhamento (se o md:text-left fosse aplicado ao pai). No contexto de `text-center`, `mx-auto` é mais forte.
            />
          </div>

          {/* Bloco 2: Ciclo de aprendizado constante */}
          <div className="text-center md:text-center space-y-4">
            {/* Contêiner do bloco. Estilos similares ao Bloco 1. */}
            <h3 className="text-xl font-bold text-red-600">Ciclo de aprendizado constante</h3>
            {/* Título do bloco. */}
            <p className="text-sm text-gray-300">
              {/* Parágrafo de descrição. */}
              O método que vai te fazer conquistar <br />
              mais clientes
            </p>
            <img
              src="/conquista.webp" // Caminho da imagem.
              alt="Ciclo Conquista" // Texto alternativo para acessibilidade.
              className="mx-auto md:mx-0 mt-4 max-w-full"
              // Imagem: centralizada, com margem superior, e largura máxima responsiva.
            />
          </div>
        </div>

        {/* Botão centralizado para ativar o popup */}
        <div className="text-center mt-12">
          {/* Contêiner para o botão, centralizado, com margem superior. */}
          <button
            onClick={() => setShowPopup(true)} // Ao clicar, define 'showPopup' como 'true', o que fará o Popup aparecer.
            className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-red-100 transition"
            // Estilização do botão:
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
      </section>

      {/* Exibir Popup condicionalmente */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* O componente Popup só é renderizado (e, portanto, visível) se 'showPopup' for 'true'.
          A prop 'onClose' é passada para o Popup, permitindo que ele se feche ao chamar essa função. */}
    </>
  );
};

export default Resultados; // Exporta o componente Resultados para que ele possa ser importado e usado em outras partes da aplicação.
