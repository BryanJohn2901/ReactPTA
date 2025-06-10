// src/components/FAQSection.jsx
import React from 'react';

const FAQSection = () => {
  return (
    <section className="bg-[#101010] py-16 px-4 md:px-8 lg:px-12 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
        {/* Lado Esquerdo: Título, Descrição e Botão */}
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <p className="text-[#306BE3] text-sm font-semibold mb-2">F.A.Q.</p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-white text-base md:text-lg mb-8 opacity-90">
            Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
          </p>
          <button className="bg-[#306BE3] hover:bg-[#6C8ED3] text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out w-full max-w-sm lg:max-w-none">
            TIRAR DÚVIDAS
          </button>
        </div>

        {/* Lado Direito: Lista de Perguntas com Gradiente */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Item de Pergunta 1 */}
          <div className="text-white p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-lg"
               style={{
                 background: 'linear-gradient(to right, #1D61E8, #14316A)',
                 // Adiciona um efeito de hover mais sutil ou um pequeno escurecimento/clareamento do gradiente
                 // Para um hover mais visível, pode ser uma cor sólida ou um gradiente ligeiramente diferente
                 // Aqui, vamos apenas adicionar um leve scale ou um box-shadow diferente no hover para simular interatividade
                 // sem mudar drasticamente o fundo do gradiente, a menos que você especifique uma cor de hover para o gradiente
               }}
               onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'} // Leve clareamento no hover
               onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'} // Retorna ao normal
          >
            <h3 className="text-lg md:text-xl font-semibold">Quais são as Formas de Pagamento?</h3>
          </div>

          {/* Item de Pergunta 2 */}
          <div className="text-white p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-lg"
               style={{ background: 'linear-gradient(to right, #1D61E8, #14316A)' }}
               onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            <h3 className="text-lg md:text-xl font-semibold">Como acesso o conteúdo?</h3>
          </div>

          {/* Item de Pergunta 3 */}
          <div className="text-white p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-lg"
               style={{ background: 'linear-gradient(to right, #1D61E8, #14316A)' }}
               onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            <h3 className="text-lg md:text-xl font-semibold">Qual número total de horas da Pós?</h3>
          </div>

          {/* Item de Pergunta 4 */}
          <div className="text-white p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-lg"
               style={{ background: 'linear-gradient(to right, #1D61E8, #14316A)' }}
               onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            <h3 className="text-lg md:text-xl font-semibold">Possui certificado de conclusão?</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;