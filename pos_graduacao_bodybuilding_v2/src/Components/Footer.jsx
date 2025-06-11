import React from 'react'; // Importa a biblioteca React, essencial para a construção de componentes.
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp da biblioteca react-icons/fa.

const Footer = () => { // Define o componente funcional principal chamado Footer.
  return (
    // O 'return' especifica o que será renderizado pelo componente.
    <footer className="bg-black text-white py-10 px-4">
      {/* Define o elemento HTML `<footer>`, que geralmente contém informações de direitos autorais, links de contato e políticas.
          - bg-black: Define a cor de fundo do rodapé como preto.
          - text-white: Define a cor do texto padrão dentro do rodapé como branco.
          - py-10: Adiciona um padding vertical de 2.5rem (40px).
          - px-4: Adiciona um padding horizontal de 1rem (16px). */}

      {/* Grid principal do rodapé */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Contêiner principal com largura máxima, centralizado, usando um layout de grid.
            - max-w-[1200px]: Limita a largura máxima do conteúdo a 1200 pixels.
            - mx-auto: Centraliza o contêiner horizontalmente.
            - grid: Habilita o display CSS Grid.
            - grid-cols-1: Em telas pequenas, o grid terá 1 coluna.
            - md:grid-cols-4: Em telas médias (md) e maiores, o grid terá 4 colunas de tamanho igual.
            - gap-8: Adiciona um espaçamento de 2rem (32px) entre as colunas do grid.
            - text-sm: Define o tamanho da fonte padrão para todos os textos dentro deste contêiner como pequeno (0.875rem / 14px). */}

        {/* Coluna: Logo + direitos autorais */}
        <div>
          {/* Contêiner para o logotipo e texto de direitos autorais. */}
          <div className="flex items-center gap-2 mb-4">
            {/* Contêiner para o logotipo, com alinhamento flexível. */}
            <img src="/logo_pta.webp" alt="Logo PTA" className="w-[180px]" />
            {/* Imagem do logotipo.
                - src="/logo_pta.webp": Define o caminho da imagem do logotipo.
                - alt="Logo PTA": Texto alternativo para acessibilidade.
                - className="w-[180px]": Define a largura da imagem como 180 pixels. */}
          </div>
          <p className="text-white/80">Personal Trainer Academy 2025©</p>
          {/* Texto de copyright com 80% de opacidade para um tom mais suave de branco. */}
          <p className="text-white/80">Todos os direitos reservados</p>
          {/* Texto adicional de direitos autorais. */}
        </div>

        {/* Coluna: Contato */}
        <div>
          {/* Contêiner para informações de contato. */}
          <h3 className="text-red-500 font-bold text-lg mb-2">Contato</h3>
          {/* Título da seção de contato, com cor vermelha, negrito e tamanho de fonte grande. */}
          <div className="flex items-center gap-2 text-white/90">
            {/* Contêiner para o ícone e número do WhatsApp, com alinhamento flexível. */}
            <FaWhatsapp className="text-red-500" />
            {/* Ícone do WhatsApp, com cor vermelha. */}
            <span>5541998505007</span>
            {/* Número de telefone. */}
          </div>
        </div>

        {/* Coluna: Políticas */}
        <div>
          {/* Contêiner para links de políticas. */}
          <h3 className="text-red-500 font-bold text-lg mb-2">Políticas</h3>
          {/* Título da seção de políticas, com cor vermelha, negrito e tamanho de fonte grande. */}
          <ul className="space-y-1">
            {/* Lista de links de políticas, com espaçamento vertical entre os itens. */}
            <li><a href="#" className="hover:underline text-white/90">Políticas de Privacidade</a></li>
            {/* Link para Políticas de Privacidade.
                - href="#": Placeholder para o URL.
                - hover:underline: Adiciona sublinhado ao passar o mouse.
                - text-white/90: Cor do texto com 90% de opacidade. */}
            <li><a href="#" className="hover:underline text-white/90">Termo de Uso</a></li>
            {/* Link para Termo de Uso. */}
          </ul>
        </div>

        {/* Coluna: Site Seguro */}
        <div>
          {/* Contêiner para informações de site seguro. */}
          <h3 className="text-red-500 font-bold text-lg mb-2">Site Seguro</h3>
          {/* Título da seção de site seguro, com cor vermelha, negrito e tamanho de fonte grande. */}
          <img src="/google.webp" alt="Google Safe Browsing" className="w-32" />
          {/* Imagem do selo de segurança (ex: Google Safe Browsing).
              - src="/google.webp": Define o caminho da imagem.
              - alt="Google Safe Browsing": Texto alternativo para acessibilidade.
              - className="w-32": Define a largura da imagem. */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporta o componente Footer para ser usado em outras partes da aplicação.
