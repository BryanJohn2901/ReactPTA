import React from 'react'

const HeroDepoimentos = () => {
  const depoimentos = [
    {
      nome: 'Thiago Veras',
      texto:
        'Excelente! Acho a didática dos professores perfeitas e o fato de direcionar sempre a prática ajuda muito a entender! Já tinha assinado uma vez e consegui agora assinar de novo! Sempre recomendo para os meus amigos!',
      imagem: '/depoimentos/dep01.webp',
    },
    {
      nome: 'Felipe Costa',
      texto:
        'A qualidade das aulas é absurda. Estou maratonando todo o módulo de biomecânica dos membros inferiores e a cada aula é uma explosão de conhecimento!',
      imagem: '/depoimentos/dep02.webp',
    },
    {
      nome: 'Marcelo Magno',
      texto:
        'As aulas são ótimas, didáticas impecáveis, dinâmicas, fácil entendimento, com profissionais altamente qualificados fica fácil. E a plataforma é de fácil acesso, ótimos recursos, tudo perfeito.',
      imagem: '/depoimentos/dep03.webp',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-12 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {depoimentos.map((depo, index) => (
          <div key={index} className="bg-[#0B0F47] rounded-2xl p-6 text-white flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={depo.imagem} alt={depo.nome} className="h-12 w-12 rounded-full border-2 border-pink-500" />
              <strong className="text-sm text-cyan-400">{depo.nome}</strong>
            </div>
            <p className="text-sm font-light">{depo.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroDepoimentos
