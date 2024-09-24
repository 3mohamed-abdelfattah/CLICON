/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#FA8232",
        secondaryText: "#2DA5F3",
        primaryBackground: "#1B6392",
        secondaryBackground: "#191C1F",
        WarningText: "#EBC80C",
      },
      screens: {
        '2xl': '1400px',
        'xl': '1310px',
        'mid_lg': '1065px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
    },
  },
  plugins: [],
}