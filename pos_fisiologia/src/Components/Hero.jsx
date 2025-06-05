import React, { useState } from 'react'
import Popup from './Popup'

const Hero = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false)

  return (
    <section className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative flex items-center bg-[url('/hero_banner_mobile.jpg')] md:bg-[url('/hero_banner.jpg')]">
      {/* Sobreposição de gradiente azul */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#00bcd4]/30 pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Texto principal do Hero */}
        <div className="max-w-xl font-sans mt-[300px] md:mt-0">
          <div className="mb-4">
            <img
              src="/logo_fisiologia.webp"
              alt="Logo Fisiologia do Exercício"
              className="h-12 mb-2"
            />
           
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-poppins">
            Pós-graduação em Fisiologia do Exercício. Aplicada à reabilitação e prescrição para Grupos Especiais
          </h1>

          <p className="text-white text-base md:text-lg mb-6">
            Aprenda como prescrever de forma segura e eficaz para{' '}
            <span className="text-cyan-400 font-semibold">grupos especiais</span>, e torne-se o Personal Trainer mais disputado do Mercado!
          </p>

          {/* Botões */}
          <div className="flex flex-col gap-4">
            <button
              className="bg-cyan-400 text-white font-bold px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
              onClick={() => setMostrarPopup(true)}
            >
              CLIQUE AQUI E FAÇA SUA PRÉ MATRÍCULA
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5541998458801&text=Ol%C3%A1,%20participei%20da%20Biomec%C3%A2nica%20Experience%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20P%C3%B3s%20de%20Biomec%C3%A2nica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition text-center mb-4"
            >
              OU FALE COM UM ESPECIALISTA
            </a>
          </div>
        </div>
      </div>

      {mostrarPopup && <Popup onClose={() => setMostrarPopup(false)} />}
    </section>
  )
}

export default Hero
