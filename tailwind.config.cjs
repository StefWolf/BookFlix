/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'yellow-principal': '#FFDD00',
        'gray-principal': '#EFEFEF',
        'gray-secundaria': '#FFFFFF',
        'blue-claro': '#0057F6',
      }
    },
  },
  plugins: [],
}
