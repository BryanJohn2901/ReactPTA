// src/components/Footer.jsx
import React from "react"; // Importa a biblioteca React, que é fundamental para a construção de componentes de interface.
import { Youtube, Instagram, Link } from "lucide-react"; // Importa os ícones 'Youtube', 'Instagram' e 'Link' da biblioteca 'lucide-react'.
// Esses ícones são componentes SVG que podem ser usados diretamente no JSX.
// O comentário no código original sugere que podem ser trocados por SVGs inline se necessário, para evitar dependências externas.

const Footer = () => {
  // Define o componente funcional Footer.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <footer className="bg-[#111] text-white py-6 px-4">
      {/* Define o elemento HTML `<footer>`, que geralmente contém informações de direitos autorais, links sociais, etc.
          - bg-[#111]: Define a cor de fundo do rodapé como um cinza muito escuro (quase preto).
          - text-white: Define a cor do texto padrão dentro do rodapé como branco.
          - py-6: Adiciona um padding vertical de 1.5rem (24px) na parte superior e inferior.
          - px-4: Adiciona um padding horizontal de 1rem (16px) nas laterais. */}

      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Define uma div que serve como um contêiner interno para o conteúdo do rodapé.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - flex: Habilita o display flexbox para os elementos filhos diretos.
            - flex-col: Em telas pequenas (padrão), os itens flexíveis serão empilhados em coluna (verticalmente).
            - md:flex-row: Em telas médias (md) e maiores, os itens flexíveis serão organizados em linha (horizontalmente).
            - items-center: Alinha os itens ao centro no eixo cruzado (verticalmente para flex-row, horizontalmente para flex-col).
            - justify-between: Distribui o espaço entre os itens para que eles fiquem nas extremidades do contêiner, com o espaço restante entre eles.
            - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis. */}

        {/* Logotipo Notável */}
        <div className="flex items-center gap-2">
          {/* Contêiner para o logotipo. Usa flexbox para alinhar a imagem e um possível texto (embora não haja texto aqui) verticalmente.
              - flex items-center: Alinha os itens ao centro verticalmente.
              - gap-2: Adiciona um espaçamento de 0.5rem (8px) entre os itens. */}
          <img
            src="/logo_notavel.png" // Define o caminho da imagem do logotipo.
            alt="Notável Play" // Texto alternativo para acessibilidade da imagem.
            className="w-[180px]" // Define a largura da imagem como 180 pixels.
            // Note: 'h-auto' não é estritamente necessário aqui se 'w-[180px]' for usado, pois a proporção será mantida por padrão.
            // No entanto, é uma boa prática para garantir que a altura se ajuste automaticamente à largura.
          />
        </div>

        {/* Texto de copyright */}
        <p className="text-xs text-pink-600 text-center">
          {/* Parágrafo para o texto de copyright.
              - text-xs: Define o tamanho da fonte como muito pequeno (0.75rem / 12px).
              - text-pink-600: Define a cor do texto como um tom de rosa avermelhado.
              - text-center: Centraliza o texto horizontalmente. */}
          Copyright © 2024 Personal Trainer Academy. Direitos reservados.
        </p>

        {/* Ícones sociais */}
        <div className="flex items-center gap-4 text-pink-600">
          {/* Contêiner para os ícones das redes sociais.
              - flex items-center gap-4: Usa flexbox para alinhar os ícones horizontalmente ao centro, com 1rem (16px) de espaço entre eles.
              - text-pink-600: Define a cor padrão dos ícones como rosa. */}
          <a href="#">
            <Link className="w-5 h-5" />
          </a>{" "}
          {/* Link (<a>) contendo o ícone 'Link'. O `href="#"` é um placeholder.
              - w-5 h-5: Define a largura e altura do ícone como 1.25rem (20px). */}
          <a href="#">
            <Youtube className="w-5 h-5" />
          </a>{" "}
          {/* Link para o Youtube com o ícone correspondente. */}
          <a href="#">
            <Instagram className="w-5 h-5" />
          </a>{" "}
          {/* Link para o Instagram com o ícone correspondente. */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporta o componente Footer para que ele possa ser importado e utilizado em outras partes da aplicação.
