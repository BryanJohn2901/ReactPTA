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
        
        'custom-black-dark': '#1a1a1a', 
        'custom-card-dark': '#2a2a2a',   
        'custom-text-light': '#cccccc',  
        'custom-black': '#000000', 
        'custom-red-text': '#ef4444', 
        'custom-red-button': '#dc2626',
        'custom-white': '#FFFFFF', 
        'custom-red': '#dc2626',   
        'custom-gray-text': '#cccccc', 
        'custom-dark-gray-bg': '#1a1a1a', 
        'custom-light-gray-bg': '#f3f4f6'
      },
    },
  },
  plugins: [],
}