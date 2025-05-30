// src/components/Footer.jsx
import React from "react";
import { Youtube, Instagram, Link } from "lucide-react"; // Pode trocar por SVGs inline se necessário

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-6 px-4">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logotipo Notável */}
        <div className="flex items-center gap-2">
          <img src="/notavel.png" alt="Notável Play" className="h-6" />
          <span className="text-sm">
            Notável <span className="font-semibold">Play</span>
          </span>
        </div>

        {/* Texto de copyright */}
        <p className="text-xs text-pink-600 text-center">
          Copyright © 2024 Personal Trainer Academy. Direitos reservados.
        </p>

        {/* Ícones sociais */}
        <div className="flex items-center gap-4 text-pink-600">
          <a href="#"><Link className="w-5 h-5" /></a>
          <a href="#"><Youtube className="w-5 h-5" /></a>
          <a href="#"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
