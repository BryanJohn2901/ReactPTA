import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-2 px-4 font-sans">
      {/* Linha degradê superior */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mb-8" />

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base pb-10 text-center md:text-left">
        
        {/* Coluna 1 - Logo e direitos */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo_pta.webp" alt="Logo PTA" className="w-[180px] mb-2" />
          <p>Personal Trainer Academy</p>
          <p>2025© Todos os direitos<br />reservados</p>
        </div>

        {/* Coluna 2 - Contato */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-cyan-400 font-bold mb-2 font-poppins">Contato</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaWhatsapp className="text-cyan-400" />
            +55 41 99681-2350
          </p>
        </div>

        {/* Coluna 3 - Políticas */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-cyan-400 font-bold mb-2 font-poppins">Políticas</h4>
          <ul>
            <li className="mb-1 hover:underline cursor-pointer">Políticas de Privacidade</li>
            <li className="hover:underline cursor-pointer">Termo de Uso</li>
          </ul>
        </div>

        {/* Coluna 4 - Selo de segurança */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-cyan-400 font-bold mb-2 font-poppins">Site Seguro</h4>
          <img
            src="/google.webp"
            alt="Google Safe"
            className="w-full max-w-[150px] mx-auto md:mx-0"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
