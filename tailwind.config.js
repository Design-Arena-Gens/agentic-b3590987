/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#aee1ff',
          300: '#7ccbff',
          400: '#46adff',
          500: '#1f89ff',
          600: '#0c68e6',
          700: '#0a52b4',
          800: '#0b468f',
          900: '#0d3b73'
        }
      }
    },
  },
  plugins: [],
};
