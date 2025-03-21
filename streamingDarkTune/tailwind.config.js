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
      keyframes: {
        spinOpen: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg) " },
        },
        spinClose: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg) " },
        },
        slideDown: {
          "0%": { transform: "translateY(-20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-20%)", opacity: "0" },
        },
      },
      animation: {
        "spin-open": "spinOpen 0.3s ease-in-out forwards",
        "spin-close": "spinClose 0.3s ease-in-out forwards",
        "menu-open": "slideDown 0.3s ease-out forwards",
        "menu-close": "slideUp 0.2s ease-in forwards",
      },
    },
    screens: {
      xs: "480px", // o el valor que quieras para xs
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    animation: ["responsive", "hover", "group-hover"],
    animate: ["responsive", "hover", "group-hover"],
    fontSize: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
    padding: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
};
