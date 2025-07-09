import React from 'react'

const Cards = () => {
  const depoimentos = [
    {
      nome: 'Thiago Veras',
      texto:
        'Excelente! Acho a didática dos professores perfeitas e o fato de direcionar sempre a prática ajuda muito a entender! Já tinha assinado uma vez e consegui agora assinar de novo! Sempre recomendo para os meus amigos!',
    },
    {
      nome: 'Felipe Costa',
      texto:
        'A qualidade das aulas é absurda. Estou maratonando todo o módulo de biomecânica dos membros inferiores e a cada aula é uma explosão de conhecimento!',
    },
    {
      nome: 'Marcelo Magno',
      texto:
        'As aulas são ótimas, didáticas impecáveis, dinâmicas, fácil entendimento, com profissionais altamente qualificados fica fácil. E a plataforma é de fácil acesso, ótimos recursos, tudo perfeito.',
    },
  ]

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {depoimentos.map((item, index) => (
          <div
            key={index}
            className="bg-[#080B3C] text-white p-6 rounded-lg shadow-md text-left"
          >
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">{item.nome}</h4>
            <p className="text-sm leading-relaxed">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards