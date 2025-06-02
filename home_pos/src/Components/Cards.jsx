import React from 'react'
import {
  Users2,
  BadgePercent,
  GraduationCap,
  BadgeCheck,
  Network,
} from 'lucide-react'

// Dados dos cards com ícones
const cardData = [
  {
    title: 'Professores referência',
    description:
      'Corpo docente formado por profissionais atuantes e reconhecidos nacionalmente',
    icon: <Users2 className="text-[#FE7750] w-10 h-10 mb-4" />,
  },
  {
    title: '6 Especializações',
    description:
      'Bodybuilding, Biomecânica, Saúde da Mulher, Treinamento Funcional, Fisiologia e mais.',
    icon: <BadgePercent className="text-[#FE7750] w-10 h-10 mb-4" />,
  },
  {
    title: '+10.000 alunos formados',
    description:
      'Profissionais de todo o Brasil já passaram pela nossa metodologia',
    icon: <GraduationCap className="text-[#FE7750] w-10 h-10 mb-4" />,
  },
  {
    title: 'Certificação MEC',
    description:
      'Pós-graduação oficial em parceria com a USINA',
    icon: <BadgeCheck className="text-[#FE7750] w-10 h-10 mb-4" />,
  },
  {
    title: 'Comunidade ativa',
    description:
      'Rede de apoio entre alunos, mentores e professores',
    icon: <Network className="text-[#FE7750] w-10 h-10 mb-4" />,
  },
]

const Cards = () => {
  return (
    // Seção com fundo branco e padding horizontal
    <section className="bg-white py-0 px-4">
      {/* Container com largura total para desktop e responsivo no mobile */}
      <div className="w-full overflow-x-auto">
        <div className="w-[1920px] max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-b divide-x divide-gray-200 px-4">
          {cardData.map((card, index) => (
            <div key={index} className="p-6 text-left">
              {/* Ícone */}
              {card.icon}

              {/* Título */}
              <h3 className="text-[#014237] font-semibold mb-2 text-[20px] sm:text-[22px] lg:text-[24px]">
                {card.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-gray-700 leading-snug">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
