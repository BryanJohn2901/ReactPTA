import React from "react";
// Importe a imagem de fundo aqui
import heroBgImage from '../assets/hero-bg.jpg'; // Certifique-se de que o caminho está correto

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4 relative" // Adicione 'relative' para o overlay
      style={{
        backgroundImage: `url(${heroBgImage})`, // Ative aqui depois que colocar a imagem
        // backgroundColor: "#000", // Remova a cor de fundo provisória
      }}
    >
      {/* Overlay escuro para "apagar" a imagem e garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Ajuste a opacidade (60%) conforme necessário */}

      <div className="text-white max-w-3xl relative z-10"> {/* Adicione 'relative z-10' para o texto ficar acima do overlay */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Reabilitação de lesões, <br />
          condicionamento físico e performance
        </h1>
        <p className="text-base sm:text-lg mb-2">
          Torne-se um expert em treinamento funcional e saiba como entregar resultados de{" "}
          <span className="text-yellow-500 font-medium">hipertrofia</span>,{" "}
          <span className="text-yellow-500 font-medium">emagrecimento e performance</span> para os seus alunos.
        </p>
        <p className="italic text-sm sm:text-base mb-6">
          Seja uma referência no treinamento funcional e{" "}
          <span className="text-yellow-400 font-semibold">
            tenha mais segurança para dominar a prescrição e periodização de treinos.
          </span>
        </p>
        <button className="bg-yellow-500 text-black font-extrabold py-3 px-6 rounded shadow hover:bg-yellow-400 transition">
          MATRICULE-SE AGORA!
        </button>
      </div>
    </div>
  );
};

export default Hero;