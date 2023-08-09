/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem 0',
        xs: '1rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  plugins: []
}
