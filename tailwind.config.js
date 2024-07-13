/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors:{
        'quizzi-black': '#1A2130',
        'quizzi-blue-10': '#5A72A0',
        'quizzi-blue-20': '#83B4FF',
        'quizzi-white-10': '#FDFFE2'
      }
    },
  },
  plugins: [],
};