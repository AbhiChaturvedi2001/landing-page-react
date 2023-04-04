/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        acumin: ["Acumin Pro", "normal"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        lg: { max: "1200px" },
        md: { max: "1068px" },
        "md-sm": { max: "868px" },
        sm: { max: "639px" },
        s: { max: "490px" },
      },
    },
  },
  plugins: [],
};
