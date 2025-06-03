// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Esta é uma cor que se aproxima do tom do print
        // Você pode ajustar o valor HEX se tiver o exato do Figma
        'custom-orange': '#FF8C00', // Um tom de laranja mais queimado
        'marketplace-text-orange': '#FFA500', // Outra opção que pode ser mais próxima, ajuste conforme o Figma
        // Para ser o mais fiel possível, se você tiver o HEX do Figma, use-o aqui.
        // Pelo visual, parece um tom entre #FF8C00 (darkorange) e #FFD700 (gold).
        // Vou usar um que achei mais próximo do visual da imagem
        'figma-orange-text': '#FF9900', // Exemplo baseado no visual do print
      },
    },
  },
  plugins: [],
}