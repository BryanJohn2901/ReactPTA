import React from 'react';

const Marketplace = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Top half: Red background with titles and laptop image */}
      <div className="bg-red-600 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white px-4">
          {/* Left Title */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Mercado de Trabalho da <br className="hidden md:block" /> Personal Trainer Academy
            </h2>
          </div>

          {/* Laptop Image */}
          <div className="flex-shrink-0 relative -mt-32 md:-mt-48 lg:-mt-64 z-20"> {/* Negative margin to make it overlap */}
            {/* TODO: Add the laptop image. It should have the content already on its screen. */}
            <img
              src="/path/to/laptop-image.png" // Replace with your laptop image source
              alt="Laptop showing Personal Trainer Academy Marketplace"
              className="w-48 md:w-64 lg:w-80 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Title */}
          <div className="flex-1 text-center md:text-right mt-8 md:mt-0 md:ml-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Mercado de Trabalho da <br className="hidden md:block" /> Personal Trainer Academy
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom half: Light gray background with description */}
      <div className="bg-gray-100 py-12 md:py-16 lg:py-20 text-gray-800 text-center px-4">
        <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
          Um marketplace exclusivo à disposição de todos os formados na Pós-graduação. Com inscrição gratuita e total liberdade para compartilhar seus dados de prestação de serviços e assim atrair alunos diretamente até você. Nossa equipe de marketing irá trabalhar para que este Marketplace alcance potenciais clientes aos inscritos.
        </p>
      </div>
    </section>
  );
};

export default Marketplace;