/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{html,ts}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      margin:{
        '108': '27rem',  // 432px
        '120': '30rem',  // 480px
        '144': '36rem',  // 576px
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
} 

