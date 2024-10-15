/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gra-135deg": "linear-gradient(135deg, #153677, #4e085f)",
      },
      height: {
        "100vh": "100vh",
      },
      minWidth: {
        "50vh": "50vh",
      },
    },
  },
  plugins: [],
};
