/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       customColor: '#323564'
      },
      width: {
        'custom': '1280px', 
      },
    },
  },
  plugins: [require('daisyui')],
}
