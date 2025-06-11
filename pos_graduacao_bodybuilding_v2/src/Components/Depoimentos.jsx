import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado de visibilidade do modal.
// import { Clock, Video, FileText, ClipboardList, Percent } from 'lucide-react'; // Ícones lucide-react não são usados neste componente diretamente, mas podem ter vindo de outro contexto.

const Depoimentos = () => {
    // Define o estado 'showModal' e a função 'setShowModal' para controlar a visibilidade do modal de vídeo.
    // Inicialmente, 'showModal' é 'false', o que significa que o modal não estará visível.
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="bg-black text-white py-16 px-4">
            {/* Define a seção principal do componente 'Depoimentos'.
                - bg-black: Define a cor de fundo como preta.
                - text-white: Define a cor do texto padrão dentro desta seção como branca.
                - py-16: Adiciona um padding vertical de 4rem (64px).
                - px-4: Adiciona um padding horizontal de 1rem (16px). */}

            {/* Título da seção */}
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
                {/* Título com centralização de texto, tamanhos de fonte responsivos, negrito e margem inferior. */}
                <span className="text-red-600">O que os alunos estão dizendo</span>
                {/* Parte do título com a cor vermelha para destaque. */}
            </h2>

            {/* Vídeo com capa e botão de play */}
            <div className="flex justify-center">
                {/* Contêiner flexível para centralizar o vídeo/capa. */}
                <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-[0_0_40px_5px_rgba(255,0,0,0.3)]">
                    {/* Contêiner relativo para a capa do vídeo, com largura total e máxima, bordas arredondadas,
                        'overflow-hidden' para cortar conteúdo que excede as bordas, e uma sombra personalizada vermelha. */}
                    <img
                        src="/capa_video_depoimento.webp" // Caminho da imagem de capa do vídeo.
                        alt="Depoimento" // Texto alternativo para acessibilidade.
                        className="w-full h-auto object-cover" // A imagem ocupa 100% da largura, altura automática e cobre o espaço disponível.
                    />
                    <button
                        onClick={() => setShowModal(true)} // Ao clicar, define 'showModal' como 'true' para abrir o modal.
                        className="absolute inset-0 flex items-center justify-center"
                        // Botão de play: Posicionado absolutamente para cobrir toda a capa do vídeo.
                        // - absolute inset-0: Ocupa toda a área do pai relativo.
                        // - flex items-center justify-center: Centraliza o ícone de play dentro do botão.
                    >
                        <div className="bg-black bg-opacity-60 text-white rounded-full p-4">
                            {/* Círculo escuro translúcido para o ícone de play. */}
                            <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                {/* Ícone de play em SVG. */}
                                <path d="M3 22v-20l18 10-18 10z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {/* Modal do vídeo (renderizado condicionalmente) */}
            {showModal && ( // O modal só será renderizado se 'showModal' for 'true'.
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    {/* Overlay do modal: Cobre toda a tela, com fundo preto semi-transparente e z-index alto. */}
                    <div className="bg-black w-[90%] max-w-6xl h-[70vh] rounded-xl overflow-hidden relative">
                        {/* Contêiner do vídeo dentro do modal: Fundo preto, largura responsiva, altura fixa,
                            bordas arredondadas e 'overflow-hidden' para o vídeo. */}
                        {/* Botão de fechar o modal */}
                        <button
                            onClick={() => setShowModal(false)} // Ao clicar, define 'showModal' como 'false' para fechar o modal.
                            className="absolute top-2 right-2 text-white text-2xl z-10"
                            // Botão de fechar: Posicionado no canto superior direito do modal, com texto branco e z-index para ficar acima do vídeo.
                        >
                            &times; {/* Caractere HTML para o símbolo 'x' (fechar). */}
                        </button>

                        {/* Iframe do vídeo do YouTube */}
                        <iframe
                            className="w-full h-full" // Ocupa 100% da largura e altura do seu contêiner pai.
                            src="https://www.youtube.com/embed/IGr2GqKZKgM?autoplay=1" // URL do vídeo do YouTube. 'autoplay=1' para iniciar automaticamente.
                            title="Depoimento de Aluno" // Título para o iframe, importante para acessibilidade.
                            frameBorder="0" // Remove a borda padrão do iframe.
                            allow="autoplay; encrypted-media" // Permite autoplay e mídia criptografada.
                            allowFullScreen // Permite a exibição em tela cheia.
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Depoimentos; // Exporta o componente Depoimentos para que ele possa ser importado e usado em outras partes da aplicação.
