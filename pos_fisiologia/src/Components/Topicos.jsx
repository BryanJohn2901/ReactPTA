import React from 'react'
import { Rocket, TrendingUp, HandCoins, BookOpen } from 'lucide-react' // ícones

const Topicos = () => {
  return (
    <section className="bg-[#EBECED] py-16 px-4">
      {/* Título principal */}
      <h2 className=" font-poppins text-center text-cyan-500 text-2xl md:text-3xl font-semibold mb-12">
        Uma Pós-graduação feita para profissionais...
      </h2>

      {/* Bloco escuro com tópicos */}
      <div className="bg-black text-white rounded-xl p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tópico 1 */}
        <div>
          <Rocket className="h-6 w-6 text-cyan-400 mb-4" />
          <p>
            Para aqueles que querem produzir transformações significativas na vida de seus clientes e se estabelecer como referência no atendimento a grupos especiais.
          </p>
        </div>

        {/* Tópico 2 */}
        <div>
          <TrendingUp className="h-6 w-6 text-cyan-400 mb-4" />
          <p>
            Para aqueles que querem se tornar especialistas em prescrever exercícios seguros para idosos, hipertensos, gestantes e outros grupos especiais, tornando-se o Personal Trainer mais disputado do mercado.
          </p>
        </div>

        {/* Tópico 3 */}
        <div>
          <HandCoins className="h-6 w-6 text-cyan-400 mb-4" />
          <p>
            Para aqueles que querem elevar seus ganhos atendendo às populações especiais de saúde que valorizam serviços especializados, com potencial para alcançar mais de R$ 10 mil por mês.
          </p>
        </div>

        {/* Tópico 4 */}
        <div>
          <BookOpen className="h-6 w-6 text-cyan-400 mb-4" />
          <p>
            Para aqueles que querem ser reconhecidos e indicados por médicos e fisioterapeutas ao atender com eficácia grupos especiais, tornando-se uma referência para encaminhamentos de pacientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Topicos
