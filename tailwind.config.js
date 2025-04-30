/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            blue: "#76A5AF",
            pink: "#EA9999",
            teal: "#014240",
            light: "#BFD4D9",
          },
        },
        borderWidth: {
          '3': '3px',
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }