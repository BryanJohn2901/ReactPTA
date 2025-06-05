import React, { useState } from 'react'

const perguntas = [
  {
    pergunta: 'Quais são as Formas de Pagamento?',
    resposta: `Você pode pagar com qualquer cartão, boleto ou PIX.

Se você optar pelo pagamento com cartão de crédito recorrente, você precisa ter apenas limite suficiente para o pagamento da primeira mensalidade.

Caso queira parcelar o pagamento via boleto bancário, você pode entrar em contato com nossa equipe comercial, é só clicar no botão verde ao lado de tira dúvidas que iremos te ajudar!`,
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
    resposta: `Sim, a Pós-graduação em Fisiologia do Exercício. Aplicada à reabilitação e prescrição para Grupos Especiais é certificada, reconhecida pelo MEC.

Ao concluir a Pós-graduação, você se tornará especialista em Fisiologia do Exercício. Aplicada à reabilitação e prescrição para Grupos Especiais.`,
  },
]

const Faq = () => {
  const [ativa, setAtiva] = useState(0)

  return (
    <section className="bg-black text-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Lado esquerdo: título e botão */}
        <div>
          <p className="text-sm text-cyan-400 font-semibold mb-2">F.A.Q.</p>
          <h2 className="text-3xl font-bold mb-4 font-poppins">Perguntas Frequentes</h2>
          <p className="mb-8">
            Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5541998458801&text=Ol%C3%A1,%20participei%20da%20Biomec%C3%A2nica%20Experience%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20P%C3%B3s%20de%20Biomec%C3%A2nica"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto block text-center bg-cyan-400 hover:bg-cyan-500 transition text-black font-bold py-3 px-6 rounded-lg font-poppins"
          >
            FALE COM UM ESPECIALISTA
          </a>
        </div>

        {/* Lado direito: perguntas */}
        <div className="space-y-6">
          {perguntas.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setAtiva(index)}
                className={`w-full text-left text-white font-semibold px-6 py-4 rounded-t-lg bg-cyan-400 hover:bg-cyan-500 transition font-poppins`}
              >
                {item.pergunta}
              </button>
              {ativa === index && (
                <div className="bg-[#1a1a1a] px-6 py-4 rounded-b-lg text-sm whitespace-pre-line text-white border border-cyan-400 border-t-0">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
