import React from 'react'
import { Users, UserCheck, BadgeCheck } from 'lucide-react'

// Dados que representam indicadores de evolução
const dados = [
  {
    titulo: '+20.000 alunos',
    descricao: 'Já passaram pelas pós da PTA',
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    titulo: '+ de 100 professores especialistas',
    descricao: 'Todos atuantes no mercado',
    icon: <UserCheck className="w-6 h-6 text-white" />,
  },
  {
    titulo: '99% de aprovação',
    descricao: 'Alunos satisfeitos com a transformação gerada',
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
  },
]

const Linha_evolucao = () => {
  return (
    // Seção com fundo e espaçamento
    <section className="bg-[#f5fafe] py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* Subtítulo e título principal */}
        <p className="text-[#FE7750] font-semibold text-sm sm:text-base mb-2">
          Linha de evolução
        </p>
        <h2 className="text-[#014237] text-2xl sm:text-3xl md:text-4xl font-bold mb-12 leading-tight">
          O caminho do conhecimento até<br className="hidden md:block" /> o resultado
        </h2>

        {/* Grid responsiva dos cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dados.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center"
            >
              {/* Ícone dentro de círculo laranja */}
              <div className="bg-[#FE7750] w-16 h-16 flex items-center justify-center rounded-full mb-6">
                {item.icon}
              </div>

              {/* Título de cada item */}
              <h3 className="text-[#014237] font-semibold mb-2 text-base sm:text-lg">
                {item.titulo}
              </h3>

              {/* Descrição de apoio */}
              <p className="text-gray-700 text-sm sm:text-base">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Linha_evolucao
