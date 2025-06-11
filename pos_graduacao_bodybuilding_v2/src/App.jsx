import React from 'react'
import HeroSection from './Components/Herosection'
import Professores from './Components/Professores'
import Abordagem from './Components/Abordagem'
import Resultados from './Components/Resultados'
import Cards from './Components/Cards'
import Modulos from './Components/Modulos'
import Depoimentos from './Components/Depoimentos'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <HeroSection />
      <Professores />
      <Abordagem />
      <Resultados />
      <Cards />
      <Modulos />
      <Depoimentos />
      <Faq />
      <Footer />
    </div>
  )
}

export default App