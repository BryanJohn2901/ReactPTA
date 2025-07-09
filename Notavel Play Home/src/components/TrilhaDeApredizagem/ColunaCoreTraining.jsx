import React from 'react'

const ColunaCoreTraining = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: '6 Testes simples para avaliar o gatilho da dor lombar nos seus clientes e saber o que fazer nos exercícios.',
    },
    {
      titulo: 'Aula 02',
      descricao: 'Como reduzir riscos de Lesão na Coluna dos seus clientes em exercícios abdominais.',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Big 3: Os Três exercícios Indispensáveis para os seus alunos com Dor Lombar',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Hipopressivo x Bracing Abdominal: Qual o momento certo de usar cada técnica?',
    },
    {
      titulo: 'Aula 05',
      descricao: 'Bracing Abdominal: Como Criar um Abdômen Forte para Proteger a sua Coluna',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-10 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-4 flex-row-reverse">
        {/* Texto lateral direito */}
        <div className="w-[300px] shrink-0 text-right">
          <p className="text-sm mb-2">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug">
            <span className="text-sky-400">Coluna</span> e <span className="text-purple-400">Core Training</span>
          </h3>
          <p className="text-sm mt-4">
            Destaque-se na reabilitação e fortalecimento dessa articulação.
          </p>
        </div>

        {/* Cards lado a lado */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src="/icones/icone04.svg" alt={aula.titulo} className="h-12 mb-2" />
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

export default ColunaCoreTraining
