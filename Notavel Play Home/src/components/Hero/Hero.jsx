import React, { useState } from 'react'
import HeroCards from './HeroCards'
import HeroDepoimentos from './HeroDepoimentos'

const Hero = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="w-full bg-[#080B3C] text-white px-4 py-10">
            {/* Container centralizado com largura máxima de 1200px */}
            <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
                {/* Texto principal */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light leading-snug mb-8">
                    <strong className="font-semibold">Tenha um atendimento de referência</strong> e conquiste <br />
                    novos alunos, com a maior e mais completa escola <br />
                    de formação de Personal Trainers do Brasil.
                </h2>

                {/* Player de vídeo direto na tela */}
                <div className="w-full max-w-3xl aspect-video mb-8">
                    <iframe
                        className="w-full h-full rounded-md shadow-lg border border-pink-600"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Modal do vídeo (ainda funcional com capa e botão de play) */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="relative w-full max-w-5xl aspect-video">
                            <iframe
                                className="w-full h-full rounded-md"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-2"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}

                {/* Botão e imagem das pessoas */}
                <div className="mt-4">
                    <button className="bg-pink-600 text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-pink-700 transition">
                        COMEÇAR AGORA
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <img src="/pessoas.webp" alt="Profissionais" className="h-8" />
                        <span className="text-xs text-white font-light">+4000 profissionais alavancados</span>
                    </div>
                </div>
            </div>
            <HeroCards />
            <HeroDepoimentos />
        </div>
    )
}

export default Hero