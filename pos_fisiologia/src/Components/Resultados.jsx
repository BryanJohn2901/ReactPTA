import React from 'react'

const mosaico = Array.from({ length: 6 }, (_, i) => `/resultados/resultado0${i + 1}.webp`)

const Resultados = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Linha degradê no topo */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent mb-10" />

      {/* Título principal */}
      <h2 className="font-poppins text-center text-xl md:text-2xl font-semibold max-w-4xl mx-auto mb-12">
        Veja os resultados que você também pode ter: <span className="font-bold">Controle sua pressão arterial e glicemia com eficiência!</span> Antes, durante e após os treinos, você será capaz de alcançar e monitorar mudanças incríveis como essas.
      </h2>

      {/* Mosaico de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {mosaico.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Resultado ${index + 1}`}
            className="rounded-2xl w-10/12 h-auto object-cover mx-auto"
          />
        ))}
      </div>
    </section>
  )
}

export default Resultados
