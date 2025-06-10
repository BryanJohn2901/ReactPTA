// src/components/Conquista.jsx
import React from "react"; // Importa a biblioteca React, essencial para criar componentes.

// Ícone SVG de check (verde)
const CheckIcon = () => ( // Define um componente funcional chamado CheckIcon.
  <svg // Inicia a definição de um elemento SVG, usado para gráficos vetoriais escaláveis.
    className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" // Aplica classes CSS (Tailwind CSS) para definir largura, altura, cor do texto (ícone verde), margem superior e impedir que o ícone diminua.
    fill="none" // Define que o preenchimento do SVG será "none" (sem cor de preenchimento).
    stroke="currentColor" // Define que a cor do traço (contorno) do SVG será a cor do texto atual (herdada do `text-green-600`).
    strokeWidth="2" // Define a largura do traço como 2 unidades.
    viewBox="0 0 24 24" // Define a área de visualização do SVG (caixa de coordenadas).
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />{" "}
    {/* Define o caminho do traço do ícone (o desenho do 'check'), com extremidades arredondadas e junções arredondadas. */}
  </svg>
);

// Componente Conquista
const Conquista = () => {
  // Define um componente funcional chamado Conquista.
  return (
    // Retorna o JSX que representa a estrutura visual do componente.
    <section className="bg-[#fefcf6] text-black py-16 px-4">
      {" "}
      {/* Define uma seção HTML com cor de fundo personalizada, cor de texto preta, padding vertical e horizontal. */}
      <div className="max-w-[1200px] mx-auto space-y-10">
        {" "}
        {/* Define uma div com largura máxima, centralizada horizontalmente e espaçamento vertical entre os elementos filhos. */}
        {/* Título e subtítulo (sem fundo) */}
        <div className="text-center space-y-4">
          {" "}
          {/* Define uma div para o título e subtítulo, centralizando o texto e adicionando espaçamento vertical. */}
          <h2 className="text-3xl font-bold">O que você vai conquistar</h2>{" "}
          {/* Título principal com tamanho de fonte grande e negrito. */}
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            {" "}
            {/* Parágrafo de subtítulo com tamanho de fonte base (médio em telas maiores), largura máxima e centralizado. */}
            Prescreva treinos para tronco e membros inferiores com domínio
            técnico, segurança articular e lógica biomecânica — mesmo em alunos
            com dor ou instabilidade lombar.
          </p>
        </div>
        {/* Cards de módulos */}
        <div className="space-y-6">
          {" "}
          {/* Define uma div para agrupar os "cards" dos módulos, com espaçamento vertical entre eles. */}
          {/* Módulo 1 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            {" "}
            {/* Define um "card" de módulo com fundo preto, texto branco, bordas arredondadas, padding, layout flexbox, alinhamento de itens no início e espaçamento entre eles, e uma sombra suave. */}
            <CheckIcon /> {/* Renderiza o componente CheckIcon (o ícone de 'check' verde). */}
            <div>
              {" "}
              {/* Define uma div para o conteúdo do módulo (título e lista). */}
              <h3 className="text-xl font-bold">Módulo 1 – Fundamentos Essenciais</h3>{" "}
              {/* Título do módulo com tamanho de fonte e negrito. */}
              <ul className="mt-2 space-y-1 text-sm">
                {" "}
                {/* Lista não ordenada com margem superior, espaçamento vertical entre itens e tamanho de fonte pequeno. */}
                <li>- Anatomia funcional da coluna (lombar, torácica e cervical).</li>{" "}
                {/* Item da lista. */}
                <li>- Mobilizar × Estabilizar: quando e por que usar cada estratégia.</li>{" "}
                {/* Item da lista. */}
              </ul>
            </div>
          </div>
          {/* Módulo 2 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            {" "}
            {/* Repete a estrutura de card para o Módulo 2. */}
            <CheckIcon /> {/* Renderiza o componente CheckIcon. */}
            <div>
              <h3 className="text-xl font-bold">Módulo 2 – Avaliação Prática</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- 12 testes objetivos (5 em pé, 4 deitado, 3 sentados).</li>
                <li>- 5 perguntas-chave de anamnese para direcionar o plano.</li>
              </ul>
            </div>
          </div>
          {/* Módulo 3 */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            {" "}
            {/* Repete a estrutura de card para o Módulo 3. */}
            <CheckIcon /> {/* Renderiza o componente CheckIcon. */}
            <div>
              <h3 className="text-xl font-bold">Módulo 3 – Exercícios Críticos e Ajustes Técnicos</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- Agachamento, Stiff, Levantamento Terra.</li>
                <li>- Prancha, Bird-Dog, Hip Thrust.</li>
                <li>- Contraindicações, regressões e progressões seguras.</li>
              </ul>
            </div>
          </div>
          {/* Bônus */}
          <div className="bg-black text-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            {" "}
            {/* Repete a estrutura de card para os Bônus. */}
            <CheckIcon /> {/* Renderiza o componente CheckIcon. */}
            <div>
              <h3 className="text-xl font-bold">Bônus Exclusivo</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>- Masterclass de Biomecânica da Coluna.</li>
                <li>- Planilha de Progressões de Carga.</li>
                <li>- Certificado de conclusão reconhecido.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conquista; // Exporta o componente Conquista para que ele possa ser usado em outras partes da aplicação.