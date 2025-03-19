/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1b4b", // Indigo oscuro (fondo)
        secondary: "#7c3aed", // Vivid Violet (acentos)
        accent: "#c084fc", // Lavender
        accentHover: "#a855f7", // Hover para botones
        background: "#f3f4f6", // Fondo claro (modo claro)
        textPrimary: "#1f2937", // Gris oscuro para texto
      },
      fontFamily: {
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Texto normal
          heading: ["Montserrat", "sans-serif"], // Títulos
        },
      },
    },
  },
  plugins: [],
};
