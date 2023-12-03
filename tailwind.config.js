/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonclone:{
          background:"#EAEDED",
          light_blue:"#232F3A",
          yellow:"FEBD69",
          DEFAULT:"#0F1111"
        }
      }
    },
  },
  plugins: [],
}

