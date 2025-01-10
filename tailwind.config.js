/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF', // Base color
          light: '#6cb2eb',    // Lighter version
          dark: '#2779bd',     // Darker version
        },
        secondary: {
          DEFAULT: '#85CB33'
        },
        grey: {
        DEFAULT: '#5C5C5C'
        },
      },
    },
  },
  plugins: [
  ],
}
