// src/components/Navbar.jsx
import React from 'react';
// Não precisamos mais do import 'logo from ...'
// A logo será referenciada diretamente a partir da pasta public

const Navbar = () => {
  const menuItems = [
    { text: 'Trilhas de Aprendizado', href: '#' },
    { text: 'Professores', href: '#' },
    { text: 'Conteúdo', href: '#' },
    { text: 'Notável+', href: '#' },
    { text: 'Assine', href: '#' },
    { text: 'Login', href: '#' },
  ];

  return (
    <nav className="bg-midnight-blue py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <a href="#" className="flex items-center">
            {/* O caminho agora é direto, partindo da raiz do seu servidor de desenvolvimento/produção */}
            {/* Se a imagem estiver em public/logo_notavel_play.webp, o caminho é /logo_notavel_play.webp */}
            <img src="/logo_notavel_play.webp" alt="Notável Play Logo" className="h-8 md:h-10" />
          </a>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="text-white text-lg font-medium hover:text-primary relative group transition-colors duration-300"
            >
              {item.text}
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* Botão para Menu Mobile (você pode implementar a lógica para abrir/fechar o menu) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;