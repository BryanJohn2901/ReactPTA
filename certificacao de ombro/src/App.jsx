import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import Promessa from './Components/Promessa'
import Conquista from './Components/Conquista'
import Curso from './Components/Curso'
import Professor from './Components/Professor'
import Checkout from './Components/Checkout'
import Garantia from './Components/Garantia'
import Faq from './Components/Faq'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Promessa />
      <Conquista />
      <Curso/>
      <Professor />
      <Checkout/>
      <Garantia/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App