import React from 'react';

const Metodos = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      {/* Título Superior */}
      <p className="text-xl md:text-2xl text-center mb-12 max-w-4xl mx-auto leading-relaxed font-semibold">
        Aqui a sua evolução é constante e seus resultados são visíveis, através de um método que já formou mais de <span className="text-red-600">4 mil alunos</span>.
      </p>

      {/* Container para os dois blocos principais */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">

        {/* Bloco da Esquerda: Sistema de Expansão da Prática */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Sistema expansão da prática
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md">
            O melhor sistema de aprendizado e prático desenvolvido pela Personal Trainer Academy
          </p>
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center mx-auto">
            {/* Círculo Exterior (Conexão) */}
            <div className="absolute w-full h-full rounded-full bg-red-900 flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold text-white uppercase absolute bottom-[10%] left-1/2 -translate-x-1/2 whitespace-nowrap">CONEXÃO</span>
              <span className="text-xs text-gray-300 absolute bottom-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap">Aula Sábado</span>
            </div>
            {/* Círculo do Meio (Domínio) */}
            <div className="absolute w-4/5 h-4/5 rounded-full bg-red-800 flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold text-white uppercase absolute bottom-[10%] left-1/2 -translate-x-1/2 whitespace-nowrap">DOMÍNIO</span>
              <span className="text-xs text-gray-300 absolute bottom-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap">Aula Domingo</span>
            </div>
            {/* Círculo Interior (Execução) */}
            <div className="absolute w-3/5 h-3/5 rounded-full bg-red-700 flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold text-white uppercase absolute top-[10%] left-1/2 -translate-x-1/2 whitespace-nowrap">EXECUÇÃO</span>
              <span className="text-xs text-gray-300 absolute top-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap">Segunda-feira</span>
            </div>
            {/* Pequena curva ligando Execução a Domínio - estilizado com pseudo-elementos ou SVG seria melhor para exatidão */}
            {/* Por simplicidade, vamos usar classes de borda que podem simular isso */}
            <div className="absolute w-1/2 h-1/2 border-l-2 border-t-2 border-red-500 rounded-full rotate-45 z-20 top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 opacity-0"></div>
          </div>
        </div>

        {/* Bloco da Direita: Ciclo de Aprendizado Constante */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Ciclo de aprendizado constante
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md">
            O método que vai te fazer conquistar mais clientes
          </p>
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center mx-auto">
            {/* TODO: Substituir por um SVG ou imagem do diagrama do ciclo */}
            {/* Este é um placeholder básico para o círculo externo do diagrama */}
            <div className="relative w-full h-full rounded-full border-4 border-gray-700 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Ícone ou imagem central */}
                <img src="" alt="Conquista de Clientes" className="w-16 h-16 object-contain" /> {/* TODO: Adicionar o src do ícone central */}
                <span className="absolute bottom-[25%] font-bold text-white text-base">CONQUISTA DE CLIENTES</span>
              </div>
              {/* Textos ao redor do círculo - Posição absoluta e rotação seriam necessárias */}
              <span className="absolute top-1/2 left-0 -translate-x-1/2 -rotate-90 origin-center text-lg font-bold text-blue-500 whitespace-nowrap">DESCOBRINDO OS MÉTODOS</span>
              <span className="absolute top-1/2 right-0 translate-x-1/2 rotate-90 origin-center text-lg font-bold text-gray-400 whitespace-nowrap">ESCULPINDO O CORPO</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-lg font-bold text-red-500 whitespace-nowrap">ESTÉTICA AVANÇADA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Chamada para Ação */}
      <div className="mt-16 text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out shadow-lg">
          Matricule-se agora
        </button>
      </div>
    </section>
  );
};

export default Metodos;