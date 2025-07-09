import React from 'react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Container centralizado com largura máxima */}
      <div className="w-full max-w-[1300px] mx-auto text-center">

        {/* Título */}
        <h2 className="text-xl md:text-2xl font-bold font-poppins text-blue-500 uppercase mb-10">
          PARA QUEM É ESTE GUIA?
        </h2>

        {/* Grid com os cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white p-8 sm:p-10 rounded-2xl shadow-md text-left">
            <span className="text-blue-500 font-poppins text-[60px] sm:text-[80px] font-bold">1</span>
            <p className="text-gray-800 text-[16px] md:text-[18px]">
              Profissionais que querem dominar a biomecânica da coluna.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white p-8 sm:p-10 rounded-2xl shadow-md text-left">
            <span className="text-blue-500 font-poppins text-[60px] sm:text-[80px] font-bold">2</span>
            <p className="text-gray-800 text-[16px] md:text-[18px]">
              Quem deseja prevenir lesões e proporcionar resultados reais.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-white p-8 sm:p-10 rounded-2xl shadow-md text-left">
            <span className="text-blue-500 font-poppins text-[60px] sm:text-[80px] font-bold">3</span>
            <p className="text-gray-800 text-[16px] md:text-[18px]">
              Personal Trainers, fisioterapeutas e estudantes que buscam se diferenciar.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4 bg-white p-8 sm:p-10 rounded-2xl shadow-md text-left">
            <span className="text-blue-500 font-poppins text-[60px] sm:text-[80px] font-bold">4</span>
            <p className="text-gray-800 text-[16px] md:text-[18px]">
              Especialistas que querem eliminar dores lombares com exercícios práticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
