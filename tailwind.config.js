// business-app-vite/tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#2b7379",
        secondary: "#67a9a9",
        light: "#abd7d8",
        grayish: "#bfd1d2",
        accent: "#edd09f",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
};
