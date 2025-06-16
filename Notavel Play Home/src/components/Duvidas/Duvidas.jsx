import React from 'react'
import Cards from './Cards'

const Duvidas = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <div
        className="max-w-[700px] mx-auto rounded-2xl text-white p-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/bgDuvidas.webp')" }}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">
          Ainda tem dúvidas?
        </h2>
        <p className="mt-4 text-white text-base max-w-[500px]">
          Não deixe que suas dúvidas te façam perder essa oportunidade de transformar sua carreira ainda em 2024. Fale com nossa equipe.
        </p>
        <div className="mt-6">
          <button className="bg-[#E60046] text-white font-bold px-6 py-3 rounded-md shadow-md hover:bg-[#cc0040] transition">
            FALAR COM EQUIPE
          </button>
        </div>
      </div>
      <p className="text-center text-blue-600 font-semibold mt-5">
        Veja o retorno dos nossos alunos Notáveis.
      </p>

      <Cards/>
    </div>
  )
}

export default Duvidas
