// src/components/Navbar.jsx
import React from "react";

// Componente Navbar estilizado com Tailwind CSS
const Navbar = () => {
  return (
    <header className="bg-black border-b-2 border-green-600">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo e texto */}
        <div className="flex items-center space-x-2">
          {/* Ícone/Logo */}
          <img
            src="/logo_coluna.png" // substitua pelo caminho da sua logo
            alt="Logo"
            className="w-[180px]"
          />
        </div>

        {/* Botão verde à direita */}
        <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default Navbar;
