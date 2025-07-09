import React from 'react'

const PeitoCostasBracos = () => {
  const aulas = [
    {
      titulo: 'Aula 01',
      descricao: 'Estratégias biomecânicos nas puxadas e remadas para desenvolver grande dorsal, rombóides, trapézio e redondo maior',
      icone: '/icones/icone01.svg',
    },
    {
      titulo: 'Aula 02',
      descricao: 'Aprendendo o Método 3/7 com Jonato Prestes',
      icone: '/icones/icone02.svg',
    },
    {
      titulo: 'Aula 03',
      descricao: 'Como hipertrofiar ombro em todas as suas porções',
      icone: '/icones/icone03.svg',
    },
    {
      titulo: 'Aula 04',
      descricao: 'Músculo Peitoral Maior e os segredos para desenvolvê-lo com qualidade.',
      icone: '/icones/icone04.svg',
    },
    {
      titulo: 'Aula 05',
      descricao: 'O bíceps braquial tem mesmo 2 cabeças? Novos achados sobre esse músculo.',
      icone: '/icones/icone05.svg',
    },
  ]

  return (
    <div className="w-full bg-[#080B3C] py-16 px-4 text-white">
      <div className="max-w-[1200px] mx-auto flex gap-4">
        {/* Texto lateral esquerdo */}
        <div className="w-[300px] shrink-0">
          <p className="text-sm mb-2 text-left">Série Prática</p>
          <h3 className="text-2xl font-bold leading-snug text-left">
            Peito, <span className="text-sky-400">costas</span> e <span className="text-purple-400">braços</span>.
          </h3>
          <p className=" text-left text-sm mt-4">
            Domine a prescrição e orientação de treinos avançados para força e hipertrofia.
          </p>
        </div>

        {/* Todos os cards lado a lado com tamanho fixo */}
        <div className="flex gap-4 w-full justify-between">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="w-[160px] bg-gradient-to-b from-[#0B0F47] to-[#080B3C] border border-white/20 rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <img src={aula.icone} alt={aula.titulo} className="h-12 mb-2" />
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

export default PeitoCostasBracos