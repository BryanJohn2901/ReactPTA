// src/components/Resultados.jsx
import React from 'react';

const Resultados = () => {
  return (
    <section className="w-full bg-[#101010] text-white py-20 px-6">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-poppins text-center font-bold max-w-3xl mx-auto leading-snug mb-16">
        Aqui a sua evolução é constante e seus <span className="text-purple-400">resultados são visíveis</span>, através de um método que já formou mais de 4 mil alunos.
      </h2>

      {/* Grid com centralização geral */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto items-center text-center">
        {/* Bloco 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-400">Sistema expansão da prática</h3>
          <p className="text-sm text-white font-nunito max-w-md mx-auto">
            O melhor sistema de aprendizado e prática desenvolvido pela Personal Trainer Academy
          </p>
          <img
            src="/execucao.webp"
            alt="Execução"
            className="mx-auto w-full max-w-[400px]"
          />
        </div>

        {/* Bloco 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-400">Ciclo de aprendizado constante</h3>
          <p className="text-sm text-white font-nunito max-w-md mx-auto">
            O método que vai te fazer conquistar mais clientes
          </p>
          <img
            src="/emagrecimento.svg"
            alt="Ciclo de Emagrecimento"
            className="mx-auto w-full max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
