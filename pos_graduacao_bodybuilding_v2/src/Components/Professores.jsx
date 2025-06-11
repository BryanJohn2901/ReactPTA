import React, { useEffect, useState } from 'react'; // Importa React, o hook useEffect para efeitos colaterais e useState para gerenciar o estado do slide.
import 'keen-slider/keen-slider.min.css'; // Importa o CSS essencial para o Keen Slider.
import { useKeenSlider } from 'keen-slider/react'; // Importa o hook 'useKeenSlider' para integrar o slider ao React.

const Professores = () => {
    // Estado para controlar o slide ativo no carrossel.
    // 'currentSlide' armazena o índice do slide atualmente visível.
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hook 'useKeenSlider' para inicializar e controlar o carrossel.
    // Retorna 'sliderRef' (para anexar ao elemento do slider) e 'instanceRef' (para acessar a API do slider).
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true, // Define que o carrossel deve ser infinito (loop).
        slides: {
            perView: 5, // Exibe 5 slides por vez por padrão.
            spacing: 20, // Espaçamento de 20px entre os slides.
        },
        // Breakpoints para responsividade: Ajusta o número de slides por vez e o espaçamento em diferentes tamanhos de tela.
        breakpoints: {
            '(max-width: 1600px)': { // Para telas com largura máxima de 1600px
                slides: { perView: 4, spacing: 20 }, // 4 slides, 20px de espaçamento.
            },
            '(max-width: 1024px)': { // Para telas com largura máxima de 1024px (telas de tablet/laptop menores)
                slides: { perView: 2, spacing: 15 }, // 2 slides, 15px de espaçamento.
            },
            '(max-width: 640px)': { // Para telas com largura máxima de 640px (telas de celular)
                slides: { perView: 1, spacing: 10 }, // 1 slide, 10px de espaçamento.
            },
        },
        // Callback que é acionado sempre que o slide muda.
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel); // Atualiza o estado 'currentSlide' com o índice relativo do slide atual.
        },
    });

    // Efeito para implementar o autoplay (rolagem automática dos slides).
    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next(); // Avança para o próximo slide a cada 3 segundos.
        }, 3000);
        // Função de limpeza: Limpa o intervalo quando o componente é desmontado ou as dependências mudam,
        // para evitar vazamentos de memória e comportamentos inesperados.
        return () => clearInterval(interval);
    }, [instanceRef]); // A dependência 'instanceRef' garante que o efeito seja re-executado se a instância do slider mudar (o que é raro, mas boa prática).

    // Gerar imagens dinamicamente para os professores.
    // Cria um array com 18 caminhos de imagem, formatando os números com zero à esquerda (ex: professor01.webp).
    const professores = Array.from({ length: 18 }, (_, i) => `/professores/professor${String(i + 1).padStart(2, '0')}.webp`);

    return (
        <section className="bg-[#0b0f1a] py-16 px-4">
            {/* Seção principal do componente Professores.
                - bg-[#0b0f1a]: Cor de fundo muito escura, quase preta.
                - py-16: Padding vertical de 4rem (64px).
                - px-4: Padding horizontal de 1rem (16px). */}

            {/* Título da seção */}
            <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">
                {/* Título centralizado, com tamanhos de fonte responsivos, negrito, texto branco e margem inferior. */}
                Uma equipe de <span className="text-red-500">profissionais especializados</span> que irão te guiar no caminho do sucesso.
                {/* Parte do título em vermelho para destaque. */}
            </h2>

            {/* Slider: Contêiner para o Keen Slider. */}
            <div className="max-w-[1900px] mx-auto">
                {/* Contêiner que limita a largura do slider e o centraliza.
                    - max-w-[1900px]: Largura máxima de 1900px. */}
                <div ref={sliderRef} className="keen-slider">
                    {/* O atributo 'ref={sliderRef}' conecta esta div ao Keen Slider.
                        A classe 'keen-slider' é necessária para o funcionamento do CSS do slider. */}
                    {professores.map((src, index) => (
                        // Mapeia o array de 'professores' para renderizar cada imagem como um slide.
                        <div key={index} className="keen-slider__slide rounded-xl overflow-hidden">
                            {/* Cada div representa um slide individual.
                                - key={index}: Chave única para cada slide (importante para o React).
                                - keen-slider__slide: Classe necessária para o Keen Slider.
                                - rounded-xl: Bordas arredondadas para as imagens dentro do slide.
                                - overflow-hidden: Garante que o conteúdo não vaze se for maior que o contêiner arredondado. */}
                            <img src={src} alt={`Professor ${index + 1}`} className="w-full h-auto rounded-xl" />
                            {/* Imagem do professor.
                                - w-full h-auto: Ocupa 100% da largura do slide e mantém a proporção da altura.
                                - rounded-xl: Bordas arredondadas para a imagem. */}
                        </div>
                    ))}
                </div>

                {/* Pontos indicadores de navegação do slider. */}
                <div className="flex justify-center gap-2 mt-6">
                    {/* Contêiner flexível para os pontos, centralizado, com espaçamento e margem superior. */}
                    {professores.map((_, idx) => (
                        // Mapeia o array de 'professores' novamente para criar um botão para cada slide.
                        <button
                            key={idx} // Chave única para cada botão.
                            onClick={() => instanceRef.current?.moveToIdx(idx)} // Ao clicar, move o slider para o índice correspondente.
                            className={`w-3 h-3 rounded-full ${currentSlide % professores.length === idx
                                ? 'bg-red-500' // Cor vermelha se o slide atual corresponder ao índice do botão.
                                : 'bg-white/30' // Cor cinza translúcida se não for o slide ativo.
                            }`}
                            // Estiliza os pontos: pequeno círculo, cor dinâmica baseada no slide ativo.
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Professores; // Exporta o componente Professores para ser usado em outras partes da aplicação.
