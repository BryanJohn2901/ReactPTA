import React, { useRef, useState } from 'react'; // IMPORTE 'useState' AQUI para gerenciar o estado do popup
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import Promessa from './Components/Promessa';
// import Conquista from './Components/Conquista'
// import Curso from './Components/Curso'
import Professor from './Components/Professor';
import Checkout from './Components/Checkout'; // Importa o componente Checkout
import Garantia from './Components/Garantia';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Aprender from './Components/Aprender';
// import Beneficios from './Components/Beneficios'
import Popup from './Components/Popup'; // IMPORTE O COMPONENTE POPUP AQUI

const App = () => {
  // 1. Cria uma referência que será anexada ao componente Checkout (para o scroll da Navbar e outros botões).
  const checkoutRef = useRef(null);

  // 2. ESTADO QUE CONTROLA A VISIBILIDADE DO POPUP.
  //    'showPopup' será 'true' para exibir o popup, 'false' para escondê-lo.
  const [showPopup, setShowPopup] = useState(false); // Inicializa como 'false' (popup invisível por padrão)

  // 3. Define a função que será chamada para scrollar suavemente até o Checkout.
  const handleScrollToCheckout = () => {
    // Verifica se a referência ao Checkout existe (se o componente está montado na DOM).
    if (checkoutRef.current) {
      // Usa o método scrollIntoView para rolar suavemente até o componente.
      checkoutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 4. FUNÇÃO PARA ABRIR O POPUP.
  const handleOpenPopup = () => {
    setShowPopup(true); // Define o estado 'showPopup' para 'true', fazendo o popup aparecer
  };

  // 5. FUNÇÃO PARA FECHAR O POPUP.
  const handleClosePopup = () => {
    setShowPopup(false); // Define o estado 'showPopup' para 'false', escondendo o popup
  };

  return (
    <div>
      {/* Navbar: Passa a função de scroll para que o botão 'Começar agora' funcione. */}
      <Navbar onScrollToCheckout={handleScrollToCheckout} />

      {/* Hero: Passa a função de scroll para o botão CTA. */}
      <Hero onScrollToCheckout={handleScrollToCheckout} />

      <Promessa />
      <Aprender />

      {/* Componentes comentados (não são renderizados): */}
      {/* <Conquista /> */}
      {/* <Curso/> */}
      {/* <Beneficios /> */}

      {/* Professor: AGORA PASSA A FUNÇÃO DE SCROLL para o botão 'QUERO EXPERIMENTAR AGORA'. */}
      <Professor onScrollToCheckout={handleScrollToCheckout} />

      {/* Checkout:
          - 'ref={checkoutRef}': Anexa a referência para que a Navbar e outros botões possam scrollar até ele.
          - 'onOpenPopup={handleOpenPopup}': Passa a função que o botão do Checkout chamará para abrir o popup. */}
      <Checkout ref={checkoutRef} onOpenPopup={handleOpenPopup} />

      {/* Garantia: AGORA PASSA A FUNÇÃO DE SCROLL para o botão 'SIM! QUERO A CERTIFICAÇÃO!'. */}
      <Garantia onScrollToCheckout={handleScrollToCheckout} />

      {/* Faq: AGORA PASSA A FUNÇÃO DE SCROLL para o botão 'GARANTIR MINHA CERTIFICAÇÃO'. */}
      <Faq onScrollToCheckout={handleScrollToCheckout} />

      <Footer/>

      {/* RENDERIZAÇÃO CONDICIONAL DO POPUP:
          O Popup só será renderizado na DOM (e, portanto, visível) SE a variável 'showPopup' for 'true'.
          A prop 'onClose' é passada para que o próprio popup possa chamar essa função (pelo botão 'X') para se fechar. */}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
