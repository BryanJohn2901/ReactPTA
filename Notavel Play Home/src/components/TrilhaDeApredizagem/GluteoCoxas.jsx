import React from 'react'

const GluteoCoxas = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: 'Hipertrofia de membros Inferiores com agachamento',
    },
    {
      titulo: 'Aula 02',
      descricao: 'Biomecânica do Leg Press: como gerar mais esforço para glúteo ou quadríceps nessa máquina',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Como usar a excêntrica forçada (negativa) nos exercícios de membros Inferiores',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Estratégias Avançadas para Treinos de Glúteos',
    },
    {
      titulo: 'Aula 05',
      descricao: 'Front Squat ou Back Squat: como escolher o melhor agachamento para o seu cliente',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-10 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-4 flex-row-reverse">
        {/* Texto lateral direito */}
        <div className="w-[300px] shrink-0 text-right">
          <p className="text-sm mb-2">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug">
            <span className="text-sky-400">Glúteos</span> e <span className="text-purple-400">Coxas</span>
          </h3>
          <p className="text-sm mt-4">
            Gere verdadeiros resultados com treinos de hipertrofia e força.
          </p>
        </div>

        {/* Cards lado a lado */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src="/icones/icone06.svg" alt={aula.titulo} className="h-12 mb-2" />
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

export default GluteoCoxas