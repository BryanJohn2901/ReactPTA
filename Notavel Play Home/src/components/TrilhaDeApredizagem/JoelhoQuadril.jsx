import React from 'react'

const JoelhoQuadril = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: 'Os Segredos da Mobilidade para encaminhar o agachamento: Reduza as Dores.',
    },
    {
      titulo: 'Aula 02',
      descricao: 'Biomecânica do Leg Press: como gerar mais esforço para glúteo ou quadríceps nessa máquina',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Afundo e a utilização do step no pé da frente ou atrás: Uma análise Biomecânica',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Dor anterior no joelho: como organizar uma aula para clientes com esse desconforto',
    },
    {
      titulo: 'Aula 05',
      descricao: 'Condromalácia patelar: como orientar exercícios de cadeia cinética aberta e fechada',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-16 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-4">
        {/* Texto lateral esquerdo */}
        <div className="w-[300px] shrink-0">
          <p className="text-left text-sm mb-2">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug text-left">
            <span className="text-sky-400">Joelho</span> e <span className="text-purple-400">Quadril</span>
          </h3>
          <p className="text-left text-sm mt-4">
            Seja uma referência no atendimento dos clientes com dor nessas articulações.
          </p>
        </div>

        {/* Cards lado a lado */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src="/icones/icone03.svg" alt={aula.titulo} className="h-12 mb-2" />
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

export default JoelhoQuadril