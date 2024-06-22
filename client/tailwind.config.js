/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //Cualquier elemento que se encuentre dentro del src con esas terminaciones puede tener el tailwind
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#202020',
        'custom-dark-700': '#282828',
        'custom-dark-800': '#1a1a1a',
        'custom-dark-900': '#121212',
        'custom-pink': 'rgb(248,37,131)',
        'custom-green': 'rgb(128,255,82)',
        'custom-blue': 'rgb(24,43,228)',
      },
    },
  },
  plugins: [],
}
