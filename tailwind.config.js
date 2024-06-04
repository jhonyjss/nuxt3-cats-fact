/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
   
    extend: {
      colors:{
        ...colors,
        'midnight-fur': '#22223B',
        'twilight-paw': '#4A4E69',
        'mauve-whisker': '#9A8C98',
        'dusty-pawpad': '#C9ADA7',
        'cream-tail': '#F2E9E4',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif']
      },
      boxShadow: {
        'btn': '3px 2px 6px 0 rgba(0,0,0,0.75)'
      },
    },
  },
  plugins: [],
}

