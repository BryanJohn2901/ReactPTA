/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cor para o hover e a sublinha, e cor principal de destaque
        primary: '#E7004C',
        // Cor para o fundo da navbar (baseado na imagem)
        'midnight-blue': '#1a202c', // Exemplo de um tom de azul escuro, ajuste conforme a imagem
        // Nova cor: Um tom mais escuro para o fundo do Hero (baseado na imagem do Hero)
        'darker-navy': '#0D102F', // Ajuste este valor hexadecimal se a cor na sua imagem for diferente
        // Nova cor: Um tom ligeiramente mais claro que 'darker-navy' para os cards inferiores do Hero
        'darker-navy-light': '#1A1D42', // Exemplo, ajuste conforme a imagem
      },
    },
  },
  plugins: [],
}