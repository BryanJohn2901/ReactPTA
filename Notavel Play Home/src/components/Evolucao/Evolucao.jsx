import React from 'react'

const Evolucao = () => {
  return (
    <div className="w-full h-[1000px] bg-[#03032c] bg-cover bg-center text-white px-4 py-20" style={{ backgroundImage: "url('/bgEvolucao.webp')" }}>
      <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Conteúdo */}
          <div className="md:w-1/2 max-w-[330px] text-left bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Conteúdo</h2>
            <p className="text-base leading-relaxed">
              Aqui você aprende. Você não precisa estudar por anos. Nosso conteúdo foi estruturado para que você aprenda de maneira rápida e prática, as habilidades mais importantes para a prescrição de exercícios e reabilitação, com os maiores especialistas do mercado fitness.
            </p>
          </div>

          {/* Comunidade */}
          <div className="md:w-1/2 max-w-[330px] text-left bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Comunidade</h2>
            <p className="text-base leading-relaxed">
              Aqui você conecta. Você não está sozinho. Na nossa comunidade você faz networking e se relaciona com personal trainers de diferentes níveis, idades e áreas de atuação, que já trilharam o caminho e que agora trocam experiências valiosas com você.
            </p>
          </div>
        </div>

        {/* Marketing Digital */}
        <div className="max-w-[330px] text-left mt-12 bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Marketing Digital</h2>
          <p className="text-base leading-relaxed">
            Aqui você conquista novos alunos e aumenta seu faturamento. Você aplica o que aprendeu, imediatamente. No Marketing Digital você utiliza as estratégias aprendidas para atrair mais clientes e aumentar sua receita, aplicando os conhecimentos de forma prática e eficiente.
          </p>
        </div>

        {/* Botão final */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#E60046] text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-[#cc0040] transition">
            SEJA UM NOTÁVEL
          </button>
        </div>
      </div>
    </div>
  )
}

export default Evolucao