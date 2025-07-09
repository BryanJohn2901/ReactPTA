import React from 'react'
import Videos from './Videos'

const Depoimentos = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
          Eles queriam ser reconhecidos e conseguiram!
        </h2>
      </div>
      <Videos />
    </div>
  )
}

export default Depoimentos