/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e12729',
        'primary-hover': '#c61a1c',
        secondary: '#ffd700',
        'secondary-hover': '#ffcd00',
      },
    },
  },
  plugins: [],
} 