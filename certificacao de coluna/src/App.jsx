import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Promessa from './Components/Promessa'
import Conquista from './Components/Conquista'
import Para_quem from './Components/Para_quem'
import Diferenciais from './Components/Diferenciais'
import Professor from './Components/Professor'
import Checkout from './Components/Checkout'
import Garantia from './Components/Garantia'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Beneficios from './Components/Beneficios'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Promessa />
      <Conquista />
      <Para_quem />
      <Beneficios />
      <Diferenciais />
      <Professor />
      <Checkout />
      <Garantia />
      <Faq />
      <Footer />
    </div>
  )
}

export default App