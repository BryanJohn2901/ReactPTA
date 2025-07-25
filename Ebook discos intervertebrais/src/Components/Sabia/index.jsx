import React from 'react';
import { Clock } from 'lucide-react';

const index = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto bg-[#1E1E28] rounded-2xl p-8 md:p-12 text-white text-center space-y-8">

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-blue-500 uppercase">
          OS DISCOS INTERVERTEBRAIS SÃO MAIS IMPORTANTES DO QUE VOCÊ IMAGINA
        </h2>

        {/* Lista */}
        <ul className="space-y-4 text-[16px] md:text-[18px] flex flex-col items-center">
          <li className="flex items-start gap-3 max-w-3xl">
            <Clock className="text-blue-500 w-5 h-5 mt-1" />
            <span>São responsáveis por mobilidade e flexibilidade da coluna.
            </span>
          </li>
          <li className="flex items-start gap-3 max-w-3xl">
            <Clock className="text-blue-500 w-5 h-5 mt-1" />
            <span>Sofrem com desidratação diária e exigem cuidado constante.
            </span>
          </li>
          <li className="flex items-start gap-3 max-w-3xl">
            <Clock className="text-blue-500 w-5 h-5 mt-1" />
            <span>Lesões mal tratadas podem resultar em limitação, dores crônicas e incapacidades.</span>
          </li>
        </ul>

        {/* Citação final */}
        <blockquote className="border-l-4 border-cyan-400 pl-4 text-lime-400 text-[16px] md:text-[18px] max-w-3xl mx-auto">
          "A falta de conhecimento sobre estabilização e mobilidade tem prejudicado a saúde da coluna de milhares de pessoas."


        </blockquote>
      </div>
    </section>
  );
};

export default index;
