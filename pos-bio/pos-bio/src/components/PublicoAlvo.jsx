// src/components/PublicoAlvo.jsx
export default function PublicoAlvo() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-100 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-700 mb-12">
        Uma Pós-graduação feita para profissionais...
      </h2>

      <div className="bg-[#0c0c0c] text-white rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Item 1 */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-blue-500">Especialistas em Biomecânica</p>
          <p>
            Profissionais que querem se tornar especialistas em Biomecânica com
            conhecimentos aplicados à musculação e reabilitação
            musculoesquelética.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-blue-500">Reconhecimento pelo MEC</p>
          <p>
            Quem quer sair na frente dos demais profissionais do mercado com o
            título de pós-graduado reconhecido pelo MEC.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-blue-500">Ganho e Autoridade</p>
          <p>
            Que pretende destravar o seu potencial e ganhar mais de 15 mil reais
            com o domínio de conhecimentos práticos e inovadores, se tornando
            autoridade como Personal Trainer.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-blue-500">Diferenciação e Crescimento</p>
          <p>
            E para profissionais que querem avançar o próximo passo nas suas
            carreiras e se diferenciar da concorrência, ocupando os melhores
            lugares e alcançando os maiores salários.
          </p>
        </div>
      </div>
    </section>
  );
}
