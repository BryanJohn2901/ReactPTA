import React from 'react'

const Notaveis = () => {
  return (
    <div className="w-full bg-white text-center py-20 px-4">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
          Faça parte dos 2% de Personal Trainers <br />
          <span className="text-blue-800">Notáveis.</span>
        </h2>
        <p className="text-base md:text-lg text-black mt-6 leading-relaxed">
          Sabe qual é a diferença entre os 2% dos Profissionais que são reconhecidos e faturam acima de 10 mil
          por mês e os 98% restantes? Eles aprendem, aplicam e vendem. A nossa Escola foi feita para que você
          também seja um Personal Notável.
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-block hover:underline"
        >
          Veja como funciona a maior escola para Personal Trainers do País.
        </a>
        <div className="mt-8">
          <img
            src="/notaveis/img01.webp"
            alt="Personal Notável"
            className="mx-auto w-full"
          />
        </div>

        {/* Bloco extra */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">
            Conteúdo
          </h2>
          <p className="text-base text-black mt-4 leading-relaxed">
            Em uma plataforma online de ponta, acessível também pelo celular, contamos com os melhores especialistas do país,
            divididos em mais de 300 aulas para te ensinar tudo que você precisa para fazer a sua carreira crescer.
            Do básico ao avançado com aquilo que a faculdade não te ensinou: ter um atendimento de referência,
            conquistar alunos e faturar alto com a sua profissão.
          </p>
          <div className="flex justify-center mt-6">
            <img src="/icones/barraVertical.svg" alt="Linha vertical" className="w-[20px]" />
          </div>

          <div className="mt-8">
          <img
            src="/notaveis/img02.webp"
            alt="Personal Notável"
            className="mx-auto w-full"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Notaveis
