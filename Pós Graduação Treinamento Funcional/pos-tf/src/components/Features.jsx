import React from "react";
import { Book, Video, FileText, BarChart2 } from "lucide-react";
// Importe a imagem do notebook aqui
import mecLaptopSeal from "../assets/mec-laptop-seal.webp"; // Certifique-se de que o caminho está correto

const features = [
  {
    icon: <Book size={48} className="text-yellow-500" />,
    title: "E-BOOKS",
    description: "Acesso a conteúdos práticos com um único clique.",
  },
  {
    icon: <Video size={48} className="text-yellow-500" />,
    title: "AULAS AO VIVO",
    description:
      "Você poderá assistir a aula ao vivo ou a gravação que ficará disponível para assistir quando quiser.",
  },
  {
    icon: <FileText size={48} className="text-yellow-500" />,
    title: "ARTIGOS ATUALIZADOS",
    description:
      "Artigos sobre o assunto, recentes, selecionados e disponíveis para você.",
  },
  {
    icon: <BarChart2 size={48} className="text-yellow-500" />,
    title: "SEM TCC",
    description: "Você terá apenas avaliações dinâmicas.",
  },
];

const Features = () => {
  return (
    <section className="bg-black text-white">
      {/* Faixa MEC */}
      {/* Ajustado para centralizar o texto e posicionar a imagem */}
      <div className="bg-yellow-500 w-full flex flex-col md:flex-row justify-center items-center px-4 py-2 relative">
        {/* Texto centralizado e em duas linhas, com largura máxima para não ficar muito largo */}
        <div className="text-black font-bold italic text-center text-sm sm:text-base md:text-lg lg:text-xl md:max-w-xl md:mr-8"> {/* Removido <br> e ajustado margin-right */}
          PÓS-GRADUAÇÃO RECONHECIDA PELO MINISTÉRIO DA EDUCAÇÃO (MEC)
        </div>
        {/* Imagem do Notebook - Ajustado 'right' para trazê-la mais para o centro e 'h-XX' para tamanho */}
        <img
          src={mecLaptopSeal}
          alt="Portaria MEC"
          className="relative md:absolute md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 h-16 sm:h-20 md:h-24 lg:h-28 mt-2 md:mt-0" // Ajustes de posicionamento e responsividade
        />
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          <span className="text-yellow-500">Abordagem prática</span> e exemplos do seu dia a dia com:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-neutral-900 to-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-yellow-500 font-bold text-lg mt-4">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;