// src/components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-[#101010] py-16 px-4 md:px-8 lg:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Container para o Título com dimensões específicas */}
        {/* max-w-[892px] para limitar a largura em telas grandes, mx-auto para centralizar */}
        {/* height-[110px] para a altura fixa, e flex/items-center/justify-center para centralizar o texto dentro */}
        <div className="max-w-[892px] mx-auto h-[110px] flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                <span className="inline-block text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(to right, #306BE3, #6C8ED3)' }}>
                    O que os alunos estão dizendo
                </span>
            </h2>
        </div>


        {/* Área do vídeo com dimensões específicas */}
        {/* max-w-[892px] para limitar a largura, mx-auto para centralizar */}
        {/* height-[391px] para a altura fixa */}
        <div className="relative w-full max-w-[892px] mx-auto rounded-lg overflow-hidden border border-blue-700 shadow-lg"
             style={{ height: '391px' }}>
          {/*
          <video
            controls
            preload="metadata"
            poster="/path/to/your/video-thumbnail.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          */}
          {/* Placeholder visual para o player de vídeo */}
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            {/* Conteúdo do placeholder */}
            <div className="text-white text-3xl md:text-5xl font-bold z-10 flex flex-col items-center justify-center">
              <span className="text-sm opacity-70 mb-2">1.00</span>
              <div className="text-5xl md:text-7xl lg:text-8xl mb-4 font-extrabold">DEPOIMENTO</div>
              <div className="text-xl md:text-3xl lg:text-4xl">DOS NOSSOS ALUNOS</div>
              <div className="mt-8 flex items-center justify-center">
                <svg className="h-16 w-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Controles simulados na parte inferior */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs opacity-70">
                <div className="flex items-center">
                    <span className="mr-2">0:00</span>
                    <div className="w-20 md:w-32 h-1 bg-gray-600 rounded-full overflow-hidden">
                        <div className="w-1/4 h-full bg-blue-400"></div>
                    </div>
                    <span className="ml-2">2:30</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.39-3.23-3.25-3.48v-2.02l-3.32 3.32c1.43.32 2.57 1.46 2.92 2.89H16.5zm-5 6.55v-2.02c-1.86.25-3.25 1.71-3.25 3.48H4.75c0-2.88 2.06-5.26 4.92-5.74v-2.02c-3.95.49-7.07 3.86-7.07 7.76h2.12zm9.12-2.12c-.44-3.13-3.08-5.77-6.21-6.21v-2.02c4.13.49 7.31 3.75 7.31 7.76h2.1zm-1.87-4.13h2.12c0-2.88-2.06-5.26-4.92-5.74v2.02c1.86.25 3.25 1.71 3.25 3.48z"/></svg>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4H7v4H5V8h2v4h2V8h2v8zm7 0h-1c-1.38 0-2-1-2-2V8h-1v6c0 1.1-.9 2-2 2h-1V8h-1v6c0 1.1-.9 2-2 2h-1V8h-1v6c0 1.1-.9 2-2 2h-1V8H6c-1.38 0-2 .62-2 2v4c0 .38.12.74.3 1.05L12 18.23l7.7-2.18c.18-.31.3-.67.3-1.05V10c0-1.38-.62-2-2-2h-1v8zm-2 0h-1c-1.1 0-2-.9-2-2V8h-1v6c0 1.1-.9 2-2 2h-1V8h-1v6c0 1.1-.9 2-2 2h-1V8H6c-1.1 0-2 .9-2 2v4c0 .38.12.74.3 1.05L12 18.23l7.7-2.18c.18-.31.3-.67.3-1.05V10c0-1.1-.9-2-2-2z"/></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;