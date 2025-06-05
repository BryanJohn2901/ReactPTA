import React, { useState } from 'react';


const faqItems = [
  {
    question: 'Quais são as Formas de Pagamento?',
    answer: 'Aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto bancário e pix. Consulte as condições específicas na página de matrícula.',
  },
  {
    question: 'Como acesso o conteúdo?',
    answer: 'Todo o conteúdo é disponibilizado em nossa plataforma online exclusiva. Após a matrícula, você receberá acesso com login e senha para começar seus estudos imediatamente.',
  },
  {
    question: 'Qual número total de horas da Pós?',
    answer: 'A pós-graduação possui um total de 360 horas de carga horária, incluindo aulas, atividades complementares e avaliação.',
  },
  {
    question: 'Possui certificado de conclusão?',
    answer: 'Sim, ao concluir o curso e cumprir todos os requisitos, você receberá um certificado de pós-graduação reconhecido pelo MEC.',
  },
 
];

const FAQ= () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section className="bg-custom-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Lado Esquerdo: Título, Descrição e Botão de Contato */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-red-600 font-bold mb-2">F.A.Q.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md">
            Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_WHATSAPP&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20p%C3%B3s-gradua%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg md:text-xl transition duration-300 ease-in-out shadow-lg"
          >
            TIRAR DÚVIDAS
          </a>
        </div>

        {/* Lado Direito: Lista de Perguntas (Acordeão) */}
        <div className="w-full lg:w-1/2">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-semibold py-4 px-6 rounded-lg text-left flex justify-between items-center transition duration-300 ease-in-out shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {/* Ícone de seta ou + / - */}
                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="bg-gray-800 text-gray-200 p-4 rounded-b-lg mt-1 text-base md:text-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;