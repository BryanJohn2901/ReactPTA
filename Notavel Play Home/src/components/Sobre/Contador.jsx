import React, { useEffect, useState } from 'react'

const Contador = () => {
  const [alunos, setAlunos] = useState(0)
  const [professores, setProfessores] = useState(0)
  const [aulas, setAulas] = useState(0)

  useEffect(() => {
    const animateValue = (setFn, end, duration) => {
      let start = 0
      const increment = end / (duration / 10)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setFn(Math.floor(start))
      }, 10)
    }

    animateValue(setAlunos, 10000, 1500)
    animateValue(setProfessores, 30, 1500)
    animateValue(setAulas, 300, 1500)
  }, [])

  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-4xl font-bold text-[#E60046]">+{alunos.toLocaleString()}</h3>
          <p className="text-pink-600 mt-2">Alunos</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#E60046]">+{professores}</h3>
          <p className="text-pink-600 mt-2">Professores</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#E60046]">+{aulas}</h3>
          <p className="text-pink-600 mt-2">Aulas</p>
        </div>
      </div>
    </div>
  )
}

export default Contador
