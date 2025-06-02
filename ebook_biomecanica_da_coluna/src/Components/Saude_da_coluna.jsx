// Saude_da_coluna.jsx
import React from 'react'
import { RefreshCcw } from 'lucide-react'

const Saude_da_coluna = () => {
  return (
    <section className="w-full py-16 bg-white text-black px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto explicativo */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
            A saúde da coluna do seu aluno depende de você
          </h2>
          <p className="text-base mb-4">
            A coluna vertebral é a estrutura central do nosso corpo. No entanto, má postura,
            sobrecarga e movimentos inadequados são os principais fatores que causam:
          </p>

          <ul className="space-y-2 mb-6">
            {['Hérnias de disco e protrusões.', 'Dores lombares crônicas.', 'Desalinhamentos e perda de mobilidade.'].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <RefreshCcw className="text-blue-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-4">
            Com o conhecimento certo em biomecânica aplicada, você será capaz de:
          </p>

          <ul className="space-y-2">
            {[
              'Corrigir movimentos prejudiciais em seus alunos e clientes.',
              'Aplicar técnicas seguras de fortalecimento do Core.',
              'Prevenir e tratar patologias comuns da coluna.'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <RefreshCcw className="text-blue-500 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem do notebook */}
        <div className="flex justify-center">
          <img
            src="/notebook-coluna.webp"
            alt="Notebook com conteúdo sobre a coluna"
            className="w-full max-w-md shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Saude_da_coluna