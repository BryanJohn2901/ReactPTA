// src/components/SistemaCicloAprendizado.jsx
export default function SistemaCicloAprendizado() {
  return (
    <section className="bg-[#090b0f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Aqui a sua evolução é constante e seus{" "}
          <span className="text-blue-500">resultados são visíveis</span>, <br />
          através de um método que já formou mais de 4 mil alunos.
        </h2>
      </div>

      {/* Grid de 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Bloco Esquerdo */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-cyan-500 mb-2">Sistema expansão da prática</h3>
          <p className="text-sm md:text-base mb-6">
            O melhor sistema de aprendizado e prática desenvolvido <br />
            pela Personal Trainer Academy
          </p>
          <img
            src="/sistema-expansao.png" // salve a imagem na pasta public
            alt="Sistema expansão da prática"
            className="mx-auto md:mx-0 max-w-full"
          />
        </div>

        {/* Bloco Direito */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-cyan-500 mb-2">Ciclo de aprendizado constante</h3>
          <p className="text-sm md:text-base mb-6">
            O método que vai te fazer conquistar <br className="md:hidden" />
            mais clientes
          </p>
          <img
            src="/ciclo-aprendizado.png" // salve a imagem na pasta public
            alt="Ciclo de aprendizado constante"
            className="mx-auto md:mx-0 max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
