import React from 'react';
import { Clock } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto bg-[#1E1E28] rounded-2xl p-8 md:p-12 text-white space-y-8">

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-blue-500 uppercase text-center">
          O MERCADO ESTÁ LOTADO DE DOR E IGNORÂNCIA
        </h2>

        {/* Parágrafos explicativos */}
        <div className="space-y-4 text-[16px] md:text-[18px] text-[#fff] max-w-4xl mx-auto text-center">
          <p>
            Você já viu clientes reclamarem de dor ao pentear o cabelo, treinar ou simplesmente dormir? Isso acontece porque 90% dos profissionais não conhecem a biomecânica do ombro.
          </p>
        </div>
        {/* Citação final */}
        <blockquote className="border-l-4 border-cyan-400 pl-4 text-lime-400 text-[16px] md:text-[18px] max-w-3xl mx-auto text-left">
          Quem tem o conhecimento certo transforma dores em resultados incríveis.
        </blockquote>
      </div>
    </section>
  );
};

export default index;
