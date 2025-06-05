// src/components/Checkout.jsx
import React, { useState } from 'react';
import Popup from './Popup';

const planos = [
  {
    valor: 'R$297,00',
    parcelas: '18x',
    bandeiras: '/pagamento02.svg',
    beneficios: [
      'Pós-Graduação em Saúde da mulher',
      'Bônus de inscrição',
      'Valor e condição especial',
      'Comunidade PTA Insiders',
      'Não utiliza limite do cartão, somente valor da parcela',
    ],
  },
  {
    destaque: true,
    valor: 'R$247,00',
    parcelas: '18x',
    bandeiras: '/pagamento01.svg',
    beneficios: [
      'Pós-Graduação em Saúde da mulher',
      'Bônus de inscrição',
      'Valor e condição especial',
      'Comunidade PTA Insiders',
      'Não utiliza limite do cartão, somente valor da parcela',
    ],
  },
  {
    valor: 'R$197,00',
    parcelas: '24x',
    bandeiras: '/pagamento01.svg',
    beneficios: [
      'Pós-Graduação em Saúde da mulher',
      'Bônus de inscrição',
      'Valor e condição especial',
      'Comunidade PTA Insiders',
      'Não utiliza limite do cartão, somente valor da parcela',
    ],
  },
];

const Checkout = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-[24px] md:text-[32px] font-bold">
          Escolha a melhor forma de pagamento
        </h2>
        <p className="text-purple-400 font-nunito text-[16px] mt-2">
          Oferta Disponível (05/06/2025)
        </p>
      </div>

      {/* Grid de planos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {planos.map((plan, i) => (
          <div
            key={i}
            className="relative bg-white text-black rounded-xl pt-10 p-6 flex flex-col items-center text-center space-y-4 shadow-lg"
          >
            {plan.destaque && (
              <div className="absolute top-0 left-0 w-full bg-lime-500 text-white text-xs font-bold py-2 rounded-t-xl">
                RECOMENDADO
              </div>
            )}

            <h3 className="font-poppins text-[20px] font-bold">Lote Promocional</h3>

            <ul className="text-left font-nunito text-[16px] space-y-1">
              {plan.beneficios.map((b, idx) => (
                <li key={idx}>• {b}</li>
              ))}
            </ul>

            <p className="text-[16px] font-nunito mt-4">
              Por apenas <span className="font-bold">{plan.parcelas}</span> de
            </p>
            <p className="text-[24px] font-bold text-purple-600 font-poppins">
              {plan.valor}
            </p>

            {/* Botão abre o popup */}
            <button
              onClick={() => setShowPopup(true)}
              className="bg-purple-500 hover:bg-purple-600 transition text-white font-bold py-3 px-6 rounded-lg w-full"
            >
              MATRICULE-SE
            </button>

            <img
              src={plan.bandeiras}
              alt="Formas de pagamento"
              className="mt-2 max-h-10 w-auto mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Popup Condicional */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default Checkout;
