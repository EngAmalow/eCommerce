/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000000',
        secondryColor: "#fffff",
        thisColor: "Orange",
      },


    },
    fontFamily:{
      primaryFont: "Gupter"
    }
  },
  plugins: [],
}

