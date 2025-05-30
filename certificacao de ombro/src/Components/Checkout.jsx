import React from "react";

// Ícone SVG verde reutilizável
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Checkout com destaque e sombra verde
const Checkout = () => {
  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          atenção a essa condição por tempo limitado
        </h2>

        {/* Container do card */}
        <div className="max-w-md mx-auto relative">
          {/* Sombra verde em volta do card */}
          <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-green-500 z-0"></div>

          {/* Card de oferta */}
          <div className="relative z-10 bg-black border border-green-600 rounded-xl p-8 shadow-xl space-y-4">
            {/* Logo */}
            <img
              src="/logo_ombro.webp"
              alt="Logo expertise em ombro"
              className="h-12 mx-auto"
            />

            {/* Oferta */}
            <h3 className="text-green-500 font-semibold text-lg">Oferta Especial</h3>
            <p className="line-through text-gray-400">de R$ 297,00 por apenas</p>
            <p className="text-4xl font-bold">R$ 47,00</p>

            {/* Benefícios */}
            <ul className="text-left space-y-2 mt-6 text-sm">
              <li className="flex items-start gap-2">
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
            <p className="text-sm text-white mt-4">Parcelamento em até 10x no cartão.</p>

            {/* Botão de compra */}
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 w-full rounded-lg transition duration-300">
              QUERO GARANTIR A OFERTA
            </button>

            {/* Imagem inferior (também logo_ombro.webp) */}
            <img
              src="/pagamento.webp"
              alt="Formas de pagamento"
              className="mx-auto mt-4 w-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
