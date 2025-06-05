// src/components/Modulos.jsx
import React from 'react';

const modulos = [
  { titulo: 'Módulo 01', texto: 'Biomecânica e hipertrofia muscular de membros inferiores no treinamento feminino' },
  { titulo: 'Módulo 02', texto: 'Cross Training e circuitos de alta intensidade para mulheres' },
  { titulo: 'Módulo 03', texto: 'Corrida e Pilates para o público feminino' },
  { titulo: 'Módulo 04', texto: 'LPF: aplicações práticas na funcionalidade e na estética feminina' },
  { titulo: 'Módulo 05', texto: 'Treinamento em condições especiais de saúde feminina: osteoporose, fibromialgia, diabetes, hipertensão e outras doenças' },
  { titulo: 'Módulo 06', texto: 'BodyBuilding Feminino: métodos de treino para ganho de massa magra e força em mulheres' },
  { titulo: 'Módulo 07', texto: 'Periodização e prescrição do treinamento a partir do ciclo menstrual' },
  { titulo: 'Módulo 08', texto: 'Fisiologia hormonal feminina: endocrinologia e resultados estéticos' },
  { titulo: 'Módulo 09', texto: 'Prevenção e reabilitação de lesões de membros inferiores' },
  { titulo: 'Módulo 10', texto: 'Nutrição feminina: da saúde física aos resultados estéticos' },
  { titulo: 'Módulo 11', texto: 'Métodos de treino de emagrecimento para mulheres' },
  { titulo: 'Módulo 12', texto: 'Reabilitação musculoesquelética em patologias de maior prevalência no sexo feminino' },
  { titulo: 'Módulo 13', texto: 'Treinamento para gestantes no pré e pós-parto: cuidados no atendimento e diástase abdominal' },
  { titulo: 'Módulo 14', texto: 'Treinamento híbrido funcional no atendimento presencial e on-line' },
  { titulo: 'Módulo 15', texto: 'Marketing Digital: produção de conteúdo, posicionamento e vendas on-line' },
  { titulo: 'Módulo 16', texto: 'Biohacking: um método inovador para elevar as 5 esferas do desempenho feminino' },
  { titulo: 'Módulo 17', texto: 'Avaliação Postural e física: como avaliar para obter estética corporal e saúde articular' },
  { titulo: 'Módulo 18', texto: 'Biomecânica e hipertrofia muscular de Membros Superiores e Core Training no treinamento feminino' },
];

const Modulos = () => {
  return (
    <section className="w-full bg-[#f8f9fc] text-black py-20 px-6">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-poppins font-bold text-center text-purple-500 mb-12">
        18 meses de puro conhecimento e aprendizado sobre <br className="hidden md:block" /> Saúde da mulher
      </h2>

      {/* Grid de módulos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {modulos.map((modulo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 space-y-2 font-nunito"
          >
            <h3 className="font-semibold text-2xl font-poppins">{modulo.titulo}</h3>
            <p className="text-base text-gray-700 font-nunito">{modulo.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modulos;
