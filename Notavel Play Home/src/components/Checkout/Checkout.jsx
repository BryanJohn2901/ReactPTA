import React from 'react'

const Checkout = () => {
  return (
    <div className="w-full bg-[#0A0F1C] text-white py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Invista agora na sua carreira!</h2>

      <div className="max-w-[500px] mx-auto bg-[#0F172A] rounded-xl p-6 text-center shadow-[0_0_30px_#E60046] relative">

        {/* Imagem da caixa */}
        <img
          src="/itemCheckout.webp"
          alt="Box Notável Play"
          className="mx-auto mb-6 w-full max-w-[400px]"
        />

        {/* Título */}
        <h3 className="text-pink-600 font-semibold mb-4">
          Notável Play: Assine Agora
        </h3>

        {/* Lista */}
        <ul className="text-sm space-y-2 mb-6">
          <li>Notável Play</li>
          <li>Séries Práticas</li>
          <li>Aula Ao Vivo</li>
          <li>Técnicas Avançadas</li>
          <li>Trilhas de Aprendizagem Certificadas</li>
          <li>
            Diversos Cursos em Áreas Específicas: <br />
            <span className="text-xs">
              Biomecânica, Emagrecimento, Hipertrofia, Marketing para Personal Trainers
            </span>
          </li>
        </ul>

        {/* Preço */}
        <p className="text-pink-500 text-lg font-medium">Por apenas</p>
        <p className="text-3xl font-bold mb-6">R$ 37,00 por mês</p>

        {/* Botão */}
        <div>
          <button className="bg-[#E60046] text-white font-bold px-6 py-3 rounded-md shadow hover:bg-[#cc0040] transition">
            QUERO SER NOTÁVEL
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
