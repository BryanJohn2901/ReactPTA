// Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <section
      className="h-screen w-full relative text-white"
      style={{ backgroundImage: "url('/banner_biomecanica.webp')" }}
    >
      {/* Overlay preto com opacidade */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Conteúdo sobreposto ao overlay */}
      <div className="relative z-10 flex items-center h-full px-6">
        <div className="w-[60%] max-w-[1200px] m-auto">
          <h1 className="text-[48px] md:text-[36px] font-bold mb-4">
            BIOMECÂNICA DA COLUNA VERTEBRAL: 
          </h1>
          <h2 className="text-[24px] md:text-[24px] mb-4">
            GUIA DEFINITIVO PARA PREVENIR LESÕES E FORTALECER O CORE
          </h2>
          <p className="text-lg text-gray-200 mb-6 max-w-xl">
            Entenda, proteja e fortaleça a coluna com exercícios seguros e biomecânica aplicada.
          </p>
          <p className="text-[32px] text-gray-200 font-bold mb-6 max-w-xl">
            R$ 9,99
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-full font-semibold">
            Comprar agora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
