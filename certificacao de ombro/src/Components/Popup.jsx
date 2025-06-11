import React from 'react'; // Importa a biblioteca React, que é fundamental para a criação de componentes de interface.

const Popup = ({ onClose }) => { // Define o componente funcional Popup. Ele recebe uma prop 'onClose', que é uma função para fechar o popup.
  return (
    // Container principal do popup: ocupa toda a tela, centraliza o conteúdo e cria o fundo escuro translúcido.
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      {/* Esta div cria o overlay (camada escura e translúcida) que cobre toda a tela.
          - fixed: Define o posicionamento do elemento como fixo em relação à viewport, garantindo que ele permaneça na tela mesmo ao rolar.
          - inset-0: Expande a div para ocupar todo o espaço (equivalente a top:0, right:0, bottom:0, left:0).
          - flex items-center justify-center: Usa flexbox para centralizar o conteúdo (o card do popup) tanto vertical quanto horizontalmente na tela.
          - bg-black bg-opacity-60: Define a cor de fundo como preta com 60% de opacidade, criando o efeito de fundo translúcido escurecido.
          - z-50: Define uma alta ordem de empilhamento (z-index) para garantir que o popup fique acima de outros elementos na página. */}

      {/* Card do popup: o contêiner branco (ou creme) com os campos do formulário. */}
      <div className="bg-[#FAF7F2] rounded-2xl shadow-xl p-8 w-full max-w-sm">
        {/* Esta div representa o card principal do popup, que contém o formulário e suas informações.
            - bg-[#FAF7F2]: Define uma cor de fundo personalizada (um tom de creme/off-white) para o card.
            - rounded-2xl: Aplica um grande arredondamento nas bordas do card, dando um visual suave.
            - shadow-xl: Adiciona uma sombra pronunciada ao card, dando um efeito de profundidade.
            - p-8: Adiciona um padding (espaçamento interno) de 2rem (32px) em todas as direções dentro do card.
            - w-full: Faz o card ocupar 100% da largura disponível do seu container pai (dentro dos limites do max-w-sm).
            - max-w-sm: Limita a largura máxima do card a 24rem (384px), tornando-o responsivo e evitando que fique muito largo em telas maiores. */}

        {/* Container para o botão de fechar, alinhado à direita. */}
        <div className="flex justify-end">
          {/* Esta div contém o botão de fechar e o alinha à direita dentro do card.
              - flex justify-end: Usa flexbox para empurrar o botão para o final do eixo principal (direita). */}
          {/* Botão de fechar o popup, com o caractere 'X' estilizado em verde (#16A34A). */}
          <button onClick={onClose} className="text-[#16A34A] text-lg font-bold">⨉</button>
          {/* Botão para fechar o popup.
              - onClick={onClose}: Quando clicado, executa a função `onClose` que foi passada como prop. Essa função, geralmente definida no componente pai, altera o estado para ocultar o popup.
              - text-[#16A34A]: Define a cor do texto do botão (o 'X') como um tom de verde específico.
              - text-lg: Define o tamanho da fonte para grande (1.125rem / 18px).
              - font-bold: Define o peso da fonte como negrito.
              - ⨉: O caractere Unicode que representa o símbolo de "multiplicação" ou "fechar". */}
        </div>

        {/* Título do popup, centralizado e em verde (#16A34A). */}
        <h2 className="text-[#16A34A] font-semibold text-lg mb-6 text-center">
          {/* Título do formulário dentro do popup.
              - text-[#16A34A]: Define a cor do texto do título como o mesmo tom de verde.
              - font-semibold: Define o peso da fonte como semi-negrito.
              - text-lg: Define o tamanho da fonte para grande.
              - mb-6: Adiciona uma margem inferior de 1.5rem (24px) para separar o título dos campos do formulário.
              - text-center: Centraliza o texto do título.
              - <br />: Tag de quebra de linha HTML para exibir o texto em duas linhas, conforme o design da imagem. */}
          Preencha seus dados e<br />aguarde um instante.
        </h2>

        {/* Container dos campos do formulário, alinhados à esquerda. */}
        <div className="text-left">
          {/* Esta div garante que os campos do formulário fiquem alinhados à esquerda, dentro do card. */}

          {/* Campo: Nome */}
          <div className="mb-4">
            {/* Div para agrupar o label e o input do campo de nome.
                - mb-4: Adiciona uma margem inferior de 1rem (16px) para espaçamento entre os campos. */}
            <label className="text-sm text-gray-700 block mb-1">Nome:</label>
            {/* Rótulo para o campo de nome.
                - text-sm: Tamanho da fonte pequeno (0.875rem / 14px).
                - text-gray-700: Cor do texto cinza escuro.
                - block: Faz o label se comportar como um elemento de bloco, ocupando sua própria linha.
                - mb-1: Adiciona uma pequena margem inferior de 0.25rem (4px) entre o label e o input. */}
            <input
              type="text" // Define o tipo de input como texto livre.
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              // Estiliza o campo de input:
              // - w-full: Ocupa 100% da largura disponível.
              // - border-0: Remove todas as bordas padrão do input.
              // - border-b: Adiciona uma borda apenas na parte inferior.
              // - border-[#16A34A]: Define a cor da borda inferior como verde.
              // - bg-transparent: Define o fundo do input como transparente.
              // - focus:outline-none: Remove o contorno de foco padrão que navegadores adicionam ao input ser selecionado.
              // - py-1: Adiciona padding vertical de 0.25rem (4px).
              // - placeholder:text-gray-400: Define a cor do texto do placeholder como cinza claro.
              // - text-[#333]: Define a cor do texto digitado pelo usuário como um cinza escuro.
              placeholder="" // Placeholder vazio como na imagem de referência.
            />
          </div>

          {/* Campo: E-mail */}
          <div className="mb-4">
            {/* Div para agrupar label e input do campo de e-mail. Estilos similares ao campo de Nome. */}
            <label className="text-sm text-gray-700 block mb-1">Digite seu e-mail:</label>
            <input
              type="email" // Define o tipo de input como e-mail (pode ativar teclados específicos em dispositivos móveis e validação básica de formato).
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              placeholder="" // Placeholder vazio.
            />
          </div>

          {/* Campo: Telefone */}
          <div className="mb-6">
            {/* Div para agrupar o input do campo de telefone. Não há label explícito aqui, mas o placeholder serve como guia. */}
            <input
              type="tel" // Define o tipo de input como telefone (pode ativar teclados numéricos em dispositivos móveis).
              className="w-full border-0 border-b border-[#16A34A] bg-transparent focus:outline-none py-1 placeholder:text-gray-400 text-[#333]"
              placeholder="+55 (__) _____-____" // Placeholder com um formato de telefone brasileiro para guiar o usuário.
            />
          </div>
        </div>

        {/* Botão de envio "Continuar", com fundo verde (#16A34A) e seta para a direita. */}
        <button className="w-full bg-[#16A34A] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
          {/* Botão de chamada para ação (Call to Action - CTA) para prosseguir.
              - w-full: Ocupa 100% da largura disponível.
              - bg-[#16A34A]: Fundo verde.
              - text-white: Texto branco.
              - py-3: Padding vertical.
              - rounded-xl: Bordas arredondadas grandes.
              - font-semibold: Peso da fonte semi-negrito.
              - flex items-center justify-center: Usa flexbox para centralizar o texto "Continuar" e o ícone de seta horizontalmente.
              - gap-2: Espaçamento de 0.5rem (8px) entre o texto e a seta. */}
          Continuar <span>➜</span>
          {/* O caractere '➜' é uma seta para a direita. O <span> o envolve para que possa ser estilizado junto com o texto "Continuar" pelo flexbox. */}
        </button>
      </div>
    </div>
  )
}

export default Popup // Exporta o componente Popup para que possa ser importado e utilizado em outros arquivos da aplicação.
