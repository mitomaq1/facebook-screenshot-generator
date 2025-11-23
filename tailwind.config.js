/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fb-blue': '#1877F2',
        'fb-dark': '#18191A',
        'fb-gray': '#E4E6EB',
        'fb-text': '#050505',
        'fb-text-secondary': '#65676B',
      }
    },
  },
  plugins: [],
}

