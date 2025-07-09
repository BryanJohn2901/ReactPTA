// src/components/Hero.jsx
import React, { useState } from 'react'; // Importe useState do React

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ID do vídeo do YouTube de exemplo (substitua pelo seu vídeo real)
  const youtubeVideoId = "dQw4w9WgXcQ"; // Ex: Rick Astley - Never Gonna Give Up

  // Caminho para a imagem da thumbnail do vídeo (coloque em public/video_thumbnail.webp)
  const videoThumbnail = "/video_thumbnail.webp"; // Certifique-se que essa imagem existe na sua pasta public

  // URLs de avatares de exemplo (coloque em public/avatars/ ou use URLs de serviço)
  const avatarUrls = [
    "/avatars/avatar1.webp", // Exemplo: public/avatars/avatar1.webp
    "/avatars/avatar2.webp",
    "/avatars/avatar3.webp",
    "/avatars/avatar4.webp",
    "/avatars/avatar5.webp",
  ];

  // Dados dos Depoimentos (Testimonials)
  const testimonialsData = [
    {
      name: "Thiago Veras",
      avatarUrl: "/avatars/thiago_veras.webp", // Crie este arquivo em public/avatars/
      text: "Excelente! Acho a didática dos professores perfeitas e o tato de direcionar sempre a prática ajuda muito a entender! Já tinha assinado uma vez e consegui agora assinar de novo! Sempre recomendo para os meus amigos!",
    },
    {
      name: "Felipe Costa",
      avatarUrl: "/avatars/felipe_costa.webp", // Crie este arquivo em public/avatars/
      text: "A qualidade das aulas é absurda. Estou maratonando todo o módulo de Biomecânica dos membros inferiores e a cada aula é uma explosão de conhecimento!",
    },
    {
      name: "Marcelo Magno",
      avatarUrl: "/avatars/marcelo_magno.webp", // Crie este arquivo em public/avatars/
      text: "As aulas são ótimas, didáticas impecáveis, dinâmicas, fácil entendimento, com profissionais altamente qualificados fica fácil. É a plataforma é de fácil acesso, ótimos recursos, tudo perfeito.",
    },
  ];


  return (
    <section className="bg-darker-navy text-white py-12 px-4 md:px-0">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
          Tenha um atendimento de referência e conquiste novos alunos, com a maior e mais completa escola de formação de Personal Trainers do Brasil.
        </h2>

        {/* Seção do Vídeo */}
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-primary group cursor-pointer mb-8"
             onClick={() => setIsModalOpen(true)}>
          <img
            src={videoThumbnail}
            alt="Thumbnail do Vídeo"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Ícone de Play */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50">
            <svg
              className="w-20 h-20 text-white transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" /> {/* Ícone de Play */}
            </svg>
          </div>
        </div>

        {/* Texto de Investimento */}
        <p className="text-xl md:text-2xl font-bold mb-2">
          $27 REAIS MENSAIS DE INVESTIMENTO
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          mensais no plano anual do notavel Play.
        </p>

        {/* Botão COMEÇAR AGORA */}
        <button className="bg-primary text-white text-lg md:text-xl font-bold py-3 px-8 rounded-full hover:bg-primary transition-colors duration-300 shadow-lg mb-8">
          COMEÇAR AGORA
        </button>

        {/* Avatares e Texto de Transformação */}
        <div className="flex justify-center items-center -space-x-3 mb-16">
          {avatarUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Avatar ${index + 1}`}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          ))}
          <span className="text-gray-300 text-sm ml-4">
            28K+ já vivenciando essa transformação
          </span>
        </div>

        {/* Seção dos 4 Quadrados com Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"> {/* Adicionei mb-16 para espaçar da próxima seção */}
          {/* Box 1 */}
          <div className="bg-darker-navy-light p-6 rounded-lg shadow-md border-t-4 border-primary flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 10h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-6-7c1.66 0 3 1.34 3 3v3H9V6c0-1.66 1.34-3 3-3zm7 15H5V12h14v6z" /> {/* Ícone de Câmera/Vídeo */}
            </svg>
            <h3 className="text-xl font-semibold mb-2">Aulas ao vivo</h3>
            <p className="text-gray-300 text-sm">Interaja e aprenda em tempo real com os melhores.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-darker-navy-light p-6 rounded-lg shadow-md border-t-4 border-primary flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /> {/* Ícone de Aprendizado/Info */}
            </svg>
            <h3 className="text-xl font-semibold mb-2">Trilhas de aprendizagem rápida</h3>
            <p className="text-gray-300 text-sm">Caminhos claros para dominar novas habilidades rapidamente.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-darker-navy-light p-6 rounded-lg shadow-md border-t-4 border-primary flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.55.83 2.67 1.95 2.99 3.45V19h4v-2.5c0-2.33-4.67-3.5-7-3.5z" /> {/* Ícone de Grupo/Comunidade */}
            </svg>
            <h3 className="text-xl font-semibold mb-2">Comunidade para Crescimento Pessoal</h3>
            <p className="text-gray-300 text-sm">Conecte-se e cresça com outros profissionais.</p>
          </div>

          {/* Box 4 */}
          <div className="bg-darker-navy-light p-6 rounded-lg shadow-md border-t-4 border-primary flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V7H3v2zm0-4h18V3H3v2z" /> {/* Ícone de Marketing/Gráfico (Exemplo) */}
            </svg>
            <h3 className="text-xl font-semibold mb-2">Guia de Marketing para captação rápida de alunos</h3>
            <p className="text-gray-300 text-sm">Estratégias eficazes para atrair e reter alunos.</p>
          </div>
        </div>
      </div>

      {/* Seção de Depoimentos (Testimonials) - NOVA SEÇÃO AQUI */}
      <div className="bg-darker-navy py-16 px-4"> {/* Fundo da seção de depoimentos */}
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O que nossos alunos dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-darker-navy-light p-6 rounded-lg shadow-xl border-t-4 border-primary"> {/* Card de Depoimento */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover mr-4"
                  />
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Modal para o Vídeo - INTEGRADO AQUI */}
      {isModalOpen && ( // Renderiza o modal apenas se isModalOpen for true
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)} // Fecha o modal ao clicar fora
        >
          <div
            className="relative bg-black rounded-lg shadow-xl w-full max-w-4xl max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o
          >
            <button
              className="absolute top-3 right-3 text-white text-2xl z-10 hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              × {/* Ícone de 'X' para fechar */}
            </button>
            <div className="relative pt-[56.25%]"> {/* Proporção 16:9 para vídeos */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&showinfo=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vídeo do YouTube"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;