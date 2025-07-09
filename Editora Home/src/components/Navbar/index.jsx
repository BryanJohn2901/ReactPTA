import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    // Navbar fixa com z-index alto
    <nav className="fixed top-0 w-full bg-[#f0f8ff] shadow-md z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.webp" alt="Logo PTA Editora" className="h-12 w-auto" />
        </div>

        {/* Ícone mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 bg-gradient-to-r from-white via-[#eef2ff] to-white rounded-full px-6 py-2 shadow-md">
          <li className="font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Home</li>
          <li className="font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Livros</li>
          <li className="font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Box</li>
          <li className="font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Lançamentos</li>
        </ul>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 space-y-2 shadow-md">
          <li className="list-none font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Home</li>
          <li className="list-none font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Livros</li>
          <li className="list-none font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Box</li>
          <li className="list-none font-inter font-semibold text-slate-900 hover:text-blue-700 cursor-pointer">Lançamentos</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
