import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Carreira from './components/Carreira/Carreira'
import TrilhaAprendizagem from './components/TrilhaDeApredizagem/TrilhaAprendizagem'
import Professores from './components/Professores/Professores'
import Depoimentos from './components/Depoimentos/Depoimentos'
import Evolucao from './components/Evolucao/Evolucao'
import Notaveis from './components/Notaveis/Notaveis'
import Cards from './components/Cards/Cards'
import Duvidas from './components/Duvidas/Duvidas'
import Sobre from './components/Sobre/Sobre'
import Checkout from './components/Checkout/Checkout'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carreira />
      <TrilhaAprendizagem />
      <Professores />
      <Depoimentos />
      <Evolucao />
      <Notaveis />
      <Cards />
      <Duvidas />
      <Sobre />
      <Checkout />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
