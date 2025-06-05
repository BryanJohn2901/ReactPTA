import React from 'react';

// IMPORTAR SUAS IMAGENS AQUI:
// Certifique-se de que esses caminhos e nomes de arquivos estão corretos
import laptopCentralImage from '../assets/laptop-central.webp'; // Imagem do laptop na faixa amarela
import workoutImage from '../assets/workout-image.jpg';     // Imagem da pessoa se exercitando
import communityLaptopImage from '../assets/community-laptop.jpg'; // Imagem do laptop da comunidade (primeira coluna inferior)
import marketplacePhoneImage from '../assets/marketplace-phone.jpg'; // Imagem do celular do marketplace (segunda coluna inferior)


const Market_place = () => {
  return (
    <section className="bg-black text-white relative">
      {/* Primeira Seção (Faixa Amarela) */}
      <div className="bg-yellow-400 py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center">
        {/* Título Esquerdo */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-left md:text-left pr-4">
          Mercado de Trabalho da <br />
          <span className="text-white">Personal Trainer Academy</span>
        </h2>

        {/* Título Direito */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-right md:text-right pl-4 mt-4 md:mt-0">
          Mercado de Trabalho da <br />
          <span className="text-white">Personal Trainer Academy</span>
        </h2>
      </div>

      {/* Imagem do Laptop Central */}
      <div className="absolute -top-16 md:-top-20 lg:-top-24 left-1/2 transform -translate-x-1/2 z-20 w-48 md:w-64 lg:w-80">
        <img
          src={laptopCentralImage}
          alt="Laptop com o site da Personal Trainer Academy"
          className="w-full h-auto object-contain shadow-lg"
        />
      </div>

      {/* Segunda Seção (Conteúdo Principal - Marketplace) */}
      <div className="container mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Div do Texto Esquerdo */}
        <div className="lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-base md:text-lg leading-relaxed">
            Um marketplace exclusivo à disposição de todos os formados na Pós-graduação. Com inscrição gratuita e total liberdade
            para compartilhar seus dados de prestação de serviços e assim atrair alunos diretamente até você. Nossa equipe de
            marketing irá trabalhar para que este Marketplace alcance potenciais clientes aos inscritos.
          </p>
        </div>
        {/* Div da Imagem e Texto Sobreposto */}
        <div className="relative lg:w-3/5">
          <img
            src={workoutImage}
            alt="Pessoa se exercitando com fitas de TRX"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {/* Texto sobreposto na imagem de treino, alinhado ao print */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-center text-white bg-black bg-opacity-80 p-6 rounded-lg max-w-lg">
              <span className="text-yellow-400 font-normal">Chegou a hora de você se tornar um especialista</span> e dominar formatos de atendimento individual, em grupos, em
              diferentes espaços. Prepare-se para atender de forma presencial ou através de consultorias on-line.
            </p>
          </div>
        </div>
      </div>

      {/* Terceira e Quarta Seção (Acesso Flexível e Comunidade) - Ajustadas para o Figma */}
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna Esquerda: Texto "Poderá assistir quando e onde quiser" e Imagem do Laptop da Comunidade */}
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start text-center lg:text-left"> {/* Adicionado flex-col-reverse para mobile */}
          {/* Imagem do Laptop da Comunidade - Ordem alterada para mobile */}
          <img
            src={communityLaptopImage}
            alt="Laptop mostrando comunidade de alunos"
            className="w-full h-auto object-cover rounded-lg shadow-lg max-w-sm mb-8 lg:mb-0" // Adicionado mb-8 para mobile
          />
          {/* Texto "Poderá assistir quando e onde quiser" */}
          <p className="text-base md:text-lg leading-relaxed mb-8 lg:mb-8"> {/* Ajustado mb para consistência */}
            Poderá assistir <span className="font-semibold">quando e onde quiser</span>. Você terá liberdade para estudar no seu tempo, seja
            no celular, computador ou tablet.
          </p>
        </div>

        {/* Coluna Direita: Imagem do Celular do Marketplace e Texto da Comunidade */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          {/* Imagem do Celular do Marketplace */}
          <img
            src={marketplacePhoneImage}
            alt="Mãos segurando celular com interface do marketplace"
            className="w-48 md:w-64 lg:w-80 h-auto object-contain rounded-lg shadow-lg mb-8"
          />
          {/* Texto da Comunidade */}
          <p className="text-base md:text-lg leading-relaxed">
            Tenha acesso a <span className="font-semibold text-yellow-500">uma comunidade com mais de 3000 alunos</span> e interaja com
            profissionais que estão no campo de batalha diariamente com resultados incríveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Market_place;