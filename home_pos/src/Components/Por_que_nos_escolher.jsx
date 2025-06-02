import React from 'react'

const Por_que_nos_escolher = () => {
  return (
    // Seção principal com fundo branco e espaçamento
    <section className="bg-white py-20 px-4">
      {/* Container centralizado e responsivo */}
      <div className="max-w-[900px] mx-auto text-center">

        {/* Subtítulo destacado */}
        <p className="text-[#FE7750] font-semibold text-sm mb-2">
          Por que nos escolher
        </p>

        {/* Título principal com quebra de linha apenas em telas médias para cima */}
        <h2 className="text-[#014237] text-3xl md:text-4xl font-bold mb-12">
          Mais de 15.000 alunos falam <br className="hidden md:block" />
          sobre nossos cursos e instrutores
        </h2>

        {/* Card de depoimento em destaque */}
        <div className="bg-[#f1f8ff] p-8 rounded-2xl shadow-sm text-center">
          <p className="italic text-gray-700 mb-6">
            “A melhor pós da minha vida. Hoje eu aplico tudo na prática. Me sinto mais confiante como treinador e vi minha carreira decolar. O suporte e os professores são fora da curva.”
          </p>

          <p className="font-semibold text-[#014237]">Maria Clara Silva</p>
          <p className="text-sm text-gray-600">Estudante de Marketing Digital</p>
        </div>
      </div>
    </section>
  )
}

export default Por_que_nos_escolher
