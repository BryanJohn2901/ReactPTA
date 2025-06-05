import React from 'react';

// Dados para os cards de público-alvo
const audienceData = [
  {
    icon: '🚀', // TODO: Substituir por ícone SVG ou de biblioteca (ex: Font Awesome)
    description: 'Que querem aprender com os maiores treinadores e professores do Brasil e se destacar como um especialista em bodybuilding, mesmo que você atenda apenas alunos e não atletas.',
  },
  {
    icon: '📈', // TODO: Substituir por ícone SVG ou de biblioteca
    description: 'Para profissionais que buscam resultados estéticos rápidos e impressionantes para seus alunos. Profissionais que desejam dominar técnicas capazes de transformar o físico de seus alunos em um prazo curto, utilizando estratégias eficazes comprovadas no mundo do bodybuilding.',
  },
  {
    icon: '💪', // TODO: Substituir por ícone SVG ou de biblioteca
    description: 'Para profissionais que querem aplicar estratégias de treinamento de elite, mesmo em alunos não competitivos e que pretende destravar o seu potencial e ganhar mais de 15 mil reais com o domínio de conhecimentos práticos e inovadores, se tornando autoridade como Personal Trainer.',
  },
  {
    icon: '🏆', // TODO: Substituir por ícone SVG ou de biblioteca
    description: 'Profissionais interessados em aprender e aplicar métodos de treinamento utilizados por atletas de elite do bodybuilding para potencializar a estética e a performance física de alunos que não competem.',
  },
];

const Publico_alvo = () => {
  return (
    <section className="bg-custom-black-dark text-custom-text-light py-16 px-4 md:px-8">
      {/* Título Principal da Seção */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-4xl mx-auto leading-tight">
        Uma Pós-graduação feita para <span className="text-red-600">profissionais</span>...
      </h2>

      {/* Grid de Cards de Público-Alvo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {audienceData.map((item, index) => (
          <div
            key={index}
            className="bg-custom-card-dark p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 min-h-[300px] justify-start"
          >
            {/* Ícone */}
            <div className="text-5xl mb-4 text-red-500"> {/* Mantido red-500 para os ícones, que parece vibrante o suficiente */}
              {item.icon}
            </div>

            {/* Descrição */}
            <p className="text-custom-text-light text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publico_alvo;