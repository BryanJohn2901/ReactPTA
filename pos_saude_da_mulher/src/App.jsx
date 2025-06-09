import React from 'react'
import Hero from './Components/Hero'
import Fita from './Components/fita'
import Abordagem from './Components/Abordagem'
import Resultados from './Components/Resultados'
import Topicos from './Components/Topicos'
import Modulos from './Components/Modulos'
import Dizem from './Components/Dizem'
import Bonus from './Components/Bonus'
import Checkout from './Components/Checkout'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Professores from './Components/Professores'
import Barra from './Components/Barra'

const App = () => {
  return (
    <div>
      <Hero />
      <Fita />
      <Professores />
      <Barra />
      <Abordagem />
      <Resultados />
      <Topicos />
      <Modulos />
      <Barra />
      <Dizem />
      <Bonus />
      <Checkout />
      <Faq />
      <Footer />
    </div>
  )
}

export default App