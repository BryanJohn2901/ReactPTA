import React from 'react'

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 p-6 rounded-xl text-white w-full max-w-md relative shadow-xl">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-xl"
        >
          ×
        </button>

        {/* Logo */}
        <img src="/logo_fisiologia.webp" alt="Logo" className="h-10 mx-auto mb-4" />

        {/* Mensagem */}
        <p className="text-center font-semibold mb-6">
          Preencha os dados para finalizar sua inscrição<br />e aguarde um instante.
        </p>

        {/* Formulário simulado */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome e sobrenome"
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
          />
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
          />
          <input
            type="tel"
            placeholder="+55 (__) _____-____"
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-cyan-600 font-bold py-2 rounded hover:bg-gray-100 transition"
          >
            INSCREVA-SE →
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup
