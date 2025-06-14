/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '1.2rem',
        'h4': '2rem',
        'h3': '3.2rem',
        'h2': '5.2rem',
        'h1': ['13.6rem', {
          lineHeight: '0.85'
        }]
      },
      colors: {
        'bg': '#000',
        'primary': '#FFFEE2',
        'accent': '#FF3E01'
      },
    },
  },
  plugins: [],
}

