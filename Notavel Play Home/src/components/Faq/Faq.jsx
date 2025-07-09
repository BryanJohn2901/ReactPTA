import React from 'react'
import Perguntas from './perguntas'

const Faq = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Perguntas Frequentes.
      </h2>
      <Perguntas />
    </div>
  )
}

export default Faq