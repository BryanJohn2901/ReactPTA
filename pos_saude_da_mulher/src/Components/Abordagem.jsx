// src/components/Abordagem.jsx
import React from 'react';
import { Clock, Video, FileText, ClipboardList, Percent } from 'lucide-react';

const data = [
  {
    icon: <Clock className="text-purple-400 w-10 h-10" />,
    title: 'Horário Flexível',
    desc: 'As aulas serão ministradas um final de semana por mês, no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.',
  },
  {
    icon: <Video className="text-purple-400 w-10 h-10" />,
    title: 'Aula Ao Vivo',
    desc: 'Você poderá assistir a aula ao vivo ou a gravação que ficará disponível para assistir quando quiser.',
  },
  {
    icon: <FileText className="text-purple-400 w-10 h-10" />,
    title: 'Artigos Atualizados',
    desc: 'Artigos sobre o assunto, recentes, selecionados e disponíveis para você.',
  },
  {
    icon: <ClipboardList className="text-purple-400 w-10 h-10" />,
    title: 'Avaliações Dinâmicas',
    desc: 'Desenvolva suas habilidades e aplique seus conhecimentos através das nossas avaliações ativas.',
  },
  {
    icon: <Percent className="text-purple-400 w-10 h-10" />,
    title: 'Método EspecialistaPro',
    desc: 'O método Especialista PRO, parte essencial da Pós-graduação em Saúde da mulher, foi criado para que você aplique, elevando sua credibilidade e aumentando seu faturamento.',
  },
];

const Abordagem = () => {
  return (
    <section className="w-full bg-[#101010] text-white py-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        
        {/* Primeiro card: título, com fundo igual à seção e alinhamento à esquerda */}
        <div className="bg-[#101010] rounded-2xl p-6 text-left flex items-center">
          <h2 className="text-xl md:text-4xl font-poppins font-bold leading-snug">
            <span className="text-purple-400">Abordagem prática</span><br />
            e exemplos do seu dia a dia com:
          </h2>
        </div>

        {/* Demais cards */}
        {data.map((item, index) => (
          <div key={index} className="bg-[#111828] rounded-2xl p-6 text-left space-y-4">
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-300 font-nunito leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Abordagem;
