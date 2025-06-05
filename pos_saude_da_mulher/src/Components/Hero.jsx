// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden pb-[150px] md:pb-0">
            {/* Imagem de fundo para mobile */}
            <img
                src="/banner_saude_da_mulher_mobile.webp"
                alt="Banner Mobile"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 md:hidden"
            />

            {/* Imagem de fundo para desktop */}
            <img
                src="/banner_saude_da_mulher.webp"
                alt="Banner Desktop"
                className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
            />

            {/* Overlay roxo com leve transparência */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4b0082]/70 to-black/80 z-10" />

            {/* Wrapper central com largura máxima de 1200px */}
            <div className="relative z-20 flex items-center justify-between h-full px-8 md:px-16 max-w-[1200px] mx-auto">
                {/* Texto e logo à esquerda, centralizado no mobile */}
                <div className="max-w-xl text-white space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Logo com margin-top apenas no mobile */}
                    <img
                        src="/logo_saude_da_mulher.svg"
                        alt="Logo Saúde da Mulher"
                        className="w-[180px] mb-4 mt-[250px] md:mt-0"
                    />

                    {/* Título principal */}
                    <h1 className="text-[32px] font-bold leading-tight font-poppins">
                        Emagrecimento, fisiologia hormonal e treinamento
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-[16px] md:text-base text-gray-200 font-nunito">
                        Seja uma referência no <span className="text-purple-400">atendimento feminino</span> e tenha mais segurança ao dominar na prática conhecimentos essenciais para a <span className="text-purple-400">saúde da mulher</span>.
                    </p>

                    {/* Botão de ação */}
                    <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition font-nunito">
                        MATRICULE-SE AGORA
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
