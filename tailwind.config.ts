/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber-accent': '#D48D3B',
        'forest-green': '#3E9242',
        'my-red': '#E43030',
        primary: {
          DEFAULT: "#E43030",
          orange: "#D48D3B",
          green: "#3E9242",
        },
        sec: "#282828",

        gray: {
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
        white: {
          100: "#F4F4F4",
          200: "#EDF0F8",
        },
        black: {
          100: "#3D4258",
          neutral: "#23263B",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
