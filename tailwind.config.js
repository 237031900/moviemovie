/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GT-Pressure': ['GT Pressure', 'sans-serif'],
        'JeanLuc-Bold':['JeanLuc-Bold', 'sans-serif'],
        'JeanLuc-Thin':['JeanLuc-Thin', 'sans-serif']
      },
      colors: {
        earthy : '#B7A076',
        purple: '#9C5C82'
      }
    },
  },
  plugins: [],
}

