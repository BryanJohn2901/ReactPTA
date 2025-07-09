import React from 'react'
import PeitoCostasBracos from './PeitoCostasBracos'
import MarketingParaPersonalTrainers from './MarketingParaPersonalTrainers'
import JoelhoQuadril from './JoelhoQuadril'
import ColunaCoreTraining from './ColunaCoreTraining'
import Ombro from './Ombro'
import GluteoCoxas from './GluteoCoxas'

const TrilhaAprendizagem = () => {
  return (
    <div className="w-full bg-[#080B3C] py-16 px-4 text-center">
      <div className="max-w-[900px] mx-auto">
        {/* Subtítulo */}
        <p className="text-white text-base md:text-lg mb-2">
          Inicie os seus estudos através de nossas
        </p>

        {/* Título em gradiente azul-roxo */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
          Trilhas de Aprendizagem com Certificado
        </h2>
      </div>
      <PeitoCostasBracos />
      <MarketingParaPersonalTrainers />
      <JoelhoQuadril />
      <ColunaCoreTraining />
      <Ombro />
      <GluteoCoxas />
    </div>
  )
}

export default TrilhaAprendizagem
