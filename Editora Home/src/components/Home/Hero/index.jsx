import { Play } from "lucide-react"; // Ícone de play
import ListaSuspensa from "./listaSuspensa";

const Hero = () => {
    return (
        // Seção com fundo claro
        <section className="bg-[#f0f8ff] pb-0 pt-[200px]">
            {/* Botão suspenso */}
            <ListaSuspensa />

            {/* Conteúdo centralizado */}
            <div className="max-w-[1200px] mx-auto text-center px-4">
                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-slate-900 leading-tight mb-6">
                    Livros Que Fazem a Diferença na<br />
                    Sua Prática Diária
                </h1>

                {/* Descrição */}
                <p className="font-inter text-slate-600 max-w-2xl mx-auto text-lg mb-10">
                    Nossa seleção abrange tudo o que você precisa para se destacar como personal
                    trainer. Desde os fundamentos de biomecânica até estratégias avançadas de
                    marketing, encontre o conteúdo certo para elevar o nível dos seus treinos e
                    garantir resultados surpreendentes para seus alunos.
                </p>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <button className="font-inter flex items-center gap-2 border border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-blue-50 transition">
                        <Play className="w-4 h-4" />
                        Assistir
                    </button>

                    <button className="font-inter bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition">
                        Quero Meu Livro
                    </button>
                </div>
            </div>

            {/* Imagem em largura total (fora do container) */}
            <div className="mt-10">
                <img
                    src="/livros.webp"
                    alt="Livros em destaque"
                    className="w-full h-auto"
                />
            </div>

            <div className="text-center py-10">
                <p className="text-3xl md:text-4xl font-bold font-poppins text-blue-600 leading-tight">
                    Apresentamos sua nova<br className="hidden sm:block" />
                    experiência de aprendizado
                </p>
            </div>
        </section>
    );
};

export default Hero;
