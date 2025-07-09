// src/components/Sentidos.jsx
import React, { useState, useEffect, useRef } from 'react';

const Sentidos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null); // Ref para o container do carrossel

  // Dados dos cards de módulos
  const sentidosCards = [
    {
      title: "Hipertrofia",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.8-7-7.93 0-.69.08-1.35.24-1.99L11 17.5V19.93zm-1.12-11.41l-.94-2.81c.64-.17 1.3-.24 1.99-.24 4.13 0 7.44 3.05 7.93 7h-2.06l-4.57-4.57c.59-.62 1.05-1.36 1.34-2.19zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 3.5l1.5-1.5 1.5 1.5H12c.55 0 1 .45 1 1s-.45 1-1 1H11v.5c0 .55-.45 1-1 1s-1-.45-1-1v-.5H7.5V11h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.5V7.5H9c.55 0 1-.45 1-1s-.45 1-1 1h-.5zM15 15.5l1.5-1.5 1.5 1.5h-.5c-.55 0-1 .45-1 1s-.45 1-1 1h.5v.5c0 .55.45 1 1 1s1-.45 1-1v-.5h1.5V15h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.5V19h-1.5c-.55 0-1 .45-1 1s.45 1 1 1h.5z",
      description: "Transforme o físico dos seus alunos com estratégias comprovadas de hipertrofia. Aprimore o seu conhecimento, maximize com treinos específicos e nutrição adequada para resultados visíveis e duradouros.",
    },
    {
      title: "Leitura de exames",
      iconPath: "M19 3h-4.18C14.41 1.84 13.3 1 12 1s-2.41.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 16H5V5h14v14zM8 7H6v2h2V7zm-2 4h2v2H6v-2zm0 4h2v2H6v-2zm6-4h-2v2h2v-2zm0 4h-2v2h2v-2zm0-8h-2v2h2V7zm4 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0-8h-2v2h2V7z",
      description: "Diferencie-se no mercado com a capacidade de interpretar exames clínicos e exames laboratoriais. Aprenda a utilizar essas informações para prescrever treinos personalizados e monitorar o avanço dos seus alunos de forma integrada.",
    },
    {
      title: "Marketing digital",
      iconPath: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-5-10c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-4h2c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1zm0 8h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1z",
      description: "Amplie sua clientela e aumente seu faturamento utilizando estratégias de marketing digital. Aprenda a atrair e reter alunos através das mídias sociais, campanhas de anúncios e marketing de conteúdo.",
    },
  ];

  const totalCards = sentidosCards.length; // 3

  // Função para obter os cards na ordem cíclica
  const getDisplayCards = () => {
    // Se currentIndex é 0, retorna [0, 1, 2]
    // Se currentIndex é 1, retorna [1, 2, 0]
    // Se currentIndex é 2, retorna [2, 0, 1]
    const rotatedCards = [];
    for (let i = 0; i < totalCards; i++) {
      rotatedCards.push(sentidosCards[(currentIndex + i) % totalCards]);
    }
    return rotatedCards;
  };

  // Lógica para avançar para o próximo card (circular)
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  // Lógica para voltar para o card anterior (circular)
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  // Efeito para o autoplay do carrossel
  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        goToNext();
      }, 5000); // Muda de card a cada 5 segundos (5000ms)
    }

    // Limpa o intervalo quando o componente é desmontado ou pausado
    return () => clearInterval(intervalId);
  }, [isPaused, currentIndex, totalCards]); // Dependências: isPaused, currentIndex e totalCards

  // Função para navegar para um card específico (usado pelos dots)
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="bg-darker-navy text-white py-16 px-4">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          A Escola feita para fazer a sua carreira crescer em todos os sentidos.
        </h2>
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-16">
          Após formar milhares de alunos reunimos aqui os conhecimentos que compõem um Personal Trainer de sucesso.
        </p>

        {/* Seção do Carrossel de Módulos */}
        <div
          ref={carouselRef}
          className="relative w-full" /* Removido overflow-hidden pois a reordenação é visual, não por deslizamento */
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Container dos Cards (agora renderiza 3 cards na ordem cíclica) */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            // Não usamos transform: translateX aqui, pois os cards são reordenados dinamicamente
          >
            {getDisplayCards().map((card, index) => (
              <div
                key={index} // Usando index do map aqui, pois a ordem muda. Se fosse um ID único no card, seria melhor.
                className="w-full flex-shrink-0" // Mantido flex-shrink-0 mas a largura é controlada pelo grid
              >
                <div className="bg-darker-navy-light p-8 rounded-lg shadow-xl border-t-4 border-primary flex flex-col items-center text-center h-full">
                  {/* Ícone (ajustado para azul neon básico) */}
                  <svg className="w-24 h-24 text-blue-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={card.iconPath} />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-300 text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pontos de Paginação (Dots) */}
          <div className="flex justify-center mt-12 space-x-3">
            {sentidosCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none 
                  ${currentIndex === index ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentidos;