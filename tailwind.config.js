/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agency-navy': '#030d2e',
        'agency-gold': '#f5b026',
        'agency-light-gray': '#f4f4f4',
        'aura-navy': '#030d2e',
        'aura-gold': '#f5b026',
        'aura-dark-navy': '#02081f',
        'gold': '#f5b026',
        'navy': '#030d2e',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
