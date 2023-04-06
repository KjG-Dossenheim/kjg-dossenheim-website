/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.{html,md}", "layouts/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ccf0f2",
          200: "#99e2e5",
          300: "#66d3d8",
          400: "#33c5cb",
          500: "#00b6be",
          600: "#009298",
          700: "#006d72",
          800: "#00494c",
          900: "#002426"
},
        secondary: "#006d84",
        accent: "#f58220",
        neutral: "#3D4451",
        info: "#007576",
        success: "#a6ce39",
        warning: "#fcaf17",
        error: "#952d4f",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    // ...
  ],
};