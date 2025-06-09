// src/components/Popup.jsx
import React from 'react';
import { X } from 'lucide-react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div className="bg-gradient-to-b from-purple-700 to-black p-8 rounded-2xl text-white w-full max-w-sm border border-purple-400 relative">

        {/* Botão de fechar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-purple-300">
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <img src="/logo_saude_da_mulher.svg" alt="Logo" className="w-40 mx-auto mb-4" />

        {/* Texto de instrução */}
        <p className="text-center text-sm font-bold mb-6 leading-snug">
          Preencha os dados para finalizar sua inscrição <br /> e aguarde um instante.
        </p>

        {/* Formulário */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome e sobrenome"
            className="w-full bg-transparent border border-white rounded px-4 py-2 text-sm placeholder-white outline-none"
          />
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            className="w-full bg-transparent border border-white rounded px-4 py-2 text-sm placeholder-white outline-none"
          />
          <input
            type="tel"
            placeholder="+5511912345678"
            className="w-full bg-transparent border border-white rounded px-4 py-2 text-sm placeholder-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition"
          >
            INSCREVA-SE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
