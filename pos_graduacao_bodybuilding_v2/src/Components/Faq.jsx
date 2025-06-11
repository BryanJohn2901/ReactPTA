import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do acordeão (qual FAQ está ativa).

// Lista de perguntas e respostas para o FAQ
const faqs = [
  {
    pergunta: 'Quais são as Formas de Pagamento?',
    resposta: `Você pode pagar com qualquer cartão, boleto ou PIX.

Se você optar pelo pagamento com cartão de crédito recorrente, você precisa ter apenas limite suficiente para o pagamento da primeira mensalidade.

Caso queira parcelar o pagamento via boleto bancário, você pode entrar em contato com nossa equipe comercial, é só clicar no botão verde ao lado de tirar dúvidas que iremos te ajudar!`,
  },
  {
    pergunta: 'Como acesso o conteúdo?',
    resposta: `O acesso ao Portal do Aluno é enviado para seu e-mail imediatamente após a confirmação do pagamento.

As aulas acontecem todo 4º fim de semana de cada mês, sábado à tarde (das 13h30 às 18h) e Domingo (das 8 às 12h30). Elas são totalmente on-line e AO VIVO.

As aulas ficam gravadas, e caso você não consiga assistir na hora da aula, poderá assistir quantas vezes quiser.`,
  },
  {
    pergunta: 'Qual número total de horas da Pós?',
    resposta: `Os cursos compreendem 360 horas de conteúdo. O aluno terá até 21 dias para interagir com as aulas/momentos síncronos e 90 dias para realizar o teste (questionário) da disciplina. O conteúdo poderá ser consultado ao longo de todo o curso.`,
  },
  {
    pergunta: 'Possui certificado de conclusão?',
    resposta: `Sim, a Pós-graduação em Bodybuilding e Estética Corporal possui certificado, reconhecido pelo MEC com a portaria nº 1.058 de 27/12/2021.

Ao concluir a Pós-graduação, você se tornará especialista em Bodybuilding e estética corporal.`,
  },
];

// Componente Faq com funcionalidade de acordeão
const Faq = () => {
  // Define o estado 'ativo' para controlar qual item do FAQ está aberto.
  // 'null' significa que nenhum item está aberto. O 'index' do item aberto será armazenado aqui.
  const [ativo, setAtivo] = useState(null);

  // Função para alternar a visibilidade de um item do FAQ.
  // Se o item clicado já estiver ativo, ele será fechado (setAtivo(null)).
  // Caso contrário, o item clicado será aberto (setAtivo(index)).
  const toggleFaq = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    // Seção principal do FAQ com fundo preto e padding.
    <section className="bg-black text-white py-16 px-4">
      {/* Contêiner com largura máxima, centralizado, usando grid para duas colunas em telas médias e maiores. */}
      {/* items-start: Alinha os itens do grid ao topo. */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Coluna esquerda: Título e informações de contato */}
        <div>
          {/* Parágrafo estilizado como um "tag" ou categoria. */}
          <p className="text-red-500 font-bold uppercase text-sm mb-1">F.A.Q.</p>
          {/* Título principal da seção de perguntas frequentes. */}
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          {/* Texto descritivo com opacidade. */}
          <p className="text-sm text-white/80 mb-6">
            Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
          </p>
          {/* Botão para entrar em contato (simulado). */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
            TIRAR DÚVIDAS
          </button>
        </div>

        {/* Coluna direita: Acordeão de Perguntas e Respostas */}
        <div className="space-y-4">
          {/* Mapeia o array 'faqs' para renderizar cada item como um painel do acordeão. */}
          {faqs.map((faq, index) => (
            // Contêiner para cada item do acordeão.
            // rounded-lg: Bordas arredondadas.
            // overflow-hidden: Garante que o conteúdo não vaze das bordas arredondadas ao ser animado.
            <div key={index} className="bg-red-700/90 rounded-lg overflow-hidden">
              {/* Botão que, ao ser clicado, alterna a visibilidade da resposta. */}
              <button
                onClick={() => toggleFaq(index)} // Chama toggleFaq com o índice do item clicado.
                className="w-full text-left px-6 py-4 font-semibold text-white"
                // w-full: Ocupa a largura total.
                // text-left: Alinha o texto à esquerda.
                // px-6 py-4: Padding.
                // font-semibold text-white: Estilo do texto.
              >
                {faq.pergunta} {/* Exibe a pergunta do FAQ. */}
              </button>
              {/* Renderiza a resposta condicionalmente: só aparece se o 'index' atual for igual ao 'ativo'. */}
              {ativo === index && (
                <div className="bg-black text-white px-6 py-4 text-sm whitespace-pre-line">
                  {/* Div para a resposta.
                      bg-black text-white: Fundo preto e texto branco.
                      px-6 py-4: Padding.
                      text-sm: Tamanho da fonte pequeno.
                      whitespace-pre-line: Preserva quebras de linha no texto da resposta. */}
                  {faq.resposta} {/* Exibe a resposta do FAQ. */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; // Exporta o componente Faq para ser usado em outras partes da aplicação.
