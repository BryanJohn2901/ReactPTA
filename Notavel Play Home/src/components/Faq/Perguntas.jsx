import React from 'react'

const Perguntas = () => {
  const faqs = [
    {
      pergunta: 'Teste de 7 dias:',
      resposta:
        'Para fazer o teste de 7 dias você deve assinar A Personal Trainer Academy por meio de um cartão de crédito ou PayPal, manter selecionada a opção de 7 dias grátis e então, antes de vencer o prazo de 7 dias, realizar o cancelamento da assinatura.',
    },
    {
      pergunta: 'Fidelidade:',
      resposta:
        'Não exigimos fidelidade.\n\nAo adquirir nossa assinatura no modelo de mensalidade, você pode cancelar quando quiser, sem que seja necessário continuar por mais de um mês.\n\nNo plano anual, você ganha 5 certificações e se compromete com seus estudos por 12 meses.',
    },
    {
      pergunta: 'Problema no acesso às aulas?',
      resposta:
        'Em nosso portal, temos um módulo chamado Comece por Aqui.\n\nAli, explicamos sobre a origem da nossa escola, damos dicas de livros e também sobre como utilizar nossa Lista de aulas.',
    },
    {
      pergunta: 'Por onde começar? Quais aulas assistir?',
      resposta:
        'Em nosso portal, temos um módulo chamado Comece por Aqui.\n\nAli, explicamos sobre a origem da nossa escola, damos dicas de livros e também sobre como utilizar nossa Lista de aulas.',
    },
    {
      pergunta: 'Acesso ao Grupo',
      resposta:
        'Temos um grupo exclusivo para alunos no WhatsApp. Para acessar, entre no primeiro módulo da Personal Trainer Academy.',
    },
  ]

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 text-left">
      {faqs.map((faq, index) => (
        <details key={index} className="border-b border-blue-600 py-4 cursor-pointer">
          <summary className="text-blue-700 font-semibold text-sm hover:underline">
            {faq.pergunta}
          </summary>
          <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">{faq.resposta}</p>
        </details>
      ))}
    </div>
  )
}

export default Perguntas