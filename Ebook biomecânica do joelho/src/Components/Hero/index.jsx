import React from 'react';

const index = () => {
  return (
    // Seção principal com imagem de fundo
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center py-12 px-4"
      style={{ backgroundImage: 'url(/bgHero.png)' }} // Certifique-se de que a imagem está em /public
    >
      {/* Container centralizado com largura máxima de 1300px */}
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Coluna de conteúdo */}
        <div className="text-white space-y-6 font-sans text-center md:text-left px-4 md:px-0">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold font-poppins leading-snug">
            BIOMECÂNICA DO JOELHO: O GUIA ESSENCIAL PARA PREVENIR LESÕES E POTENCIALIZAR RESULTADOS
          </h2>

          <p className="text-[16px] md:text-[18px] leading-relaxed">
            Aprenda a proteger, fortalecer e otimizar a articulação do joelho em qualquer exercício físico.
          </p>

          <h3 className="text-[36px] sm:text-[44px] md:text-[50px] font-extrabold font-poppins">
            R$14,99
          </h3>

          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all font-poppins w-full sm:w-auto">
              Comprar agora
            </button>
          </div>
        </div>

        {/* (Opcional) Imagem ou elemento decorativo à direita */}
        {/* <div className="hidden md:block">
          <img src="/alguma-imagem.png" alt="Ilustração" />
        </div> */}

      </div>
    </section>
  );
};

export default index;
