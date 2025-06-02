import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Monitora o scroll para aplicar sombra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rola suavemente até a seção correspondente
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#FE7750] transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1200px] mx-auto w-full py-3 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-[100px] object-contain"
          />
        </div>

        {/* Botão mobile (hambúrguer) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-white font-bold text-sm tracking-wider uppercase">
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('especializacoes')}>Especialidades</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('sobre')}>Sobre</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('cursos')}>Cursos</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('imersoes')}>Imersões</li>
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 text-white font-bold text-sm tracking-wider uppercase px-6 pb-4 bg-[#FE7750]">
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('especializacoes')}>Especialidades</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('sobre')}>Sobre</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('cursos')}>Cursos</li>
          <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('imersoes')}>Imersões</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
