import React from 'react'

// Lista de professores com nome, imagem e descrição
const professores = [
  {
    nome: 'André Albuquerque',
    imagem: '/andre.jpg',
    descricao: 'Formado em Educação Física pela USP. Especialista em treinamento de força e performance.',
  },
  {
    nome: 'Igor Conterato',
    imagem: '/igor_conterato.jpg',
    descricao: 'Doutor em Saúde Pública (USP) e especialista em Fisiologia do Exercício e Biomecânica.',
  },
  {
    nome: 'Rafael Tonietto',
    imagem: '/rafael_tonietto.jpg',
    descricao: 'Atuação com foco em estratégias de emagrecimento e hipertrofia. Educador físico há 15 anos.',
  },
  {
    nome: 'Walter Krause',
    imagem: '/walter_krause.jpg',
    descricao: 'Mestre em Educação Física. Referência em treinamento resistido e estética corporal.',
  },
  {
    nome: 'Santiago Paes',
    imagem: '/santiago_paes.jpg',
    descricao: 'Especialista em treinamento funcional, biomecânica e saúde da mulher.',
  },
]

const Professores = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto">
      {professores.map((prof, index) => (
        <div
          key={index}
          className="relative flex-1 h-[420px] group overflow-hidden"
        >
          {/* Imagem do professor */}
          <img
            src={prof.imagem}
            alt={prof.nome}
            className="w-full h-full object-cover"
          />

          {/* Nome fixo no rodapé */}
          <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-2 font-semibold text-sm z-10">
            {prof.nome}
          </div>

          {/* Overlay com descrição (escondido por padrão, aparece no hover) */}
          <div className="absolute inset-0 bg-black/80 text-white px-6 py-8 text-sm flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h3 className="text-lg font-bold mb-2">{prof.nome}</h3>
            <p className="text-sm">{prof.descricao}</p>
            <button className="mt-4 bg-[#FE7750] hover:bg-[#fa6a41] text-white px-4 py-2 rounded-full text-sm self-start">
              Saiba Mais
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Professores
