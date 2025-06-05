// src/components/Footer.jsx
import React from 'react';

// Importar o logo da imagem fornecida
import personalTrainerAcademyLogo from '../assets/logo.webp'; // Caminho para a imagem do logo

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Faixa Superior: Cor sólida amarela, não gradiente */}
      <div className="h-4 bg-yellow-400">
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
        {/* Lado Esquerdo: Logo */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          {/* Usando a imagem importada como logo */}
          <img
            src={personalTrainerAcademyLogo}
            alt="Personal Trainer Academy Logo"
            className="h-10 md:h-12 object-contain" // Ajuste o 'h-10' ou 'h-12' conforme o tamanho desejado. 'object-contain' para manter proporção.
          />
        </div>

        {/* Lado Direito: Texto de Copyright */}
        <div className="text-yellow-400 text-sm md:text-base">
          Copyright © 2023 Personal Trainer Academy. Direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;