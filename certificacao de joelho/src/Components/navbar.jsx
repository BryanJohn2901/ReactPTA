// src/components/Navbar.jsx
import React from "react";

// Componente Navbar estilizado com Tailwind CSS
const Navbar = () => {
  return (
    <header className="bg-black border-b-2" style={{ borderColor: '#D00727' }}>
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo sozinha à esquerda */}
        <img
          src="/logo_expertise_em_joelho.png"
          alt="Logo Expertise em Ombro"
          className="w-[180px] h-auto"
        />

        {/* Botão vermelho personalizado à direita */}
        <button
          className="text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          style={{ backgroundColor: '#D00727' }}
        >
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default Navbar;