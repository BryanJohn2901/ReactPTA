import React from 'react'

const CardsItens = () => {
  const cards = [
    {
      title: 'Aula semanal ao vivo',
      text: 'Participe de aulas ao vivo semanalmente, abordando temas atuais e relevantes.',
    },
    {
      title: 'Acervo com mais de 300 aulas semanais',
      text: 'Acesso ilimitado a mais de 400 horas de conteúdo exclusivo para Personal Trainers.',
    },
    {
      title: 'Comunidade exclusiva para networking',
      text: 'Conecte-se com outros Personal Trainers, troque experiências e construa uma rede de contatos valiosa.',
    },
    {
      title: 'Trilhas de Aprendizagem',
      text: 'Inicie os seus estudos através de nossas Trilhas de Aprendizagem com Certificado.',
    },
    {
      title: 'Ferramentas e Materiais de estudo',
      text: 'Aulas com legendas, resumos detalhados, exercícios práticos, materiais de apoio e transcrições.',
    },
    {
      title: 'Comunidade exclusiva para networking',
      text: 'Conecte-se com outros Personal Trainers, troque experiências e construa uma rede de contatos valiosa.',
    },
  ]

  return (
    <div className="w-full bg-gradient-to-r from-[#0c0c80] to-[#3a0ca3] py-12 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-md bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-pink-500 mb-2">{card.title}</h3>
            <p className="text-sm text-white leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsItens