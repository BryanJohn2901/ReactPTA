// src/components/EditoraDiferente.jsx

import React from "react";
import { Send } from "lucide-react";

const EditoraDiferente = () => {
  return (
    <section className="bg-[#f0f8ff] py-16 px-4">
      {/* Grid responsivo */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card claro */}
        <div className="bg-[#f7f2ed] rounded-xl p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold font-poppins text-slate-900 mb-4">
              Uma Editora Diferente de Tudo Que Você Já Viu
            </h2>
            <p className="text-slate-800 font-inter">
              Um livro parado não muda sua carreira. O que queremos é que você leia,
              aprenda, e, acima de tudo, coloque em prática cada conceito. Combinamos a
              experiência de grandes especialistas com o conhecimento dos melhores livros
              para garantir que você aplique tudo o que aprendeu nos seus treinos e
              atendimentos.
              <br />
              <br />
              Aqui, o plano é simples: sem desculpas, só resultados.
            </p>
          </div>

          {/* Botão pequeno alinhado à esquerda */}
          <button className="self-start flex items-center gap-2 border border-slate-800 text-slate-900 font-inter font-bold px-3 py-1.5 rounded-md hover:bg-slate-100 transition text-sm">
            Saiba mais <Send size={14} />
          </button>
        </div>

        {/* Card escuro */}
        <div className="bg-[#1f1f29] rounded-xl p-6 flex flex-col gap-6 text-white">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold font-poppins mb-4">
              Você Nunca Mais Estudará Sozinho
            </h2>
            <p className="text-slate-200 font-inter">
              Vamos explorar cada aspecto do conteúdo com você. Trouxemos especialistas
              dedicados a guiar sua compreensão de cada livro: explicando os conceitos
              principais, respondendo às suas dúvidas, trazendo as informações mais
              atualizadas, e oferecendo uma abordagem prática e aplicada. Você vai
              aprender de forma profunda e personalizada, agregando mais valor ao que já
              está nos livros e transformando esse conhecimento em resultados reais para
              sua carreira.
            </p>
          </div>

          {/* Botão pequeno alinhado à esquerda */}
          <button className="self-start flex items-center gap-2 border border-white text-white font-inter font-bold px-3 py-1.5 rounded-md hover:bg-white hover:text-black transition text-sm">
            Saiba mais <Send size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditoraDiferente;
