import React from 'react'

const Ombro = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: 'Como compreender as dores no ombro com 6 testes biomecânicos práticos',
    },
    {
      titulo: 'Aula 02',
      descricao: '3 passos para avaliar e corrigir a discinese escapular',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Desconforto no Ombro durante os exercícios? Entenda o que fazer',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Como orientar exercícios específicos para síndrome do Impacto e bursite no ombro',
    },
    {
      titulo: 'Aula 05',
      descricao: 'O passo a passo para análise exames e exercícios para reabilitação com lesão no ombro',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-16 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-8">
        {/* Texto lateral esquerdo */}
        <div className="w-[300px] shrink-0">
          <p className=" text-left text-sm mb-2">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug text-left">
            <span className="text-sky-400">Trilha</span> <span className="text-purple-400">Ombro</span>
          </h3>
          <p className=" text-left text-sm mt-4">
            Reabilite essa articulação com segurança.
          </p>
        </div>

        {/* Cards lado a lado */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src="/icones/icone05.svg" alt={aula.titulo} className="h-12 mb-2" />
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

export default Ombro