import React from 'react'

const modulos = [
  { titulo: 'Módulo 01', texto: 'Fisiologia Hormonal e Nutrição para grupos especiais: aplicação prática dos resultados de Exames Laboratoriais' },
  { titulo: 'Módulo 02', texto: 'Fisiopatologia da obesidade: prática e ciência na prescrição de exercícios para emagrecimento' },
  { titulo: 'Módulo 03', texto: 'Fisiopatologia da hipertensão arterial: avaliação e prescrição de exercícios para reduzir a pressão desde a primeira sessão' },
  { titulo: 'Módulo 04', texto: 'Fisiopatologia da diabetes, dislipidemia e síndrome metabólica: avaliação e prescrição de exercícios na prática' },
  { titulo: 'Módulo 05', texto: 'Fisiopatologia do câncer: avaliação e prescrição de exercícios práticos' },
  { titulo: 'Módulo 06', texto: 'Fisiologia das desordens mentais: avaliação e prescrição de exercício para pessoas com ansiedade, depressão e TDAH' },
  { titulo: 'Módulo 07', texto: 'Fisiologia da gestação: como prescrever exercícios para gestantes e pós-parto' },
  { titulo: 'Módulo 08', texto: 'Avaliação e prescrição de exercício para indivíduos com espectro autista' },
  { titulo: 'Módulo 09', texto: 'Fisiologia e desenvolvimento motor: avaliação e prescrição de exercício para criança e adolescente' },
  { titulo: 'Módulo 10', texto: 'Clínica prática de exercícios aeróbico e de força para a pessoa idosa: atendimento domiciliar, em estúdio e academia' },
  { titulo: 'Módulo 11', texto: 'Fisiopatologia das doenças reumáticas: avaliação e prescrição de exercício para pessoas com fibromialgia' },
  { titulo: 'Módulo 12', texto: 'Avaliação e reabilitação postural e de movimentos nas populações especiais' },
  { titulo: 'Módulo 13', texto: 'Prevenção e reabilitação de lesões: coluna, joelho e ombro' },
  { titulo: 'Módulo 14', texto: 'Fisiologia aplicada ao treinamento de força: da estética à competição' },
  { titulo: 'Módulo 15', texto: 'Marketing e vendas para o Personal Trainer: como (ser referência) lotar sua agenda com clientes considerados grupos especiais' },
  { titulo: 'Módulo 16', texto: 'Fisiologia do exercício: periodização do treinamento de força e hipertrofia - do iniciante ao avançado' },
  { titulo: 'Módulo 17', texto: 'Fisiologia do Exercício e Treinamento no Esporte: do Amador ao Alto Rendimento' },
  { titulo: 'Módulo 18', texto: 'Fisiologia do exercício aplicado ao treinamento aeróbio: contínuo e HIIT como estratégia de treinamento' },
]

const Modulos = () => {
  return (
    <section className="bg-[#EBECED] py-16 px-4 font-sans">
      {/* Linha decorativa no topo */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mb-10" />

      {/* Título centralizado */}
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#06B6D4] mb-12 font-poppins">
        18 meses de puro conhecimento e <br className="md:hidden" />
        aprendizado sobre Fisiologia do Exercício
      </h2>

      {/* Grid dos módulos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulos.map((modulo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 text-gray-800"
          >
            <h3 className="font-bold mb-2 font-poppins">{modulo.titulo}</h3>
            <p className="text-sm">{modulo.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Modulos
