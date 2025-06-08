/** @type {import('tailwindcss').Config} */
module.exports = {
  DarkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-normal': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear infinite',

      },
      colors: {
      }
    },
  },
  plugins: [],
}