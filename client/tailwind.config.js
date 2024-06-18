/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //Cualquier elemento que se encuentre dentro del src con esas teeminaciones puede tener el tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

