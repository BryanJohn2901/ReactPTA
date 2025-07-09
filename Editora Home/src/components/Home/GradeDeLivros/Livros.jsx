const livros = [
  {
    titulo: "Personal Trainer On-line",
    descricao:
      "Este livro é o guia essencial para personal trainers que querem expandir seu negócio para o digital, ganhar mais liberdade e aumentar seus ganhos.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Manual de Musculação Feminina",
    descricao:
      "Um guia essencial para personal trainers que desejam dominar o treinamento feminino, entender as particularidades do corpo da mulher e oferecer resultados que realmente importam.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Saúde Do Idoso",
    descricao:
      "Um guia essencial para quem deseja promover a saúde e o bem-estar dos idosos, explorando como a inatividade física impacta na qualidade de vida.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Avaliação e Prescrição Clínica de Exercício Físico",
    descricao:
      "Com uma abordagem clínica e prática, ele é um manual essencial para quem quer se especializar no atendimento a grupos especiais.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "O Livro dos Glúteos",
    descricao:
      "Um guia essencial para entender, fortalecer e definir os glúteos com precisão anatômica.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Biomecânica Aplicada à Reabilitação de Lesões",
    descricao:
      "Este livro é um guia essencial para personal trainers que querem se especializar na reabilitação de lesões comuns.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Biomecânica Prática no Exercício Físico",
    descricao:
      "Este livro vai além da teoria – é direto ao ponto, desenvolvido para aplicar conceitos de forma imediata nas sessões de treino.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
  {
    titulo: "Guia Definitivo do Marketing para Personal Trainers",
    descricao:
      "O guia essencial para personal trainers que querem atrair mais clientes, construir autoridade e aumentar o faturamento.",
    imagem: "/livros/Livro-Dos-Gluteos.webp",
  },
];


const Livros = () => {
  return (
    <section className="bg-[#f0f8ff] py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {livros.map((livro, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="mb-4 h-[300px] object-cover"
            />
            <h3 className="text-base font-bold font-poppins text-slate-900 mb-2">
              {livro.titulo}
            </h3>
            <p className="text-sm text-slate-700 font-inter mb-4 px-2">
              {livro.descricao}
            </p>
            <button className="font-inter bg-[#00135C] text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-900 transition">
              Saiba Mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Livros;
