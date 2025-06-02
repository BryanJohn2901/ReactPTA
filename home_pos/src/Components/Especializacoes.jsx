import React from 'react'

// Lista de especializações com título e ícone
const cursos = [
  { titulo: 'Musculação e Estética (Bodybuilding)', icon: '/bodybuilding.svg' },
  { titulo: 'Biomecânica Aplicada ao Movimento', icon: '/biomecanica.svg' },
  { titulo: 'Saúde Feminina Integrada', icon: '/saude_feminina.svg' },
  { titulo: 'Treinamento Funcional e Performance', icon: '/treinamento_funcional.svg' },
  { titulo: 'Carreira e Posicionamento Profissional', icon: '/carreira.svg' },
  { titulo: 'Jiu-jitsu, judô e wrestling', icon: '/jiu_jitsu.svg' },
  { titulo: 'Fisiologia do exercício', icon: '/fisiologia_do_exercicio.svg' },
]

const Especializacoes = () => {
  return (
    // Seção com padding e fundo branco
    <section id='especializacoes' className="bg-white py-20 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        
        {/* Lado esquerdo - texto e botão */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[#FE7750] font-semibold text-sm mb-2">
            Categoria superior
          </p>

          <h2 className="text-[#014237] font-bold text-3xl md:text-4xl mb-6 leading-tight">
            Especializações<br />práticas e com<br />foco em resultado
          </h2>

          <button className="bg-[#FE7750] hover:bg-[#fa6a41] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
            Ver todos os cursos
          </button>
        </div>

        {/* Lado direito - cards de cursos */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm border p-6 text-center flex flex-col items-center justify-center transition hover:shadow-md
                ${index === 0 ? 'lg:col-span-3' : ''}`}
            >
              {/* Ícone da especialização */}
              <img src={curso.icon} alt={curso.titulo} className="w-[80px] mb-4" />

              {/* Título da especialização */}
              <h3 className="text-[#012C23] font-semibold text-sm leading-snug">
                {curso.titulo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Especializacoes
