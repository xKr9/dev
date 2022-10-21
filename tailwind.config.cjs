/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey': {
          'dark': '#262626'
        },
        'red': {
          'crimson': '#D7263D'
        },
        'primary': '#ec347a'
      }
    },
  },
  plugins: [],
}
