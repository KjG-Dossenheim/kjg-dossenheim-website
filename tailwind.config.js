/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00b6be",

          "secondary": "#006d84",

          "accent": "#f58220",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#007576",

          "success": "#a6ce39",

          "warning": "#fcaf17",

          "error": "#952d4f",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    // ...
  ],
};