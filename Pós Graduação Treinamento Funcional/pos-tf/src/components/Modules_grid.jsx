import React from "react";

const modules = [
  { title: "Módulo 01", desc: "Prevenção e reabilitação de lesões de membros inferiores com técnicas do Treinamento Funcional" },
  { title: "Módulo 02", desc: "Bases científicas do Treinamento Funcional: da teoria à prática" },
  { title: "Módulo 03", desc: "Marketing e mindset empreendedor para conquistar novos alunos" },
  { title: "Módulo 04", desc: "Avaliação funcional do movimento: estratégias para potencializar a performance" },
  { title: "Módulo 05", desc: "Treinamento Funcional, emagrecimento e hipertrofia: atualizações práticas e consolidadas" },
  { title: "Módulo 06", desc: "Biomecânica prática nos exercícios funcionais" },
  { title: "Módulo 07", desc: "Treinamento Funcional para grupos especiais 2: gestantes, obesos, hipertensos e diabéticos" },
  { title: "Módulo 08", desc: "Core training: fortalecimento e definição muscular" },
  { title: "Módulo 09", desc: "Kettlebell para treinos da reabilitação à performance" },
  { title: "Módulo 10", desc: "Exercícios funcionais para grupos especiais 1: idosos e adolescentes" },
  { title: "Módulo 11", desc: "Planejamento, gestão e sucesso para estúdios e boxes" },
  { title: "Módulo 12", desc: "LPO para treinos de potência, força e resistência" },
  { title: "Módulo 13", desc: "Treinamento Funcional na prevenção e reabilitação de lesões de membros superiores" },
  { title: "Módulo 14", desc: "Treinamento Funcional no esporte de alto rendimento" },
  { title: "Módulo 15", desc: "Mobilidade articular: aplicação prática do método CARS" },
  { title: "Módulo 16", desc: "Treinamento Funcional com peso do corpo e acessórios: variações inteligentes" },
  { title: "Módulo 17", desc: "Periodização aplicada ao Treinamento Funcional: como organizar os treinos no tempo disponível" },
  { title: "Módulo 18", desc: "HIIT aplicado ao Treinamento Funcional: emagrecimento e condicionamento cardiovascular" },
];


const ModulesGrid = () => {
  return (
    <section className="bg-zinc-900 px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="border-2 border-yellow-500 rounded-xl p-4 text-white shadow-yellow-500 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-yellow-400 font-bold mb-2">{mod.title}</h3>
            <p className="text-sm leading-snug">{mod.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;
