// src/components/Faq.jsx
import React from "react";

// Lista de perguntas e respostas
const faqItems = [
  {
    pergunta: "Para quem é essa certificação?",
    resposta: "Personal trainers, educadores físicos e demais profissionais da saúde que desejam se especializar na prevenção e reabilitação de dores na coluna, elevando sua autoridade e resultados.",
  },
  {
    pergunta: "Preciso ter formação na área da saúde para participar?",
    resposta: "Sim. Esta certificação é voltada a quem já possui formação e quer aprofundar conhecimentos em coluna e dor lombar.",
  },
  {
    pergunta: "A certificação é reconhecida?",
    resposta: "Sim. Você receberá um certificado válido para comprovar especialização e agregar valor ao currículo.",
  },
  {
    pergunta: "O curso é 100 % online?",
    resposta:
      "Sim, permitindo estudar de qualquer lugar, sem interromper sua rotina.",
  },
  {
    pergunta: "Quanto tempo dura a certificação?",
    resposta:
      "Depende da sua disponibilidade, mas a maioria conclui entre 1 e 2 semanas.",
  },
  {
    pergunta: "Como posso me inscrever?",
    resposta:
      "Clique no botão “Quero garantir a oferta”, preencha os dados e conclua o pagamento. Acesso liberado imediatamente!",
  },
];

// Componente FAQ com lista de perguntas
const Faq = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      {/* Container central com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Título */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-6">
          Perguntas frequentes
        </h2>

        {/* Perguntas */}
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-xl space-y-2 shadow-sm">
            <h3 className="font-semibold text-green-700">{item.pergunta}</h3>
            <p className="text-sm md:text-base">{item.resposta}</p>
          </div>
        ))}

        {/* Botão final */}
        <div className="text-center pt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            GARANTIR MINHA CERTIFICAÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
