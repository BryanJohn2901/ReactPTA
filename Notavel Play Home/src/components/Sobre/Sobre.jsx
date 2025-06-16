import React from 'react'
import Contador from './Contador'

const Sobre = () => {
  return (
    <div className="w-full bg-white text-center py-20 px-4">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent mb-6">
          O que é a Notável Play?
        </h2>
        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          A Plataforma de assinatura da Personal Trainer Academy, a mais completa plataforma do Brasil para Personal Trainers. <br />
          Através de exemplos práticos e com forte conteúdo teórico, fornecemos as ferramentas certas para mudar a vida de mais de 10 mil alunos em 4 países.
        </p>
        <p className="text-base md:text-lg text-black leading-relaxed mb-10">
          Aqui você vai encontrar mais de 300 aulas já disponíveis sobre: biomecânica, mobilidade, periodização, leitura de exames, marketing digital e muito mais, para você ter segurança nos seus atendimentos e aumentar o seu faturamento.
        </p>
        <p className="text-lg font-semibold">Seja um Notável!</p>
      </div>
      <Contador />
      <div className="mt-8">
        <button className="bg-[#E60046] text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-[#cc0040] transition">
          QUERO FAZER PARTE
        </button>
      </div>
    </div>
  )
}

export default Sobre
