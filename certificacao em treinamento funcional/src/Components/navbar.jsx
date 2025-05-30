// src/components/Navbar.jsx
import React from "react";

// Componente Navbar estilizado com Tailwind CSS
const Navbar = () => {
  return (
    <header className="bg-black border-b-2 border-green-600">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo sozinha à esquerda */}
        <img
          src="/logo_tf.png"
          alt="Logo Expertise em Ombro"
          className="w-[180px] h-auto"
        />

        {/* Botão verde à direita */}
        <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default Navbar;
