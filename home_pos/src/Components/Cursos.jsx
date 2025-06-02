import React from 'react'
import { BookOpen, Users } from 'lucide-react'

// Lista de cursos com informações de professor, imagem e número de alunos
const cursos = [
  {
    titulo: 'Biomecânica',
    professor: 'André Albuquerque',
    avatar: '/andre_card.webp',
    alunos: 2933,
    imagem: '/biomecanica_card.webp',
  },
  {
    titulo: 'Saúde da mulher',
    professor: 'Rafa Lund',
    avatar: '/rafa_lund_card_mini.webp',
    alunos: 2401,
    imagem: '/rafa_lund_card.webp',
  },
  {
    titulo: 'Jiu-Jitsu, Judô e Wrestling',
    professor: 'Charles Nardeli',
    avatar: '/wrestling_card_mini.webp',
    alunos: 232,
    imagem: '/wrestling_card.webp',
  },
  {
    titulo: 'Fisiologia do exercício',
    professor: 'Igor Conterato',
    avatar: '/fisiologia_do_exercício_card_mini.webp',
    alunos: 589,
    imagem: '/fisiologia_do_exercício_card.webp',
  },
  {
    titulo: 'Bodybuilding',
    professor: 'Walter Krause',
    avatar: '/bodybuilding_card_mini.webp',
    alunos: 1982,
    imagem: '/bodybuilding_card.webp',
  },
  {
    titulo: 'Treinamento funcional',
    professor: 'Professor 05',
    avatar: '/treinamento_funcional_card_mini.webp',
    alunos: 1329,
    imagem: '/treinamento_funcional_card.webp',
  },
]

const Cursos = () => {
  return (
    // Seção com fundo claro e espaçamento vertical
    <section id='cursos' className="bg-[#f5fafe] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* Título da seção */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-[#FE7750] font-semibold mb-2 text-sm sm:text-base">
            Cursos populares
          </p>
          <h2 className="text-[#014237] text-2xl sm:text-3xl md:text-4xl font-bold">
            Conheça nossas Pós-Graduações
          </h2>
        </div>

        {/* Grid responsiva para os cards de curso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-4">
              
              {/* Imagem do curso */}
              <img
                src={curso.imagem}
                alt={curso.titulo}
                className="rounded-xl mb-4 w-full h-auto object-cover"
              />

              {/* Título do curso */}
              <h3 className="text-[#014237] font-semibold mb-2 text-base sm:text-lg">
                {curso.titulo}
              </h3>

              {/* Informações do professor */}
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={curso.avatar}
                  alt={curso.professor}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm font-medium">
                  {curso.professor}
                </span>
              </div>

              <hr className="mb-4" />

              {/* Informações adicionais */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-[#FE7750]" />
                  Aulas
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#FE7750]" />
                  {curso.alunos.toLocaleString()} Alunos
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cursos
