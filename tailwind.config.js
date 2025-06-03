/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
       center :  true,
       padding : '16px',
    },
    extend: {
      screens : {
        '2xl': '1320px'
      },
      colors : {
          primary : "#4f46e5", //warna biru
          secondary : "#020617", //warna hitam
          peripheral : "#475569", //warna abu-abu
          peripheral2 : "#dc2626", //warna merah
          peripheral3 : "#1f2937", // biru tua
      },
    },
  },
  plugins: [],
}

