/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontLoaders: [
        {
          loader: "@next/font/google",
          options: { subsets: ["latin"] },
        },
      ],
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
        glory: ["Give You Glory", "cursive"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 3.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      colors: {
        dark: "#121212",
        accent: "#00bcd4",
      },
    },
  },
  plugins: [],
};
