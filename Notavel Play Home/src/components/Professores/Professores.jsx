import React from 'react'
import CarrosselProfessores from './CarrosselProfessores'
import CarrosselProfessores2 from './CarrosselProfessores2'

const Professores = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        {/* Título em gradiente azul/roxo */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Seus professores especialistas.
        </h2>

        {/* Subtítulo em preto */}
        <p className="text-base md:text-lg text-black font-medium">
          Tenha acesso ao conhecimento dos melhores e aprenda com as <br />
          maiores referências do mercado fitness.
        </p>
      </div>

      <CarrosselProfessores />
      <CarrosselProfessores2 />

      {/* Botão de chamada para ação */}
      <div className="mt-10">
        <button className="bg-[#E60046] text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-[#cc0040] transition">
          COMEÇAR AGORA
        </button>
      </div>
    </div>
  )
}

export default Professores
