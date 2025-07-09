import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-[#080B3C] text-white shadow-md rounded-b-2xl">
      {/* Container centralizado com largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src="/logoNotavelPlay.webp" alt="Logo Notável Play" className="h-8 md:h-10" />
        </div>

        {/* Menu de navegação */}
        <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-light">
          {[
            'Trilhas de Aprendizado',
            'Professores',
            'Conteúdo',
            'Notável',
            'Assine',
            'Login'
          ].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="group-hover:text-pink-500 transition-colors">
                {item}
              </span>

              {/* Separador visual */}
              {index < 5 && (
                <span className="hidden md:inline-block mx-2 text-pink-700">|</span>
              )}

              {/* Linha de destaque ao passar o mouse */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar