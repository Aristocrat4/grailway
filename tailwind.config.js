/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          'url("https://railway-gm.web.app/assets/images/back2.jpg")',
      },
    },
  },
  plugins: [],
};
