/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, 
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "", 
    logs: true, 
  },
  theme: {
    extend: {
      assetsInclude: ["**/*.png", "**/*.json"],
      colors: {
        primary: "#3e606f",
        secondary: "#63b793",
        dark: "#332e2e",
        info: "#58f024"
      },
      fontFamily: {
        daysOne: "'Days One', sans-serif",
        lato: "'Lato', sans-serif"
      },
      fontSize: {
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      animation: {
        typing: "3.5s steps(40, end)", 
        blinkCaret: ".75s step-end infinite"
      },
      keyframes: {
        typing: {
          "from": { width: "0%" },
          "to": { width: "100%" }
        },
        blinkCaret: {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "orange" }
        }
      },
    },
  },
}

