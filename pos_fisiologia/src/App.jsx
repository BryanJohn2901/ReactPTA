import React from 'react'
import Hero from './Components/Hero'
import Barra from './Components/Barra'
import Abordagem from './Components/Abordagem'
import Resultados from './Components/Resultados'
import Topicos from './Components/Topicos'
import Modulos from './Components/Modulos'
import Barra_2 from './Components/Barra_2'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Professores from './Components/Professores'

const App = () => {
  return (
    <div>
      <Hero />
      <Barra/>
      <Professores />
      <Abordagem />
      <Resultados />
      <Topicos />
      <Modulos />
      <Barra_2/>
      <Faq />
      <Footer />
    </div>
  )
}

export default App