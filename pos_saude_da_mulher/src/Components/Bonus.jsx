// src/components/Bonus.jsx
import React from 'react';

const bonusList = [
  {
    image: '/bonus01.webp',
    title: 'Camiseta “Expert em Saúde Feminina”',
    subtitle: 'para os 30 primeiros',
    desc: 'Camiseta oficial da Pós-graduação em Saúde da Mulher, com estampa exclusiva para quem se posiciona como referência na área. Disponível apenas para os 30 primeiros inscritos durante o evento.',
  },
  {
    image: '/bonus02.webp',
    title: 'Guia de Marketing do Professor Rafael Tonietto',
    subtitle: 'para os 30 primeiros',
    desc: 'O guia definitivo para personal trainers que querem atrair mais clientes, construir autoridade nas redes sociais e aumentar o faturamento. Entregue gratuitamente para os 30 primeiros que garantirem sua vaga no evento.',
  },
  {
    image: '/bonus03.webp',
    title: 'Acesso antecipado ao MCO – Mapa da Consultoria Online',
    subtitle: '',
    desc: 'A metodologia definitiva para personal trainers que querem estruturar sua consultoria online e faturar alto, mesmo começando do zero.',
  },
];

const Bonus = () => {
  return (
    <section className="w-full bg-[#f8f9fc] text-black py-20 px-6">
      {/* Título principal */}
      <h2 className="font-poppins text-[24px] md:text-[32px] font-bold text-purple-500 mb-10 text-center">
        Além disso você também vai receber:
      </h2>

      {/* Lista de bônus */}
      <div className="space-y-8 max-w-[1200px] mx-auto">
        {bonusList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Imagem do bônus */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/3 object-cover"
            />

            {/* Texto descritivo */}
            <div className="p-6 space-y-2 md:w-2/3">
              <h3 className="font-poppins text-[16px] md:text-[24px] font-bold text-[#1e0b3c]">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="font-nunito text-[16px] text-purple-500 font-semibold">
                  {item.subtitle}
                </p>
              )}

              <p className="font-nunito text-[16px] text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bonus;
