/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'assistant': ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  rtl: true,
}

