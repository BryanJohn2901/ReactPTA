import React from 'react'; // Importa a biblioteca React, essencial para a construção de componentes.

const Popup = ({ onClose }) => { // Define o componente funcional Popup. Ele recebe a prop 'onClose', uma função para fechar o popup.
  return (
    // Container principal do popup: ocupa toda a tela, centraliza o conteúdo e cria o fundo escuro translúcido.
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      {/* Esta div cria o overlay (camada escura e semi-transparente) que cobre toda a tela.
          - fixed: Posiciona o elemento fixamente na viewport, garantindo que ele cubra toda a tela mesmo ao rolar.
          - inset-0: Expande a div para ocupar 100% da largura e altura (equivalente a top:0, right:0, bottom:0, left:0).
          - bg-black bg-opacity-70: Define a cor de fundo como preto com 70% de opacidade.
          - flex items-center justify-center: Usa flexbox para centralizar o conteúdo do popup (o card interno) vertical e horizontalmente.
          - z-50: Define uma alta ordem de empilhamento (z-index) para garantir que o popup fique acima de todos os outros elementos na página. */}

      {/* Card do popup: o contêiner com gradiente e os campos do formulário. */}
      <div className="bg-gradient-to-b from-red-800 to-black w-[90%] max-w-sm rounded-2xl p-6 relative text-white">
        {/* Esta div representa o card principal do popup, contendo o formulário de inscrição.
            - bg-gradient-to-b from-red-800 to-black: Aplica um gradiente de cor, do vermelho escuro (#b91c1c) no topo para preto na base.
            - w-[90%]: Define a largura do card como 90% da largura do contêiner pai.
            - max-w-sm: Limita a largura máxima do card a 24rem (384px) para garantir que não fique muito largo em telas grandes.
            - rounded-2xl: Aplica um grande arredondamento nas bordas do card.
            - p-6: Adiciona um padding interno de 1.5rem (24px) em todas as direções.
            - relative: Define o posicionamento relativo, permitindo que elementos filhos sejam posicionados absolutamente em relação a ele (como o botão de fechar).
            - text-white: Define a cor do texto padrão dentro do card como branco. */}

        {/* Botão de fechar o popup */}
        <button
          onClick={onClose} // Quando clicado, executa a função 'onClose' passada como prop para fechar o popup.
          className="absolute top-4 right-4 text-white text-xl font-bold"
          // Estiliza o botão de fechar:
          // - absolute: Posiciona o botão absolutamente em relação ao seu pai (`.bg-gradient-to-b`).
          // - top-4 right-4: Posiciona o botão a 1rem (16px) do topo e da direita do pai.
          // - text-white: Cor do texto branca.
          // - text-xl: Tamanho da fonte grande (1.25rem / 20px).
          // - font-bold: Peso da fonte negrito.
        >
          &times; {/* Caractere HTML para o símbolo de multiplicação 'x', comumente usado para fechar. */}
        </button>

        {/* Logo dentro do popup */}
        <div className="flex justify-center mb-4">
          {/* Contêiner flexível para centralizar a imagem do logo.
              - flex justify-center: Centraliza o conteúdo horizontalmente.
              - mb-4: Adiciona uma margem inferior de 1rem (16px). */}
          <img src="/logo_bb_popup.svg" alt="Logo Bodybuilding" className="w-40" />
          {/* Imagem do logo específico para o popup.
              - src="/logo_bb_popup.svg": Caminho para a imagem do logo.
              - alt="Logo Bodybuilding": Texto alternativo para acessibilidade.
              - w-40: Define a largura da imagem como 10rem (160px). */}
        </div>

        {/* Texto descritivo */}
        <p className="text-center text-sm font-semibold mb-6">
          {/* Parágrafo com instrução para o usuário.
              - text-center: Centraliza o texto.
              - text-sm: Tamanho da fonte pequeno (0.875rem / 14px).
              - font-semibold: Peso da fonte semi-negrito.
              - mb-6: Adiciona uma margem inferior de 1.5rem (24px). */}
          Preencha os dados para finalizar sua inscrição e aguarde um instante.
        </p>

        {/* Formulário de inscrição */}
        <form className="space-y-4">
          {/* Define um formulário HTML com espaçamento vertical entre os campos.
              - space-y-4: Adiciona um espaçamento vertical de 1rem (16px) entre os elementos filhos do formulário. */}
          <input
            type="text" // Tipo de input para texto (nome completo).
            placeholder="Nome e sobrenome" // Placeholder para o campo.
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white focus:outline-none"
            // Estilização do input:
            // - w-full: Ocupa 100% da largura disponível.
            // - p-3: Padding de 0.75rem (12px).
            // - rounded: Bordas levemente arredondadas.
            // - border border-white: Borda de 1px na cor branca.
            // - bg-transparent: Fundo transparente para o input.
            // - placeholder-white: Define a cor do placeholder como branca.
            // - focus:outline-none: Remove o contorno de foco padrão do navegador.
          />
          <input
            type="email" // Tipo de input para e-mail.
            placeholder="Digite o seu e-mail" // Placeholder para o campo.
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white focus:outline-none"
            // Estilos similares ao campo de nome.
          />
          <input
            type="tel" // Tipo de input para telefone.
            placeholder="+55 (__) _____-____" // Placeholder com formato de telefone brasileiro.
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white focus:outline-none"
            // Estilos similares aos campos anteriores.
          />

          <button
            type="submit" // Define o tipo do botão como 'submit' para enviar o formulário.
            className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl w-full hover:bg-red-100 transition flex justify-center items-center gap-2"
            // Estiliza o botão de envio:
            // - bg-white: Fundo branco.
            // - text-red-600: Texto vermelho.
            // - font-bold: Negrito.
            // - py-3 px-6: Padding.
            // - rounded-xl: Bordas arredondadas grandes.
            // - w-full: Ocupa 100% da largura disponível.
            // - hover:bg-red-100: Altera a cor de fundo para um tom muito claro de vermelho ao passar o mouse.
            // - transition: Adiciona uma transição suave para as mudanças de estilo.
            // - flex justify-center items-center gap-2: Usa flexbox para centralizar o texto "INSCREVA-SE →" e a seta.
          >
            INSCREVA-SE → {/* Texto do botão com uma seta para a direita. */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup; // Exporta o componente Popup para que possa ser importado e utilizado em outras partes da aplicação.
