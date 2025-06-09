import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const Dizem = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="bg-[#0c0c0c] text-white py-20 px-6 text-center">
            {/* Título */}
            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-purple-400 mb-10">
                O que os alunos estão dizendo
            </h2>

            {/* Capa com botão de play */}
            <div className="relative max-w-4xl mx-auto cursor-pointer group" onClick={() => setIsOpen(true)}>
                <img
                    src="/imagem_video.webp"
                    alt="Depoimento de alunos"
                    className="w-full rounded-xl shadow-xl"
                />
                {/* Ícone Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="text-white group-hover:text-purple-500 transition w-20 h-20" />
                </div>
            </div>

            {/* Modal com vídeo */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-6xl aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Depoimento"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                        {/* Botão fechar */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Dizem;
