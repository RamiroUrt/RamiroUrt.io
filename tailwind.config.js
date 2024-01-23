/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5", 
      },
      keyframes: {
    },
  },
},
  plugins: [
    require ('tailwindcss-animated'),
  ],
}