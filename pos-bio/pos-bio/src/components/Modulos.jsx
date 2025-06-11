// src/components/CourseModules.jsx
import React from 'react';

// Dados dos módulos para tornar o componente reutilizável e fácil de atualizar
const modulesData = [
  { id: 1, title: 'Módulo 01', description: 'Biomecânica da coluna: avaliação, reabilitação e treinamento do core' },
  { id: 2, title: 'Módulo 02', description: 'Biomecânica da marcha e corrida: como avaliar e prescrever com segurança' },
  { id: 3, title: 'Módulo 03', description: 'Avaliação biomecânica postural e funcional: como interpretar e prescrever com segurança' },
  { id: 4, title: 'Módulo 04', description: 'Mobilidade Articular' },
  { id: 5, title: 'Módulo 05', description: 'Doenças e lesões de ombro, cotovelo e punho e como reabilitar com a musculação' },
  { id: 6, title: 'Módulo 06', description: 'Biomecânica prática em exercícios de membros inferiores: hipertrofia e força muscular' },
  { id: 7, title: 'Módulo 07', description: 'Emagrecimento na musculação: como utilizar métodos e técnicas diferenciadas para garantir o resultado do seu cliente' },
  { id: 8, title: 'Módulo 08', description: 'Periodização e métodos de treinos na musculação' },
  { id: 9, title: 'Módulo 09', description: 'Musculação e treinamento para grupos especiais: gestantes, hipertensos, diabéticos e idosos' },
  { id: 10, title: 'Módulo 10', description: 'Postura na musculação, no trabalho (ergonomia) e nas atividades diárias: como garantir saúde e estética corporal' },
  { id: 11, title: 'Módulo 11', description: 'Nutrição: da reabilitação à estética corporal' },
  { id: 12, title: 'Módulo 12', description: 'Biomecânica aplicada aos exercícios com peso do corpo e treinamento funcional' },
  { id: 13, title: 'Módulo 13', description: 'Prevenção e reabilitação de lesões de membros inferiores' },
  { id: 14, title: 'Módulo 14', description: 'Doenças e lesões de quadri, joelho e tornozelo e como reabilitar com a musculação' },
  { id: 15, title: 'Módulo 15', description: 'Metodologia de vendas on-line: montagem de esteira de produtos e caminhos para vender no Instagram' },
  { id: 16, title: 'Módulo 16', description: 'Análise biomecânica vetorial aplicada a exercícios livres e nas máquinas da musculação' },
  { id: 17, title: 'Módulo 17', description: 'Biomecânica aplicada a hipertrofia e força de membros superiores' },
  { id: 18, title: 'Módulo 18', description: 'Interpretação de exames laboratoriais: oferecendo mais credibilidade à sua atuação' },
];

const Modulos = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-12 leading-tight">
          18 meses de puro conhecimento e <br className="md:hidden" />aprendizado sobre Biomecânica
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modulesData.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-gray-700">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modulos;