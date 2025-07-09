import React from 'react'
import CarreiraCarrossel from './CarreiraCarrossel'


const Carreira = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        {/* Título com gradiente azul/roxo */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent mb-4">
          A Escola feita para fazer a sua carreira crescer em todos os sentidos.
        </h2>

        {/* Texto descritivo */}
        <p className="text-sm md:text-base text-black font-medium">
          Após formar milhares de alunos reunimos aqui os conhecimentos que compõem <br />
          um Personal Trainer de sucesso.
        </p>
      </div>
      <CarreiraCarrossel />
    </div>
  )
}

export default Carreira
