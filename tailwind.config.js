/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'main': '0 0 5px #871027',
      },
      colors: {
        'pink': '#FD6EE3',
        'red': '#871027',
        'gray-dark': '#1e1e1e',
        'white': '#f3f3f3',
      },
      fontFamily: {
        pinyon: 'Pinyon Script, cursive',
        nunito: 'Nunito Sans, light'
      }
    }
  },
  plugins: [],
}
