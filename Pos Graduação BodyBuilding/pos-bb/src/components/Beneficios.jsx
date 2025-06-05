import { Clock, Video, FileText, ClipboardList, Percent } from 'lucide-react';

const data = [
  {
    icon: <Clock className="w-10 h-10 text-red-500" />,
    title: "Horário Flexível",
    description: (
      <>
        As aulas serão ministradas um final de semana por mês, <br />
        <span className="text-red-500">
          no sábado à tarde – 13h30 às 18h e Domingo de manhã – 8h às 12h30.
        </span>
      </>
    ),
  },
  {
    icon: <Video className="w-10 h-10 text-red-500" />,
    title: "Aula Ao Vivo",
    description: (
      <>
        Você poderá assistir a aula ao vivo <br />
        ou a <span className="text-red-500">gravação que ficará disponível</span> para assistir quando quiser.
      </>
    ),
  },
  {
    icon: <FileText className="w-10 h-10 text-red-500" />,
    title: "Artigos Atualizados",
    description: (
      <>
        Artigos sobre o assunto, recentes, selecionados e{" "}
        <span className="text-red-500">disponíveis para você.</span>
      </>
    ),
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-red-500" />,
    title: "Avaliações Dinâmicas",
    description: (
      <>
        Desenvolva suas habilidades e aplique seus conhecimentos{" "}
        <span className="text-red-500">através das nossas avaliações ativas.</span>
      </>
    ),
  },
  {
    icon: <Percent className="w-10 h-10 text-red-500" />,
    title: "Método EspecialistaPro",
    description: (
      <>
        O método <span className="text-red-500">Especialista PRO</span>, parte essencial da Pós-graduação em <br />
        <span className="text-red-500">
          Bodybuilding e Estética Corporal: prescrição e treinamento para atletas e praticantes de musculação
        </span>{" "}
        foi criado para que você aplique o Bodybuilding de forma prática, elevando sua credibilidade e aumentando seu faturamento.
      </>
    ),
  },
];

export default function Beneficios() {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="text-red-500">Abordagem prática</span> e exemplos do seu dia a dia com:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] p-6 rounded-md shadow-md border border-zinc-800 flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Botão "Matricule-se agora" */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 border border-red-600 rounded-lg text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-colors">
          Matricule-se agora
        </button>
      </div>
    </section>
  );
}
