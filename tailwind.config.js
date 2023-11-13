/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'blueRibbon': '#1b6dff',
        'busYellow': '#efbe03',
        'redScarlet': '#FF1A1A',
        'westSide': '#FF8C1A',
        'greenApple': '#1bb800'
      }
    }
  },
  plugins: [],
}

