import React from 'react' // Importa a biblioteca React, que é a base para a construção de componentes.

const Popup = ({ onClose }) => {
  return (
    // Container centralizado com fundo escuro translúcido
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      {/* Esta div cria o overlay (camada escura e translúcida) que cobre toda a tela.
          - fixed: Define o posicionamento do elemento como fixo em relação à viewport.
          - inset-0: Expande a div para ocupar todo o espaço (top, right, bottom, left são 0).
          - flex items-center justify-center: Usa flexbox para centralizar o conteúdo (o card do popup) tanto vertical quanto horizontalmente.
          - bg-black bg-opacity-60: Define a cor de fundo como preta com 60% de opacidade, criando o efeito translúcido.
          - z-50: Define uma alta ordem de empilhamento (z-index) para garantir que o popup fique acima de outros elementos na página. */}

      {/* Card do popup */}
      <div className="bg-[#FAF7F2] rounded-2xl shadow-xl p-8 w-full max-w-sm">
        {/* Esta div representa o card principal do popup, que contém o formulário.
            - bg-[#FAF7F2]: Define uma cor de fundo personalizada (um tom de creme/off-white).
            - rounded-2xl: Aplica um grande arredondamento nas bordas do card.
            - shadow-xl: Adiciona uma sombra pronunciada ao card.
            - p-8: Adiciona um padding (espaçamento interno) de 2rem (32px) em todas as direções.
            - w-full: Faz o card ocupar 100% da largura disponível do seu container pai.
            - max-w-sm: Limita a largura máxima do card a 24rem (384px), tornando-o responsivo. */}

        {/* Ícone de fechar (colocado no canto superior direito) */}
        <div className="flex justify-end">
          {/* Esta div contém o botão de fechar e o alinha à direita.
              - flex justify-end: Usa flexbox para empurrar o botão para o final do eixo principal (direita). */}
          <button onClick={onClose} className="text-[#16A34A] text-lg font-bold">⨉</button>
          {/* Botão para fechar o popup.
              - onClick={onClose}: Quando clicado, executa a função `onClose` passada como prop, que normalmente altera o estado do componente pai para ocultar o popup.
              - text-[#16A34A]: Define a cor do texto do botão (um tom de verde).
              - text-lg: Define o tamanho da fonte.
              - font-bold: Define o peso da fonte como negrito.
              - ⨉: O caractere que representa o "X" de fechar. */}
        </div>

        {/* Título centralizado */}
        <h2 className="text-[#16A34A] font-semibold text-lg mb-6 text-center">
          Preencha seus dados e<br />aguarde um instante.
        </h2>
        {/* Título do formulário dentro do popup.
            - text-[#16A34A]: Cor do texto verde.
            - font-semibold: Peso da fonte semi-negrito.
            - text-lg: Tamanho da fonte.
            - mb-6: Margem inferior.
            - text-center: Centraliza o texto.
            - <br />: Quebra de linha para exibir o texto em duas linhas. */}

        {/* Container com alinhamento à esquerda */}
        <div className="text-left">
          {/* Esta div garante que os campos do formulário fiquem alinhados à esquerda. */}

          {/* Campo: Nome */}
          <div className="mb-4">
            {/* Div para agrupar o label e o input do nome.
                - mb-4: Margem inferior para espaçamento. */}
            <label className="text-sm text-gray-700 block mb-1">Nome:</label>
            {/* Rótulo do campo de nome.
                - text-sm: Tamanho da fonte pequeno.
                - text-gray-700: Cor do texto cinza escuro.
                - block: Faz o label se comportar como um bloco (ocupa a própria linha).
                - mb-1: Margem inferior pequena. */}
            <input
              type="text" // Tipo de input para texto livre.
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              // Estiliza o campo de input:
              // - w-full: Largura total.
              // - border-0: Remove todas as bordas.
              // - border-b: Adiciona uma borda apenas na parte inferior.
              // - border-[#16A34A]: Cor da borda inferior (verde).
              // - bg-transparent: Fundo transparente.
              // - focus:outline-none: Remove o contorno padrão de foco do navegador.
              // - py-1: Padding vertical.
              // - placeholder:text-gray-400: Cor do texto do placeholder.
              // - text-[#333]: Cor do texto digitado (cinza escuro).
              placeholder="" // Placeholder do input (vazio neste caso).
            />
          </div>

          {/* Campo: E-mail */}
          <div className="mb-4">
            {/* Div para agrupar label e input de e-mail. */}
            <label className="text-sm text-gray-700 block mb-1">Digite seu e-mail:</label>
            <input
              type="email" // Tipo de input otimizado para e-mails (pode ativar teclados específicos em dispositivos móveis e validação básica).
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              placeholder=""
            />
          </div>

          {/* Campo: Telefone */}
          <div className="mb-6">
            {/* Div para agrupar input de telefone. (Não há label explícito aqui, mas o placeholder serve como guia). */}
            <input
              type="tel" // Tipo de input otimizado para números de telefone.
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              placeholder="+55 (__) _____-____" // Placeholder com formato de telefone brasileiro.
            />
          </div>
        </div>

        {/* Botão de envio */}
        <button className="w-full bg-[#16A34A] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
          Continuar <span>➜</span>
        </button>
      </div>
    </div>
  )
}

export default Popup // Exporta o componente Popup para que possa ser importado e utilizado em outros arquivos da aplicação.