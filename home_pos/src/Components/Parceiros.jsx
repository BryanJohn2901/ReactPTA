import React from 'react'

// Lista de logos de parceiros
const logos = [
  '/personal-fit.svg',
  '/total-health-11.svg',
  '/Sicredi-15.svg',
  '/Atualize-17.svg',
  '/parceiro03.webp',
  '/parceiro04.webp',
]

const Parceiros = () => {
  return (
    // Seção principal com fundo branco
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-[1200px] mx-auto">

        {/* Título e descrição da seção */}
        <h2 className="text-[#014237] text-3xl md:text-4xl font-bold mb-4">
          Mais de 20 parceiros confiáveis
        </h2>
        <p className="text-gray-600 text-sm mb-10 max-w-xl mx-auto">
          A educação é a base do crescimento pessoal e social, capacitando
          indivíduos com conhecimento, habilidades e pensamento crítico.
        </p>

        {/* Container dos logos com responsividade e alinhamento central */}
        <div className="bg-[#014237] p-6 md:p-8 rounded-2xl flex flex-wrap justify-center items-center gap-8 sm:gap-[50px]">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-6 sm:h-8 max-w-[160px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Parceiros
