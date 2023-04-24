/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': "#f5f5f5",
        'normal-blue': "#0F9DDD",
        'hover-bg': "#e4f7ff",
        'separator': "#e2e2e2",
        'logo': "#66666F"
      },
      height: {
        'header-btn': "45px"
      },
      width: {
        'header-btn': "45px"
      },
      fontFamily: {
        sans: ['Source Sans Pro']
      }
    },
  },
  plugins: [],
}
