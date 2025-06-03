// src/components/FAQSection.jsx
import React from 'react';

// IMPORTAR A IMAGEM DO WHATSAPP AQUI
// Certifique-se de que esse caminho e nome de arquivo estão corretos
import whatsappIconImage from '../assets/whatsapp-icon.svg'; // Supondo que você tenha a imagem do ícone do WhatsApp aqui

// Ícone para as perguntas (seta para a direita)
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-3"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

// REMOVIDA A FUNÇÃO WhatsAppIcon SVG AQUI


const FAQSection = () => {
  const faqs = [
    'Quais são as Formas de Pagamento?',
    'Como acesso o conteúdo?',
    'Para quem é?',
    'Qual número total de horas da Pós?',
    'Possui certificado de conclusão?',
  ];

  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Lado Esquerdo (Título e Botão) */}
        <div className="lg:w-2/5 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
            PERGUNTAS QUE <br /> NOS FAZEM
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Ficou com mais alguma dúvida? Tire rapidamente <br className="hidden md:inline" /> pelo WhatsApp da nossa equipe!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg
            inline-flex items-center justify-center transition-colors duration-300
            text-base md:text-lg">
            {/* ALTERADO AQUI: Substituído o SVG pela tag <img> */}
            <img
              src={whatsappIconImage} // Usando a imagem importada
              alt="Ícone do WhatsApp"
              className="w-6 h-6 mr-2 object-contain" // Ajuste o 'w-6 h-6' conforme o tamanho desejado na imagem
            />
            TIRAR DÚVIDAS
          </button>
        </div>

        {/* Lado Direito (Lista de Perguntas) */}
        <div className="lg:w-3/5">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="flex items-center py-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <ChevronRightIcon />
                  <p className="text-lg md:text-xl font-semibold">{faq}</p>
                </div>
                {/* Linha separadora */}
                {index < faqs.length - 1 && (
                  <hr className="border-t border-yellow-400 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;