import React from 'react';

const Testemunhas = () => {
  return (
    <section className="bg-custom-black-dark py-16 px-4 md:px-8">
      {/* Título da Seção - Acima do vídeo */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto leading-tight text-custom-text-light">
        O que os alunos estão dizendo
      </h2>

      {/* Container do Depoimento/Vídeo - Sem textos sobre ele */}
      <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-custom-card-dark">
        {/* Imagem de Fundo/Miniatura do Vídeo */}
        {/* TODO: Substitua pelo SRC da imagem do depoimento. */}
        <img
          src="/path/to/testimonial-thumbnail.jpg" // Replace with the actual image source from your design
          alt="Depoimento de Aluno"
          className="w-full h-full object-cover object-center"
          // Usar 'h-auto' ou definir uma altura para manter a proporção da imagem
          style={{ aspectRatio: '16/9' }} // Exemplo: para vídeos 16:9, ajuste conforme sua imagem
        />

        {/* Botão "Continue assistindo" - Posicionado na parte inferior direita da imagem */}
        <button className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full text-base md:text-lg transition duration-300 ease-in-out shadow-md">
          Continue assistindo
        </button>
      </div>
    </section>
  );
};

export default Testemunhas;