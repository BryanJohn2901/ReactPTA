import React from "react";

// Ícone SVG inline (check vermelho)
const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#D00727] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Componente Aprender
const Aprender = () => {
  return (
    <section className="bg-[#fefcf6] text-black py-16 px-4 text-center">
      {/* Container central com largura máxima de 1200px */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Título principal */}
        <h2 className="text-3xl font-bold">O que você vai aprender</h2>

        {/* Grid de módulos - 3 por linha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Módulo 1 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">HIP CORE:</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>O grande responsável pela saúde do joelho, fortalecendo a região do quadril e proporcionando maior estabilidade nos movimentos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento paralelo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Exercício clássico que ativa toda a musculatura das pernas e glúteos, garantindo força e estabilidade articular.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento sumo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Com uma base mais ampla, esse agachamento enfatiza o trabalho dos adutores e glúteos, além de melhorar a mobilidade do quadril.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 4 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento com os pés juntos</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Foca no quadríceps e exige maior equilíbrio, sendo ideal para aprimorar o controle motor e fortalecer os joelhos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 5 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Agachamento búlgaro</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Variante unilateral que melhora força, equilíbrio e coordenação, reduzindo desequilíbrios musculares entre as pernas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 6 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Afundo</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Exercício fundamental para o fortalecimento de pernas e glúteos, promovendo maior estabilidade e resistência muscular.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Módulo 7 */}
          <div className="bg-black text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Biomecânica do Stiff</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Movimentação essencial para o fortalecimento dos isquiotibiais e glúteos, além de trabalhar a mobilidade da cadeia posterior.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bônus */}
          <div className="bg-[#D00727] text-white rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <div>
                <h3 className="text-lg md:text-xl font-bold">+ Bônus</h3>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>✅ Testes biomecânicos para você compreender as dores no joelho</li>
                  <li>✅ MasterClass – analise biomecânica do joelho</li>
                  <li>✅ Livro digital “Biomecânica do joelho”</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aprender;