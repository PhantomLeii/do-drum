/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  plugins: [],
}

