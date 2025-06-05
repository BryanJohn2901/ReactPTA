import React from 'react';
// import GoogleSafeBrowse from './GoogleSafeBrowse.jsx'; // Ou o caminho correto para o seu componente de ícone - COMENTADO
// import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp - COMENTADO

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1: Logo e Direitos Autorais */}
        <div className="flex flex-col items-start">
          {/* Substitua esta div pela sua imagem real do logo */}
          <div className="w-40 h-auto mb-4">
            {/* <img src="/src/assets/personal-trainer-academy-logo.png" alt="Personal Trainer Academy Logo" /> Ajuste o caminho da imagem do logo - COMENTADO */}
          </div>
          <p className="text-gray-400 text-sm">
            Personal Trainer Academy 2023©
          </p>
          <p className="text-gray-400 text-sm">
            Todos os direitos reservados
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div>
          <h3 className="text-red-600 font-bold text-lg mb-4">Contato</h3>
          <a
            href="https://wa.me/554199805007" // Substitua pelo número real do WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            {/* <FaWhatsapp className="mr-2 text-xl" /> COMENTADO */}
            554199805007
          </a>
        </div>

        {/* Coluna 3: Políticas */}
        <div>
          <h3 className="text-red-600 font-bold text-lg mb-4">Políticas</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Políticas de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termo de Uso
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Site Seguro */}
        <div>
          <h3 className="text-red-600 font-bold text-lg mb-4">Site Seguro</h3>
          {/* Componente para o selo Google Safe Browse - COMENTADO */}
          {/* <GoogleSafeBrowse /> COMENTADO */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;