import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Ícone SVG verde reutilizável
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon para renderizar um ícone de "check".
  <svg
    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" // Aplica classes CSS (Tailwind CSS) para definir tamanho (largura e altura de 1.25rem/20px), cor (verde), impedir encolhimento e adicionar uma margem superior pequena (0.125rem/2px).
    fill="none" // Remove o preenchimento interno do SVG (deixa o interior transparente).
    stroke="currentColor" // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada de 'text-green-500').
    strokeWidth="2" // Define a espessura do traço como 2 unidades.
    viewBox="0 0 24 24" // Define a caixa de visualização do SVG (sistema de coordenadas internas).
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do desenho do ícone de "check", com pontas arredondadas (strokeLinecap) e junções arredondadas (strokeLinejoin). */}
  </svg>
);

// Componente Checkout com destaque e sombra verde
// USANDO React.forwardRef: Essencial para que este componente possa receber uma 'ref' do seu componente pai.
// Recebe 'onOpenPopup': Esta prop é uma função que será chamada para ativar o popup.
const Checkout = React.forwardRef(({ onOpenPopup }, ref) => {
  // 'onOpenPopup' é desestruturada das props
  // 'ref' é a referência encaminhada do componente pai, permitindo o scroll até esta seção.
  return (
    // Anexa a 'ref' à seção para permitir o scroll suave do Navbar/outros botões até aqui.
    // A 'id="checkout-section"' também ajuda como um fallback ou para outros usos.
    <section ref={ref} id="checkout-section" className="bg-black text-white py-20 px-4 text-center">
      {" "}
      {/* Define uma seção HTML que serve como o contêiner principal do checkout.
          - bg-black: Fundo preto.
          - text-white: Cor do texto branco.
          - py-20: Padding vertical de 5rem (80px).
          - px-4: Padding horizontal de 1rem (16px).
          - text-center: Centraliza o texto dentro da seção. */}
      <div className="max-w-[1200px] mx-auto">
        {" "}
        {/* Contêiner interno que limita a largura do conteúdo e o centraliza.
            - max-w-[1200px]: Largura máxima de 1200 pixels.
            - mx-auto: Centraliza horizontalmente. */}
        {/* Título da seção */}
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          {" "}
          {/* Título da seção de checkout.
              - text-xl md:text-2xl: Tamanho da fonte responsivo (xl em telas menores, 2xl em médias/grandes).
              - font-semibold: Peso da fonte semi-negrito.
              - mb-10: Margem inferior de 2.5rem (40px). */}
          atenção a essa condição por tempo limitado
        </h2>

        {/* Container do card de oferta */}
        <div className="max-w-md mx-auto relative">
          {" "}
          {/* Contêiner para o card de oferta, limitando sua largura, centralizando-o e permitindo posicionamento relativo.
              - max-w-md: Largura máxima de 28rem (448px).
              - mx-auto: Centraliza horizontalmente.
              - relative: Define o posicionamento relativo para elementos filhos absolutos. */}
          {/* Sombra verde em volta do card, criando um efeito visual */}
          <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-green-500 z-0"></div>
          {/* Div que cria um efeito de brilho ou sombra suave e esverdeada por trás do card.
              - absolute: Posiciona a div absolutamente em relação ao seu pai (`max-w-md`).
              - inset-0: Faz a div ocupar 100% da largura e altura do pai.
              - rounded-xl: Bordas arredondadas grandes.
              - blur-2xl: Aplica um desfoque intenso.
              - opacity-30: Define a opacidade para 30%.
              - bg-green-500: Cor de fundo verde.
              - z-0: Z-index baixo para que fique atrás do card principal. */}

          {/* Card principal da oferta */}
          <div className="relative z-10 bg-black border border-green-600 rounded-xl p-8 shadow-xl space-y-4">
            {" "}
            {/* O card principal da oferta.
                - relative: Posiciona relativamente para ficar acima da sombra (z-10).
                - z-10: Z-index alto para ficar na frente da sombra.
                - bg-black: Fundo preto.
                - border border-green-600: Borda de 1px com cor verde.
                - rounded-xl: Bordas arredondadas grandes.
                - p-8: Padding interno de 2rem (32px).
                - shadow-xl: Sombra grande.
                - space-y-4: Espaçamento vertical de 1rem (16px) entre os elementos filhos diretos. */}
            {/* Logo do produto/marca */}
            <img
              src="/logo_ombro.webp" // Caminho da imagem do logo.
              alt="Logo expertise em ombro" // Texto alternativo para acessibilidade.
              className="h-12 mx-auto" // Altura de 3rem (48px) e centralizada.
            />

            {/* Detalhes da oferta de preço */}
            <h3 className="text-green-500 font-semibold text-lg">Oferta Especial</h3>{" "}
            {/* Título da oferta com cor verde, semi-negrito e tamanho de fonte. */}
            <p className="line-through text-gray-400">de R$ 297,00 por apenas</p>{" "}
            {/* Texto de preço original, riscado e em cinza. */}
            <p className="text-4xl font-bold">R$ 47,00</p>{" "}
            {/* Preço promocional em destaque, com tamanho grande e negrito. */}

            {/* Lista de benefícios inclusos na oferta */}
            <ul className="text-left space-y-2 mt-6 text-sm">
              {" "}
              {/* Lista de benefícios, alinhada à esquerda, com espaçamento e tamanho de fonte pequeno. */}
              <li className="flex items-start gap-2">
                {" "}
                {/* Item da lista, usando flexbox para alinhar o ícone e o texto. */}
                <CheckIcon />
                Curso completo (3 módulos)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Planilha principal de montagem de treinos
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Mini-curso de Treinamento Híbrido
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Certificado Profissional
              </li>
            </ul>

            {/* Informação de parcelamento */}
            <p className="text-sm text-white mt-4">Parcelamento em até 10x no cartão.</p>{" "}
            {/* Informação de parcelamento. */}

            {/* Botão de compra: Ao ser clicado, ele chama a função 'onOpenPopup' recebida como prop. */}
            <button
              onClick={onOpenPopup} // ESTE É O EVENTO QUE DEVE ABRIR O POPUP SOMENTE AO CLIQUE. Ele chama a função 'onOpenPopup' que é passada como prop do componente pai (App.jsx).
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 w-full rounded-lg transition duration-300"
              // Botão de ação:
              // - mt-4: Margem superior.
              // - bg-green-600: Fundo verde.
              // - hover:bg-green-700: Cor de fundo mais escura ao passar o mouse.
              // - text-white: Texto branco.
              // - font-bold: Negrito.
              // - py-3 px-6: Padding.
              // - w-full: Largura total.
              // - rounded-lg: Bordas arredondadas.
              // - transition duration-300: Transição suave de 300ms para efeitos como hover.
            >
              QUERO GARANTIR A OFERTA
            </button>

            {/* Imagem de formas de pagamento */}
            <img
              src="/pagamento.webp" // Caminho da imagem das formas de pagamento.
              alt="Formas de pagamento" // Texto alternativo para acessibilidade.
              className="mx-auto mt-4 w-[180px]" // Centralizada com largura e margem superior.
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Checkout; // Exporta o componente Checkout para que ele possa ser importado e utilizado em outras partes da aplicação.
