// src/components/Rodape.jsx

import React from "react";

const Rodape = () => {
  return (
    <footer className="bg-white border-t border-blue-500 pt-12 pb-6 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Coluna esquerda: logo e texto */}
        <div>
          <img src="/logo.webp" alt="PTA Editora" className="h-12 mb-3" />
          <p className="text-sm text-gray-700 font-inter mb-4">
            O Conhecimento que Impulsiona Sua Carreira ao Próximo Nível
          </p>

          {/* Links de navegação */}
          <ul className="flex flex-wrap gap-4 text-sm font-inter font-semibold text-blue-700">
            <li className="hover:underline cursor-pointer">Visão Geral</li>
            <li className="hover:underline cursor-pointer">Livros</li>
            <li className="hover:underline cursor-pointer">Preço</li>
            <li className="hover:underline cursor-pointer">Carreiras</li>
            <li className="hover:underline cursor-pointer">Suporte</li>
            <li className="hover:underline cursor-pointer">Política de privacidade</li>
          </ul>
        </div>
      </div>

      {/* Linha e copyright */}
      <div className="max-w-[1200px] mx-auto mt-8 border-t border-blue-500 pt-4 text-center text-sm text-gray-600 font-inter">
        © 2024 Personal Trainer Academy. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Rodape;
