/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'teal': "#20CCDC"
    },
  },
  fontFamily: {
    sans: ['sans-serif']
  },
  plugins: [
    require('daisyui'),
  ],
    daisyui: {
      themes: ['synthwave'],
    },
}

