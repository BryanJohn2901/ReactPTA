import React from 'react'

const MarketingParaPersonalTrainers = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: 'As Mudanças que você precisa fazer no seu Instagram para vender 3x mais',
    },
    {
      titulo: 'Aula 02',
      descricao: 'Raio X do Instagram para Personal Trainers venderem mais',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Categorias de postagem para Personal que usa Instagram para vender',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Como ORGANIZAR os CONTEÚDOS para os próximos 60 DIAS no seu feed.',
    },
    {
      titulo: 'Aula 05',
      descricao: 'Os segredos nos roteiros dos seus vídeos que prendem a atenção dos seus alunos',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-16 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-4 flex-row-reverse">
        {/* Texto lateral direito */}
        <div className="w-[300px] shrink-0 text-right">
          <p className="text-sm mb-2">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug">
            <span className="text-sky-400">Marketing</span> para <span className="text-purple-400">Personal Trainers</span>
          </h3>
          <p className="text-sm mt-4">
            Aumente o seu faturamento utilizando as redes sociais.
          </p>
        </div>

        {/* Todos os cards lado a lado */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src="/icones/icone02.svg" alt={aula.titulo} className="h-12 mb-2" />
              <span className="text-sky-400 font-semibold text-sm">{aula.titulo}</span>
              <p className="text-xs font-light leading-snug text-white">
                {aula.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketingParaPersonalTrainers