import React from 'react'
import CardsItens from './CardsItens'

const Cards = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0c0c80] to-[#3a0ca3] text-white text-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold max-w-[800px] mx-auto">
        Tudo que você precisa para ser um Personal reconhecido <br />
        e aumentar o seu faturamento em um só lugar.
      </h2>

      <CardsItens />

      {/* Botão abaixo dos cards */}
      <div className="flex justify-center">
        <button className="bg-[#E60046] text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-[#cc0040] transition">
          QUERO SER UM PERSONAL NOTÁVEL
        </button>
      </div>
    </div>
  )
}

export default Cards
