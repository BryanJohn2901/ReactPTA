// src/components/Topicos.jsx
import React from 'react';
import { Rocket, TrendingUp, HandCoins, Accessibility } from 'lucide-react';

const topicos = [
  {
    icon: <Rocket className="text-purple-400 w-6 h-6" />,
    texto: 'Profissionais que querem se tornar uma autoridade e ter conhecimentos específicos para atender o público que mais busca atendimento especializado em saúde da mulher.',
  },
  {
    icon: <TrendingUp className="text-purple-400 w-6 h-6" />,
    texto: 'Domine na prática os métodos de treino e a fisiologia hormonal para potencializar resultados em mulheres que buscam emagrecimento e resultados estéticos.',
  },
  {
    icon: <HandCoins className="text-purple-400 w-6 h-6" />,
    texto: 'Compreenda como prescrever e orientar treinos para as diferentes fases da vida da mulher: adolescência, fase adulta, pré e pós-parto, menopausa e senilidade.',
  },
  {
    icon: <Accessibility className="text-purple-400 w-6 h-6" />,
    texto: 'E para profissionais que querem ter uma visão completa da mulher nos seus aspectos físicos, hormonais, nutricionais e psicológicos para entregar melhores resultados estéticos no corpo feminino.',
  },
];

const Topicos = () => {
  return (
    <section className="w-full bg-[#F8F9FC] py-20 px-6 text-black">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-bold text-center font-poppins text-purple-500 mb-10">
        Uma Pós-graduação feita para profissionais...
      </h2>

      {/* Grid de cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topicos.map((item, index) => (
          <div key={index} className="bg-[#0c0c0c] text-white rounded-xl p-6 flex flex-col gap-4">
            {item.icon}
            <p className="text-base font-nunito leading-relaxed">
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topicos;
