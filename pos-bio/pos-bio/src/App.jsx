// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection'; // Ajuste o caminho se necessário
import Especialistas from './components/Especialistas';
import ReconhecimentoMEC from './components/ReconhecimentoMEC';
import SistemaCicloAprendizado from './components/SistemaCicloAprendizado';
import PublicoAlvo from './components/PublicoAlvo';
import Modulos from './components/Modulos';
import MarketplaceSection from './components/MarketplaceSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <HeroSection />
      <Especialistas />
      <ReconhecimentoMEC />
      <SistemaCicloAprendizado />
      <PublicoAlvo />
      <Modulos />
      <MarketplaceSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      
    </div>
  );
}

export default App;