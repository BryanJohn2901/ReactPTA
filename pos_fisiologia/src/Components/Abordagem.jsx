import React from 'react'
import { Clock, Video, FileText, ClipboardList, Percent } from 'lucide-react' // Ícones genéricos

// Card com fontes aplicadas
const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-[#111] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center font-sans">
    <Icon className="h-8 w-8 text-cyan-400 mb-4" />
    <h3 className="text-lg font-bold mb-2 font-poppins">{title}</h3>
    <p className="text-sm text-gray-300">
      {description}
    </p>
  </div>
)

const Abordagem = () => {
  return (
    <section className="bg-black py-16 px-4 font-sans">
      {/* Título com fonte Poppins */}
      <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-12 font-poppins">
        <span className="text-cyan-400">Abordagem prática</span> e exemplos do seu dia a dia com:
      </h2>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card
          icon={Clock}
          title="Horário Flexível"
          description={
            <>
              As aulas serão ministradas um final de semana por mês, <span className="text-cyan-400 font-medium">no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.</span>
            </>
          }
        />
        <Card
          icon={Video}
          title="Aula Ao Vivo"
          description={
            <>
              Você poderá assistir a aula ao vivo ou a gravação <span className="text-cyan-400 font-medium">que ficará disponível para assistir quando quiser.</span>
            </>
          }
        />
        <Card
          icon={FileText}
          title="Artigos Atualizados"
          description={
            <>
              Artigos sobre o assunto, recentes, selecionados e <span className="text-cyan-400 font-medium">disponíveis para você.</span>
            </>
          }
        />
        <Card
          icon={ClipboardList}
          title="Avaliações Dinâmicas"
          description={
            <>
              Desenvolva suas habilidades e aplique seus conhecimentos <span className="text-cyan-400 font-medium">através das nossas avaliações ativas.</span>
            </>
          }
        />
        <Card
          icon={Percent}
          title="Método EspecialistaPro"
          description={
            <>
              O método Especialista PRO foi criado para que você aplique todo o conhecimento de forma prática, <span className="text-cyan-400 font-medium">elevando sua credibilidade e aumentando seu faturamento.</span>
            </>
          }
        />
      </div>
    </section>
  )
}

export default Abordagem
