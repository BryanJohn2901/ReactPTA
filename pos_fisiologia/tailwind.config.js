/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/hero_banner.jpg')",
        'hero-mobile': "url('/hero_banner_mobile.jpg')",
      },
    },
  },
  plugins: [],
}
