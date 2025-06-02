import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Especializacoes from './Components/Especializacoes'
import Sobre from './Components/Sobre'
import Cursos from './Components/Cursos'
import Imersoes from './Components/Imersoes'
import Linha_evolucao from './Components/Linha_evolucao'
import Professores from './Components/Professores'
import Newsletter from './Components/Newsletter'
import Por_que_nos_escolher from './Components/Por_que_nos_escolher'
import Parceiros from './Components/Parceiros'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Especializacoes />
      <Sobre />
      <Cursos />
      <Imersoes />
      <Linha_evolucao />
      <Professores />
      <Newsletter />
      <Por_que_nos_escolher />
      <Parceiros />
      <Footer />
    </div>
  )
}

export default App