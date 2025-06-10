import React, { useState } from "react"; // Importa a biblioteca React e o hook useState para gerenciar o estado do componente.
import Popup from "./Popup"; // certifique-se de ajustar o caminho se necessário // Importa o componente Popup de outro arquivo, que será exibido condicionalmente.

const CheckIcon = () => (
  // Define um componente funcional simples chamado CheckIcon para renderizar um ícone de "check".
  <svg
    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" // Aplica classes CSS (Tailwind CSS) para definir tamanho, cor (verde), impedir encolhimento e ajustar a margem superior do ícone.
    fill="none" // Remove o preenchimento interno do SVG.
    stroke="currentColor" // Define que a cor do traço (contorno) será a cor do texto atual (verde).
    strokeWidth="2" // Define a espessura do traço.
    viewBox="0 0 24 24" // Define a área de visualização do SVG.
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do desenho do ícone de "check", com extremidades e junções arredondadas. */}
  </svg>
);

const Checkout = React.forwardRef((props, ref) => {
  // Define o componente funcional Checkout e o envolve com React.forwardRef para permitir que ele receba uma ref.
  const [showPopup, setShowPopup] = useState(false); // Declara um estado `showPopup` (inicializado como `false`) e uma função `setShowPopup` para atualizá-lo. Isso controla a visibilidade do popup.

  return (
    // Inicia o retorno do JSX do componente.
    <section ref={ref} className="bg-black text-white py-20 px-4 text-center">
      {" "}
      {/* Define uma seção HTML. `ref={ref}` associa a ref passada ao elemento. Aplica classes CSS para fundo preto, texto branco, padding vertical e horizontal, e alinhamento de texto centralizado. */}
      <div className="max-w-[1200px] mx-auto">
        {" "}
        {/* Container para o conteúdo da seção, limitando a largura e centralizando horizontalmente. */}
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          {" "}
          {/* Título principal da seção com tamanhos de fonte responsivos, negrito e margem inferior. */}
          atenção a essa condição por tempo limitado
        </h2>
        <div className="max-w-md mx-auto relative">
          {" "}
          {/* Container para o card de oferta, limitando a largura, centralizando-o e posicionando-o relativamente para elementos filhos absolutos. */}
          <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-green-500 z-0"></div>{" "}
          {/* Div para criar um efeito de brilho ou sombra esverdeada por trás do card, posicionada absolutamente e com um baixo z-index. */}
          <div className="relative z-10 bg-black border border-green-600 rounded-xl p-8 shadow-xl space-y-4">
            {" "}
            {/* O card principal da oferta: posicionamento relativo (para ficar acima do brilho), fundo preto, borda verde, bordas arredondadas, padding, sombra e espaçamento vertical entre os elementos. */}
            <img
              src="/logo_coluna.png"
              alt="Logo"
              className="w-[180px] mx-auto"
            />{" "}
            {/* Imagem do logo, com largura definida e centralizada. */}
            <h3 className="text-green-500 font-semibold text-lg">
              Oferta Especial
            </h3>{" "}
            {/* Subtítulo da oferta com cor verde, negrito e tamanho de fonte. */}
            <p className="line-through text-gray-400">
              de R$ 297,00 por apenas
            </p>{" "}
            {/* Preço original riscado, com cor cinza. */}
            <p className="text-4xl font-bold">R$ 47,00</p>{" "}
            {/* Preço promocional em destaque, com tamanho grande e negrito. */}
            <ul className="text-left space-y-2 mt-6 text-sm">
              {" "}
              {/* Lista de itens incluídos na oferta, alinhada à esquerda, com espaçamento vertical e tamanho de fonte pequeno. */}
              <li className="flex items-start gap-2">
                <CheckIcon />Curso completo (3 módulos)
              </li>{" "}
              {/* Item da lista, com o ícone de check e o texto, usando flexbox para alinhar. */}
              <li className="flex items-start gap-2">
                <CheckIcon />Planilha principal de montagem de treinos
              </li>{" "}
              {/* Segundo item da lista. */}
              <li className="flex items-start gap-2">
                <CheckIcon />Mini-curso de Treinamento Híbrido
              </li>{" "}
              {/* Terceiro item da lista. */}
              <li className="flex items-start gap-2">
                <CheckIcon />Certificado Profissional
              </li>{" "}
              {/* Quarto item da lista. */}
            </ul>
            <p className="text-sm text-white mt-4">
              Parcelamento em até 10x no cartão.
            </p>{" "}
            {/* Texto informativo sobre as opções de pagamento. */}
            <button
              onClick={() => setShowPopup(true)} // Ao clicar no botão, a função `setShowPopup` é chamada para definir `showPopup` como `true`, o que fará o popup aparecer.
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 w-full rounded-lg transition duration-300"
            // Botão de ação com estilos de fundo verde, efeito hover, texto branco e negrito, padding, largura total, bordas arredondadas e uma transição suave.
            >
              QUERO GARANTIR A OFERTA
            </button>
            <img
              src="/pagamento.webp"
              alt="Bandeiras"
              className="w-[180px] m-auto"
            />{" "}
            {/* Imagem com as bandeiras de pagamento, largura definida e centralizada. */}
          </div>
        </div>
      </div>
      {/* Renderiza o Popup quando showPopup for true */}
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)} />
      )}{" "}
      {/* Renderização condicional do componente Popup: ele só será montado (e visível) se `showPopup` for `true`. A prop `onClose` é passada para permitir que o popup se feche, atualizando `showPopup` para `false`. */}
    </section>
  );
});

export default Checkout; // Exporta o componente Checkout para que ele possa ser usado em outras partes da aplicação.