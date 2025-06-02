import React from 'react'

const Newsletter = () => {
  return (
    // Seção com fundo verde escuro e espaçamento
    <section className="bg-[#014237] py-20 px-4 text-center">
      
      {/* Título principal com quebra condicional */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        Receba conteúdos e novidades <br className="hidden md:block" /> em primeira mão
      </h2>

      {/* Formulário adaptável ao tamanho da tela */}
      <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        
        {/* Campo de entrada de e-mail */}
        <input
          type="email"
          placeholder="Coloque seu melhor e-mail"
          className="flex-1 px-6 py-3 rounded-full text-sm outline-none w-full"
          required
        />

        {/* Botão de envio */}
        <button
          type="submit"
          className="bg-[#FE7750] hover:bg-[#fa6a41] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto"
        >
          Assinar
        </button>
      </form>
    </section>
  )
}

export default Newsletter
