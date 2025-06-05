
import React from 'react';
import Hero from './components/Hero'; 
import Especialistas from './components/Especialistas'
import MEC from './components/MEC'
import Beneficios from './components/Beneficios';
import Metodos from './components/Metodos';
import Publico_alvo from './components/Publico_alvo';
import Modulos from './components/Modulos';
import Marketplace from './components/Marketplace';
import Testemunhas from './components/Testemunhas';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Hero/>
      <Especialistas />
      <MEC />
      <Beneficios />
      <Metodos />
      <Publico_alvo />
      <Modulos />
      <Marketplace />
      <Testemunhas/>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;