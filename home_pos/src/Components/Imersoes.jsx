import React from 'react'
import { Globe, Dot } from 'lucide-react'

// Dados das imersões com título, imagem, avatares e quantidade de alunos
const imersoes = [
  {
    titulo: 'Treinador Pro',
    imagem: '/treinador_pro_card.webp',
    avatares: ['/treinador_pro_card_mini01.webp', '/treinador_pro_card_mini02.webp'],
    alunos: 3300,
  },
  {
    titulo: 'Biomecânica Experience 2',
    imagem: '/biomecânica_experience_card.webp',
    avatares: ['/biomecânicae_xperience_card_mini01.webp', '/biomecânicae_xperience_card_mini02.webp'],
    alunos: 2900,
  },
  {
    titulo: 'Fisiologia do Exercício virtual',
    imagem: '/fisiologia_do_exercício_virtual_card.webp',
    avatares: ['/fisiologia_do_exercício_virtual_card_mini01.webp', '/fisiologia_do_exercício_virtual_card_mini01.webp'],
    alunos: 2000,
  },
  {
    titulo: 'Treinamento e Estética Feminina',
    imagem: '/treinamento_e_estética_feminina_card.webp',
    avatares: [
      '/treinamento_e_estética_feminina_card_mini01.webp',
      '/treinamento_e_estética_feminina_card_mini02.webp',
      '/treinamento_e_estética_feminina_card_mini03.webp',
    ],
    alunos: 2700,
  },
  {
    titulo: 'Bodybuilding Pro',
    imagem: '/bodybuilding_pro_card.webp',
    avatares: [
      '/bodybuilding_pro_card_mini.webp',
      '/bodybuilding_pro_card_mini02.webp',
      '/bodybuilding_pro_card_mini03.webp',
    ],
    alunos: 2500,
  },
  {
    titulo: 'Biomecânica Experience 1',
    imagem: '/biomecanica_experience_card.webp',
    avatares: ['/biomecanica_experience_card_mini.webp'],
    alunos: 3000,
  },
]

const Imersoes = () => {
  return (
    // Seção com fundo claro e espaçamento
    <section id='imersoes' className="bg-[#f5fafe] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* Título da seção */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-[#FE7750] font-semibold mb-2 text-sm sm:text-base">
            Imersões inovadoras
          </p>
          <h2 className="text-[#014237] text-2xl sm:text-3xl md:text-4xl font-bold">
            Um pouco da nossas imersões
          </h2>
        </div>

        {/* Grid responsiva de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imersoes.map((curso, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-4">

              {/* Imagem da imersão */}
              <img
                src={curso.imagem}
                alt={curso.titulo}
                className="rounded-xl mb-4 w-full h-auto object-cover"
              />

              {/* Título do card */}
              <h3 className="text-[#014237] font-semibold mb-3 text-base sm:text-lg">
                {curso.titulo}
              </h3>

              {/* Avatares dos professores */}
              <div className="flex -space-x-2 mb-4">
                {curso.avatares.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="prof"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <hr className="mb-4" />

              {/* Info sobre status e alunos */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-[#FE7750]" />
                  Online
                </div>
                <div className="flex items-center gap-1">
                  <Dot className="w-4 h-4 text-[#FE7750]" />
                  {curso.alunos.toLocaleString()} Ao vivo
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Imersoes
