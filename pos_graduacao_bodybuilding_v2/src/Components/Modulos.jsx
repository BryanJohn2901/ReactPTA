import React from 'react'; // Importa a biblioteca React, essencial para a construção de componentes.
// Note: Nenhum ícone ou outro componente externo é importado diretamente aqui, como em alguns outros componentes.

// Lista de módulos do curso, cada um com um título e uma descrição.
const modulos = [
    { titulo: "Módulo 01", texto: "Da emoção à razão: como fazer seu cliente entender que o sucesso só depende dele?" },
    { titulo: "Módulo 02", texto: "Casco de tartaruga 4-D: construindo dorsais de respeito" },
    { titulo: "Módulo 03", texto: "Peitoral e Deltoides: prescrição multiplanar" },
    { titulo: "Módulo 04", texto: "Treinando braços: bíceps, tríceps e antebraços." },
    { titulo: "Módulo 05", texto: "Como identificar e corrigir desvios posturais que atrapalham um físico de sucesso" },
    { titulo: "Módulo 06", texto: "Comendo para o sucesso: nutrição aplicada ao bodybuilding" },
    { titulo: "Módulo 07", texto: "Como treinar e periodizar para ganhar campeonatos?" },
    { titulo: "Módulo 08", texto: "Treino para ter um shape de sucesso" },
    { titulo: "Módulo 09", texto: "Maior e Mais Forte: a importância da força máxima para hipertrofia muscular" },
    { titulo: "Módulo 10", texto: "Além da nutrição convencional: como escolher suplementos alimentares para treinar melhor" },
    { titulo: "Módulo 11", texto: "Estratégias de cardio para potencializar resultados estéticos" },
    { titulo: "Módulo 12", texto: "Abdomen definido: treinamento abdominal e linha de cintura" },
    { titulo: "Módulo 13", texto: "Métodos estratégicos de treinamento para hipertrofia." },
    { titulo: "Módulo 14", texto: "Critérios de seleção dos exercícios e prescrição do treino para posteriores de coxas" },
    { titulo: "Módulo 15", texto: "Como treinar o quadríceps femoral para o máximo desenvolvimento" },
    { titulo: "Módulo 16", texto: "Prescrição em 3-D para obter os glúteos definidos" },
    { titulo: "Módulo 17", texto: "Hormônios e recursos ergogênicos farmacológicos para hipertrofia muscular" },
    { titulo: "Módulo 18", texto: "Desfilando como campeões: os segredos para apresentar um físico incrível em qualquer lugar" }
];

const Modulos = () => { // Define o componente funcional principal chamado Modulos.
    return (
        // O 'return' especifica o que será renderizado pelo componente.
        <section className="bg-gray-100 text-black py-16 px-4">
            {/* Define uma seção HTML que serve como o contêiner principal para o conteúdo dos módulos.
                - bg-gray-100: Define a cor de fundo da seção como um cinza muito claro.
                - text-black: Define a cor do texto padrão dentro desta seção como preto.
                - py-16: Adiciona um padding vertical de 4rem (64px).
                - px-4: Adiciona um padding horizontal de 1rem (16px). */}

            {/* Título da seção */}
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
                {/* Título principal da seção de módulos.
                    - text-center: Centraliza o texto.
                    - text-2xl md:text-3xl: Define o tamanho da fonte (2xl em telas menores, 3xl em médias e grandes).
                    - font-bold: Define o peso da fonte como negrito.
                    - mb-12: Adiciona uma margem inferior de 3rem (48px) para separar o título do grid de módulos. */}
                18 meses de puro <span className="text-red-600">conhecimento e aprendizado sobre Bodybuilding</span>
                {/* - text-red-600: Define a cor de uma parte do texto como vermelho para destaque. */}
            </h2>

            {/* Grid de módulos */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Define uma div que age como um contêiner para os cards de módulos.
                    - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
                    - mx-auto: Centraliza o contêiner horizontalmente.
                    - grid: Habilita o display CSS Grid.
                    - grid-cols-1: Em telas muito pequenas, o grid terá 1 coluna.
                    - sm:grid-cols-2: Em telas pequenas (sm) e maiores, o grid terá 2 colunas.
                    - md:grid-cols-3: Em telas médias (md) e maiores, o grid terá 3 colunas de tamanho igual.
                    - gap-6: Adiciona um espaçamento de 1.5rem (24px) entre os cards do grid. */}
                {modulos.map((modulo, index) => (
                    // O método `map` é usado para iterar sobre o array `modulos`.
                    // Para cada `modulo` no array, ele renderiza uma div que age como um "card" de módulo.
                    <div
                        key={index} // `key` é uma propriedade especial no React que ajuda na identificação de elementos em listas, melhorando a performance. `index` é usado aqui como uma key única.
                        className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 hover:shadow-md transition"
                        // Estilos de cada card de módulo:
                        // - bg-white: Fundo branco.
                        // - rounded-xl: Bordas arredondadas grandes.
                        // - shadow-sm: Sombra suave.
                        // - p-4: Padding interno de 1rem (16px).
                        // - border border-gray-200: Borda fina e cinza claro.
                        // - hover:shadow-md: Aumenta a sombra ao passar o mouse, indicando interatividade.
                        // - transition: Adiciona uma transição suave para as mudanças de estilo (como a sombra no hover).
                    >
                        <h3 className="font-semibold text-sm text-red-600 mb-1">{modulo.titulo}</h3>
                        {/* Título do módulo.
                            - font-semibold: Peso da fonte semi-negrito.
                            - text-sm: Tamanho da fonte pequeno.
                            - text-red-600: Cor do texto vermelha.
                            - mb-1: Pequena margem inferior para separar do texto. */}
                        <p className="text-sm text-gray-800">{modulo.texto}</p>
                        {/* Descrição do módulo.
                            - text-sm: Tamanho da fonte pequeno.
                            - text-gray-800: Cor do texto cinza escuro. */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Modulos; // Exporta o componente Modulos para que ele possa ser importado e usado em outras partes da aplicação.
