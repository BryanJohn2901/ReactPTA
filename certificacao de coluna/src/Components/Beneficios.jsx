// src/components/Beneficios.jsx
import React from "react"; // Importa a biblioteca React para permitir a criação de componentes.

// Ícone SVG de check verde
const CheckIcon = () => (
  // Define um componente funcional chamado CheckIcon.
  <svg
    // Inicia a definição de um elemento SVG para exibir um ícone.
    className="w-7 h-7 text-green-600 flex-shrink-0 mt-1"
    // Aplica classes CSS (Tailwind CSS) para definir a largura, altura, cor do ícone (verde), impedir que ele diminua e adicionar uma margem superior.
    fill="none"
    // Define que o preenchimento interno do SVG não terá cor.
    stroke="currentColor"
    // Define que a cor do traço (contorno) do SVG será a cor do texto atual (que é verde por causa de 'text-green-600').
    strokeWidth="2"
    // Define a espessura do traço do SVG.
    viewBox="0 0 24 24"
    // Define a caixa de visualização do SVG, que é o sistema de coordenadas para o seu conteúdo.
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Desenha o caminho do ícone de "check" dentro do SVG, com pontas e junções arredondadas. */}
  </svg>
);

// Componente Benefícios Imediatos
const Beneficios = () => {
  // Define o componente funcional principal chamado Beneficios.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <section className="bg-[#fefcf6] py-16 px-4 text-black">
      {" "}
      {/* Define uma seção HTML com uma cor de fundo personalizada, padding vertical e horizontal, e cor de texto preta. */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {" "}
        {/* Define uma div que serve como container, limitando a largura do conteúdo, centralizando-o horizontalmente e adicionando espaçamento vertical entre os elementos internos. */}
        {/* Título */}
        <h2 className="text-3xl font-bold text-center">
          {" "}
          {/* Define o título principal da seção com tamanho de fonte grande, negrito e texto centralizado. */}
          Benefícios imediatos após o curso
        </h2>
        {/* Lista de benefícios */}
        <div className="space-y-6">
          {" "}
          {/* Define uma div para agrupar a lista de benefícios, com espaçamento vertical entre os itens. */}
          {[
            // Inicia um array de strings, onde cada string é um benefício a ser listado.
            "Domínio técnico avançado da Core Spine (estabilidade lombo-pélvica)",
            "Prescrição segura de agachamento, stiff e terra para alunos sensíveis",
            "Correção prática das compensações (valgo dinâmico, retroversão pélvica, etc.)",
            "Mais performance e menos risco de recaída de dor nas costas",
            "Argumentos biomecânicos sólidos para justificar suas decisões técnicas.",
          ].map((item, index) => (
            // Usa o método 'map' para iterar sobre o array de benefícios e renderizar um item de lista para cada um.
            <div
              key={index} // Atribui uma 'key' única a cada item da lista, o que é uma boa prática no React para otimização de renderização. O 'index' do array é usado como key aqui.
              className="bg-black text-white rounded-xl p-6 flex items-start gap-4"
              // Aplica classes CSS para o estilo de cada item do benefício: fundo preto, texto branco, bordas arredondadas, padding, layout flexbox, alinhamento de itens no início e espaçamento entre eles.
            >
              <CheckIcon /> {/* Renderiza o componente CheckIcon (o ícone de "check"). */}
              <p>{item}</p> {/* Exibe o texto do benefício atual dentro de um parágrafo. */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios; // Exporta o componente Beneficios para que ele possa ser importado e usado em outras partes da aplicação.