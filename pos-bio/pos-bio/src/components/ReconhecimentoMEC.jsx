// src/components/ReconhecimentoMEC.jsx
import { Clock, Users, FileText, ClipboardList, Percent } from "lucide-react";

export default function ReconhecimentoMEC() {
  return (
    <section className="bg-[#090b0f] text-white relative overflow-hidden">
      {/* Faixa azul com texto */}
      <div className="bg-[#2563eb] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-extrabold uppercase">
            Pós-graduação reconhecida pelo Ministério da Educação (MEC)
          </h3>
        </div>

        {/* Imagem sobreposta */}
        <img
          src="/mec-certificado.png" // coloque sua imagem na pasta public
          alt="Certificado MEC"
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-32 md:w-52 z-20"
        />
      </div>

      {/* Texto da seção */}
      <div className="text-center px-4 mt-12 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-blue-500">Abordagem prática</span> e exemplos do seu dia a dia com:
        </h2>
      </div>

      {/* Grid dos 5 cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {/* Card 1 */}
        <div className="bg-[#0d111b] rounded-lg p-6 text-center shadow-md">
          <Clock className="mx-auto text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Horário Flexível</h3>
          <p className="text-sm leading-relaxed">
            As aulas serão ministradas um final de semana por mês,
            <br />
            <span className="text-blue-500 font-medium">
              no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0d111b] rounded-lg p-6 text-center shadow-md">
          <Users className="mx-auto text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aula Ao Vivo</h3>
          <p className="text-sm leading-relaxed">
            Você poderá assistir a aula ao vivo ou a
            <br />
            <span className="text-blue-500 font-medium">
              gravação que ficará disponível para assistir quando quiser.
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0d111b] rounded-lg p-6 text-center shadow-md">
          <FileText className="mx-auto text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Artigos Atualizados</h3>
          <p className="text-sm leading-relaxed">
            Artigos sobre o assunto, recentes, selecionados e
            <br />
            <span className="text-blue-500 font-medium">disponíveis para você.</span>
          </p>
        </div>

        {/* Card 4 - Avaliações Dinâmicas */}
        <div className="bg-[#0d111b] rounded-lg p-6 text-center shadow-md">
          <ClipboardList className="mx-auto text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Avaliações Dinâmicas</h3>
          <p className="text-sm leading-relaxed">
            Desenvolva suas habilidades e aplique seus conhecimentos
            <br />
            <span className="text-blue-500 font-medium">
              através das nossas avaliações ativas.
            </span>
          </p>
        </div>

        {/* Card 5 - Método EspecialistaPro */}
        <div className="bg-[#0d111b] rounded-lg p-6 text-center shadow-md">
          <Percent className="mx-auto text-blue-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Método EspecialistaPro</h3>
          <p className="text-sm leading-relaxed">
            O método <span className="text-blue-500 font-medium">Especialista PRO</span>, parte essencial da
            <br />
            <span className="text-blue-500 font-medium">
              Pós-graduação em Biomecânica, Musculação e Reabilitação Musculoesquelética
            </span>
            , foi criado para que você aplique a biomecânica de forma prática, elevando sua credibilidade e aumentando seu faturamento.
          </p>
        </div>
      </div>
    </section>
  );
}
