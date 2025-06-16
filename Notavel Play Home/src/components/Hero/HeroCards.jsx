import React from 'react'
import { Wifi, GraduationCap, Users, Megaphone } from 'lucide-react'

const HeroCards = () => {
  const cards = [
    {
      icon: <Wifi className="text-pink-500 h-10 w-10" />,
      title: 'Aulas ao vivo',
    },
    {
      icon: <GraduationCap className="text-pink-500 h-10 w-10" />,
      title: 'Trilhas de aprendizagem rápida',
    },
    {
      icon: <Users className="text-pink-500 h-10 w-10" />,
      title: 'Comunidade para Crescimento Pessoal',
    },
    {
      icon: <Megaphone className="text-pink-500 h-10 w-10" />,
      title: 'Aula de Marketing para captação rápida de alunos',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gradient-to-r from-[#0B0F47] to-[#080B3C] rounded-3xl py-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-4 px-4">
            {card.icon}
            <p className="text-sm font-medium text-white max-w-[160px]">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroCards