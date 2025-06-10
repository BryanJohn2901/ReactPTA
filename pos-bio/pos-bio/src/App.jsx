// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection'; // Ajuste o caminho se necessário
import Especialistas from './components/Especialistas';
import ReconhecimentoMEC from './components/ReconhecimentoMEC';
import SistemaCicloAprendizado from './components/SistemaCicloAprendizado';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Especialistas />
      <ReconhecimentoMEC />
      <SistemaCicloAprendizado />
      
      
    </div>
  );
}

export default App;