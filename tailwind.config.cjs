/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    borderColor: {
      "prim": "#ffc632",
      "white": "#ffffff"
    },
    color: {
      "prim": "#ffc632"
    },
    textColor: {
      "base": "#afb6c2",
      "title": "#d4ccb6",
      "black": "#000000",
      "prim": "#ffc632",
    },
    backgroundColor: {
      "prim": "#ffc632",
      "prim2": "#cc9919",
      "base": "#191816",
      "form": "#24221f",
      "white": "#ffffff",
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

