/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GT-Pressure': ['GT-Pressure', 'sans-serif'],
        'JeanLuc-Bold':['JeanLuc-Bold', 'sans-serif'],
        'JeanLuc-Thin':['JeanLuc-Thin', 'sans-serif']
      },
      cursor: {
        'default': 'url(data:image/png;base64,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) 20 20,default',
        'buy': 'url(src/assets/dead.jpg) 20 20,default',
      },
      colors: {
        earthy : '#B7A076',
        darkEarthy: '#B3955D',
        purple: '#9C5C82'
      }
    },
  },
  plugins: [],
}

