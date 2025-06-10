import React from "react"; // Importa a biblioteca React, essencial para a construção de componentes.

// Ícone SVG vermelho reutilizável
const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon para renderizar um ícone de "check".
  <svg
    className="w-5 h-5 text-[#D00727] flex-shrink-0 mt-0.5" // Aplica classes CSS (Tailwind CSS) para definir tamanho (largura e altura de 1.25rem/20px), cor (vermelho '#D00727'), impedir encolhimento e adicionar uma margem superior pequena (0.125rem/2px).
    fill="none" // Remove o preenchimento interno do SVG (deixa o interior transparente).
    stroke="currentColor" // Define que a cor do traço (contorno) será a cor do texto atual (herdada de 'text-[#D00727]').
    strokeWidth="2" // Define a espessura do traço como 2 unidades.
    viewBox="0 0 24 24" // Define a caixa de visualização do SVG (sistema de coordenadas internas).
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do desenho do ícone de "check", com pontas arredondadas (strokeLinecap) e junções arredondadas (strokeLinejoin). */}
  </svg>
);

// Componente Checkout com destaque e sombra vermelha
// Usa React.forwardRef para que este componente possa receber uma referência (ref) do seu componente pai.
// Também recebe uma prop 'onOpenPopup' que será uma função para abrir um popup.
const Checkout = React.forwardRef(({ onOpenPopup }, ref) => {
  // 'onOpenPopup' é uma prop de função passada pelo componente pai (geralmente App.jsx).
  // 'ref' é a referência encaminhada do componente pai, permitindo o scroll até esta seção.
  return (
    // Anexa a ref à section para que o scroll possa mirar nela.
    // 'id="checkout-section"' é uma ID que também pode ser usada para direcionamento de scroll ou manipulação direta via JavaScript.
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
        {/* Título */}
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          {" "}
          {/* Título da seção de checkout.
              - text-xl md:text-2xl: Tamanho da fonte responsivo (xl em telas menores, 2xl em médias/grandes).
              - font-semibold: Peso da fonte semi-negrito.
              - mb-10: Margem inferior de 2.5rem (40px). */}
          atenção a essa condição por tempo limitado
        </h2>

        {/* Container do card */}
        <div className="max-w-md mx-auto relative">
          {" "}
          {/* Contêiner para o card de oferta, limitando sua largura, centralizando-o e permitindo posicionamento relativo.
              - max-w-md: Largura máxima de 28rem (448px).
              - mx-auto: Centraliza horizontalmente.
              - relative: Define o posicionamento relativo para elementos filhos absolutos. */}
          {/* Sombra vermelha em volta do card */}
          <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-[#D00727] z-0"></div>
          {/* Div que cria um efeito de brilho ou sombra suave e avermelhada por trás do card.
              - absolute: Posiciona a div absolutamente em relação ao seu pai (`max-w-md`).
              - inset-0: Faz a div ocupar 100% da largura e altura do pai.
              - rounded-xl: Bordas arredondadas grandes.
              - blur-2xl: Aplica um desfoque intenso.
              - opacity-30: Define a opacidade para 30%.
              - bg-[#D00727]: Cor de fundo vermelha.
              - z-0: Z-index baixo para que fique atrás do card principal. */}

          {/* Card de oferta */}
          <div className="relative z-10 bg-black border border-[#D00727] rounded-xl p-8 shadow-xl space-y-4">
            {" "}
            {/* O card principal da oferta.
                - relative: Posiciona relativamente para ficar acima da sombra (z-10).
                - z-10: Z-index alto para ficar na frente da sombra.
                - bg-black: Fundo preto.
                - border border-[#D00727]: Borda de 1px com cor vermelha.
                - rounded-xl: Bordas arredondadas grandes.
                - p-8: Padding interno de 2rem (32px).
                - shadow-xl: Sombra grande.
                - space-y-4: Espaçamento vertical de 1rem (16px) entre os elementos filhos diretos. */}
            {/* Logo */}
            <img
              src="/logo_joelho.webp" // Caminho da imagem do logo.
              alt="Logo expertise em joelho" // Texto alternativo para acessibilidade.
              className="w-[120px] mx-auto" // Largura de 120px e centralizada.
            />

            {/* Oferta */}
            <h3 className="text-[#D00727] font-semibold text-lg">Oferta Especial</h3>{" "}
            {/* Título da oferta com cor vermelha, semi-negrito e tamanho de fonte. */}
            <p className="line-through text-gray-400">de R$ 297,00 por apenas</p>{" "}
            {/* Texto de preço original, riscado e em cinza. */}
            <p className="text-4xl font-bold">R$ 47,00</p>{" "}
            {/* Preço promocional em destaque, com tamanho grande e negrito. */}

            {/* Benefícios */}
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

            {/* Parcelamento */}
            <p className="text-sm text-white mt-4">Parcelamento em até 10x no cartão..</p>{" "}
            {/* Informação de parcelamento. */}

            {/* Botão de compra */}
            <button
              // MUITO IMPORTANTE: Este onClick chama a prop 'onOpenPopup' que será passada do App.jsx.
              onClick={onOpenPopup}
              className="mt-4 text-white font-bold py-3 px-6 w-full rounded-lg transition duration-300"
              // Botão de ação:
              // - mt-4: Margem superior.
              // - text-white: Texto branco.
              // - font-bold: Negrito.
              // - py-3 px-6: Padding.
              // - w-full: Largura total.
              // - rounded-lg: Bordas arredondadas.
              // - transition duration-300: Transição suave de 300ms para efeitos como hover (embora não haja hover explícito nesta cor inline).
              style={{ backgroundColor: "#D00727" }} // Cor de fundo vermelha personalizada.
            >
              QUERO GARANTIR A OFERTA
            </button>

            {/* Imagem inferior (bandeiras de pagamento) */}
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

export default Checkout; // Exporta o componente Checkout para que ele possa ser importado e usado em outras partes da aplicação.
