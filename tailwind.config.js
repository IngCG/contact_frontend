/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Rutas a tus archivos donde usarás clases de Tailwind
    "./public/index.html", // Incluye `index.html` si lo necesitas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
