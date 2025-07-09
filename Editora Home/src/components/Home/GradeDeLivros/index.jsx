import Livros from "./livros";

// src/components/GradeDeLivros.jsx
const GradeDeLivros = () => {
  return (
    // Seção com fundo claro e espaçamento
    <section className="bg-[#f0f8ff] py-16 px-4 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 mb-4">
        Conheça nossa vitrine especial
      </h2>

      {/* Subtítulo com quebra de linha responsiva */}
      <p className="font-inter text-slate-700 text-base max-w-2xl mx-auto font-medium leading-relaxed">
        Aqui você encontra os livros essenciais para aprimorar seu conhecimento em<br className="hidden md:block" />
        treinamento, biomecânica e reabilitação.
      </p>

      <Livros />
    </section>
  );
};

export default GradeDeLivros;
