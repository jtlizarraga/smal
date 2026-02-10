/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FEF7F9',
        'deep-brown': '#2D1B1E',
        'accent-pink': '#EBAEB7',
        'blush-pink': '#FCE4EC',
        'cream': '#FFFDF9',
        'smal-pink': {
          50: '#FEF7F9',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EBAEB7',
          600: '#D896A3',
          700: '#B87A86',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
