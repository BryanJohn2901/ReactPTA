// src/components/Faq.jsx
import React from "react";

// Lista de perguntas e respostas
const faqItems = [
  {
    pergunta: "Preciso ser formado em Educação Física?",
    resposta: "Sim. A certificação é voltada a profissionais graduados ou estudantes no último ano.",
  },
  {
    pergunta: "Recebo materiais prontos?",
    resposta: "Sim. Você terá acesso à planilha principal e modelos de micro/mesociclos.",
  },
  {
    pergunta: "O curso é 100 % online?",
    resposta: "Totalmente. Assista onde e quando quiser, com acesso vitalício.",
  },
  {
    pergunta: "O curso é 100% online ou tem aulas presenciais?",
    resposta:
      "O curso é totalmente online. Você poderá assistir às aulas no seu ritmo, em qualquer lugar e dispositivo, sem precisar interromper sua rotina diária de atendimentos.",
  },
  {
    pergunta: "Quanto tempo dura o curso?",
    resposta:
      "O tempo médio para conclusão do curso varia de acordo com seu ritmo pessoal, mas a maioria dos alunos conclui o curso em até duas semanas, estudando de forma tranquila e prática.",
  },
  {
    pergunta: "Como posso me inscrever?",
    resposta:
      "Basta clicar no botão de inscrição nesta página, preencher seus dados corretamente e confirmar sua vaga. Logo após a confirmação do pagamento, você terá acesso imediato às aulas, materiais complementares e comunidade exclusiva.",
  },
];

// Componente FAQ com lista de perguntas
const Faq = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      {/* Container central com largura máxima */}
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Título */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#D00727] mb-6">
          Perguntas frequentes
        </h2>

        {/* Perguntas */}
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-xl space-y-2 shadow-sm">
            <h3 className="font-semibold text-[#D00727] text-lg md:text-xl">{item.pergunta}</h3>
            <p className="text-sm md:text-base">{item.resposta}</p>
          </div>
        ))}

        {/* Botão final */}
        <div className="text-center pt-6">
          <button className="bg-[#D00727] hover:bg-[#b9061f] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            GARANTIR MINHA CERTIFICAÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
