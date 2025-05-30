import React from 'react'
import { CheckCircle } from 'lucide-react'

// Lista de benefícios exibidos no componente
const beneficios = [
  'Clareza para justificar cada exercício e carga.',
  'Redução drástica de erros e improvisos.',
  'Planilha automatizada que acelera a montagem de treinos.',
  'Maior retenção e satisfação dos alunos.',
]

const Beneficios = () => {
  return (
    <section className="bg-[#fdfbf4] py-16">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
        Benefícios imediatos após o curso
      </h2>

      {/* Container com grid para os benefícios */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {beneficios.map((beneficio, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-black text-white p-6 rounded-xl shadow-md"
          >
            {/* Ícone de check verde */}
            <CheckCircle className="text-green-500" size={32} />

            {/* Texto do benefício */}
            <p className="text-sm md:text-base leading-relaxed">
              {beneficio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Beneficios
