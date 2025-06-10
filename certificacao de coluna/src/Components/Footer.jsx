// src/components/Footer.jsx
import React from "react"; // Importa a biblioteca React, que é a base para a construção de componentes.
import { Youtube, Instagram, Link } from "lucide-react"; // Pode trocar por SVGs inline se necessário // Importa ícones específicos (Youtube, Instagram, Link) da biblioteca 'lucide-react'.

const Footer = () => {
  // Define o componente funcional Footer.
  return (
    // Inicia o retorno do JSX que será renderizado pelo componente.
    <footer className="bg-[#111] text-white py-6 px-4">
      {" "}
      {/* Define o elemento HTML <footer>.
          - bg-[#111]: Define a cor de fundo do rodapé como um cinza escuro quase preto.
          - text-white: Define a cor do texto dentro do rodapé como branco.
          - py-6: Adiciona um padding vertical de 1.5rem (24px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}
      {/* Container com largura máxima */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {" "}
        {/* Define uma div que serve como um container para o conteúdo do rodapé.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200px.
            - mx-auto: Centraliza a div horizontalmente na tela.
            - flex: Habilita o display flexbox.
            - flex-col: Em telas pequenas, os itens flexíveis serão empilhados em coluna.
            - md:flex-row: Em telas médias e maiores, os itens flexíveis serão organizados em linha.
            - items-center: Alinha os itens ao centro no eixo cruzado (verticalmente para flex-row, horizontalmente para flex-col).
            - justify-between: Distribui o espaço entre os itens para que eles fiquem nas extremidades do container.
            - gap-4: Adiciona um espaçamento de 1rem (16px) entre os itens flexíveis. */}
        {/* Logotipo Notável */}
        <div className="flex items-center gap-2">
          {" "}
          {/* Container para o logotipo, usando flexbox para alinhar a imagem e um possível texto (embora não haja texto aqui). */}
          <img src="/logo_notavel.png" alt="Notável Play" className="h-6" />{" "}
          {/* Exibe a imagem do logotipo 'Notável Play'.
              - src="/logo_notavel.png": Define o caminho da imagem.
              - alt="Notável Play": Texto alternativo para acessibilidade.
              - className="h-6": Define a altura da imagem como 1.5rem (24px). */}
        </div>
        {/* Texto de copyright */}
        <p className="text-xs text-pink-600 text-center">
          {" "}
          {/* Parágrafo para o texto de copyright.
              - text-xs: Define o tamanho da fonte como muito pequeno.
              - text-pink-600: Define a cor do texto como um tom de rosa.
              - text-center: Centraliza o texto. */}
          Copyright © 2025 Personal Trainer Academy. Direitos reservados.
        </p>
        {/* Ícones sociais */}
        <div className="flex items-center gap-4 text-pink-600">
          {" "}
          {/* Container para os ícones das redes sociais.
              - flex items-center gap-4: Usa flexbox para alinhar os ícones horizontalmente com espaçamento.
              - text-pink-600: Define a cor padrão dos ícones como rosa. */}
          <a href="#">
            <Link className="w-5 h-5" />
          </a>{" "}
          {/* Link para uma página (href="#") contendo o ícone 'Link' (que pode ser um site genérico ou outro link).
              - w-5 h-5: Define a largura e altura do ícone. */}
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

export default Footer; // Exporta o componente Footer para que ele possa ser usado em outras partes da aplicação.