// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101010] py-12 px-4 md:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">

        {/* Coluna 1: Logo e Copyright */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Placeholder para o logo */}
          {/* Substitua com o caminho real da sua imagem de logo */}
          <img
            src="/path/to/your/personal-trainer-academy-logo.png" // Ex: /images/logo.png
            alt="Personal Trainer Academy Logo"
            className="h-12 mb-4" // Ajuste o tamanho conforme necessário
          />
          {/* Placeholder visual para o logo */}
          <div className="bg-blue-600 w-32 h-12 flex items-center justify-center text-white text-xs rounded mb-4">
              Logo Placeholder
          </div>
          <p className="text-sm opacity-80">Personal Trainer Academy 2025©</p>
          <p className="text-sm opacity-80">Todos os direitos reservados</p>
        </div>

        {/* Coluna 2: Políticas */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h3 className="text-[#306BE3] text-lg font-bold mb-4">Políticas</h3>
          <a href="#" className="text-white text-sm opacity-80 hover:opacity-100 mb-2">
            Políticas de Privacidade
          </a>
          <div className="w-24 border-b border-gray-600 mb-2"></div> {/* Linha divisória */}
          <a href="#" className="text-white text-sm opacity-80 hover:opacity-100">
            Termo de Uso
          </a>
        </div>

        {/* Coluna 3: Site Seguro */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h3 className="text-[#306BE3] text-lg font-bold mb-4">Site Seguro</h3>
          {/* Placeholder para o logo do Google Safe Browse */}
          {/* Substitua com o caminho real da sua imagem */}
          <img
            src="/path/to/your/google-safe-Browse-logo.png" // Ex: /images/google-safe-Browse.png
            alt="Google Safe Browse"
            className="h-16" // Ajuste o tamanho conforme necessário
          />
          {/* Placeholder visual para o logo do Google Safe Browse */}
          <div className="bg-gray-700 w-32 h-16 flex items-center justify-center text-white text-xs rounded">
              Google Safe Browse
          </div>
        </div>
      </div>

      {/* Linha Divisória Inferior do Footer */}
      <div className="mt-12 border-t border-gray-700 w-full"></div>
    </footer>
  );
};

export default Footer;