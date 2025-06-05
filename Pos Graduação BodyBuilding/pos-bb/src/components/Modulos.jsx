import React from 'react';

const courseModules = [
  'Da emoção à razão: como fazer seu cliente entender que o sucesso só depende dele?',
  'Casos de lantanga 4.0 construindo donas de respeito',
  'Peitoral e Deltóides: prescrição multiplanar',
  'Treinando braços: bíceps, tríceps e antebraços.',
  'Como identificar e corrigir desvios posturais que atrapalham um físico de sucesso',
  'Comendo para o sucesso: nutrição aplicada ao bodybuilding',
  'Como treinar e periodizar para ganhar campeonatos?',
  'Treino para ter um shape de sucesso',
  'Maior e Mais Forte: a importância da força máxima para hipertrofia muscular',
  'Além da nutrição convencional: como escolher suplementos alimentares para treinar melhor',
  'Estratégias de cardio para potencializar resultados estéticos',
  'Abdomen definido: treinamento abdominal e linha de cintura',
  'Métodos estratégicos de treinamento para hipertrofia',
  'Critérios de seleção dos exercícios e prescrição do treino para posteriores de coxas',
  'Como treinar o quadríceps femoral para o máximo desenvolvimento',
  'Prescrição em 3D para obter os glúteos definidos',
  'Hormônios e recursos ergogênicos farmacológicos para hipertrofia muscular',
  'Desfilando como campeões: os segredos para apresentar um físico incrível em qualquer lugar',
];

const Modulos = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      {/* Título Principal da Seção */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-3xl mx-auto leading-tight text-gray-800">
        <span className="text-red-600">18 meses de puro conhecimento e</span> aprendido sobre Bodybuilding
      </h2>

      {/* Grid de Módulos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {courseModules.map((module, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Módulo {String(index + 1).padStart(2, '0')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{module}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modulos;