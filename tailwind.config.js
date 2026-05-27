/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f0ece0",
        gold: "#d4b800",
        "dark-bg": "#1a1a1a",
      },
      fontFamily: {
        display: ["'Black Han Sans'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
        body: ["'Nunito'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
