// src/components/Garantia.jsx
import React from "react";

// Componente Garantia com imagem à esquerda
const Garantia = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Coluna da imagem da garantia */}
        <div className="flex justify-center">
          <img
            src="/garantia.webp"
            alt="Garantia de 7 dias"
            className="w-full max-w-sm md:max-w-full h-auto object-contain"
          />
        </div>

        {/* Coluna do texto e botão */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-[#D00727] text-lg font-semibold">
            Satisfação garantida ou o seu dinheiro de volta
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Você tem 7 dias para assistir a todo o conteúdo. Se não sentir evolução na sua prescrição, basta enviar uma mensagem e devolveremos 100 % do valor investido.
          </p>

          <button className="bg-[#D00727] hover:bg-[#b9061f] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            SIM! QUERO A CERTIFICAÇÃO!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Garantia;
