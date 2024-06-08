/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      // colors:{
      //   primary: "#9CAC8B",
      //   background: "#F1F2F6",
      //   headerColor :"#797C80",
      //   Btn:"#252C58",
      // },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}