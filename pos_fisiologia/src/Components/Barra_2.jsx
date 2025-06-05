import React from 'react'

const Barra_2 = () => {
  return (
    <section className="bg-gray-200 py-6 font-sans">
      {/* Barra azul com texto e imagem centralizada */}
      <div className="relative bg-cyan-400 flex items-center justify-between text-white text-center py-6 px-4 md:px-12">
        
        {/* Texto esquerdo (visível apenas em md+) */}
        <div className="text-lg font-semibold hidden md:block w-1/3 text-right pr-6 font-poppins">
          Mercado de Trabalho da <br />
          Personal Trainer Academy
        </div>

        {/* Texto central para mobile apenas */}
        <div className="block md:hidden text-lg font-semibold font-poppins w-full">
          Mercado de Trabalho da <br />
          Personal Trainer Academy
        </div>

        {/* Imagem central sobreposta (visível apenas em md+) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 md:w-72 z-10 hidden md:block">
          <img
            src="/computador2.webp"
            alt="Laptop Mercado"
            className="w-full h-auto"
          />
        </div>

        {/* Texto direito (visível apenas em md+) */}
        <div className="text-lg font-semibold hidden md:block w-1/3 text-left pl-6 font-poppins">
          Mercado de Trabalho da <br />
          Personal Trainer Academy
        </div>
      </div>

      {/* Texto explicativo abaixo */}
      <div className="max-w-4xl mx-auto mt-6 px-4 text-center text-gray-800 text-base leading-relaxed">
        Um marketplace exclusivo à disposição de todos os formados na Pós-graduação. Com inscrição gratuita e total liberdade para compartilhar seus dados de prestação de serviços e assim atrair alunos diretamente até você. Nossa equipe de marketing irá trabalhar para que este Marketplace alcance potenciais clientes aos inscritos.
      </div>
    </section>
  )
}

export default Barra_2
