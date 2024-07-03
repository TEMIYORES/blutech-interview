export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#4f46e5",
        textcolor: "#262626",
        headercolor: "#595959",
        tableheaderbg: "#F0F4FE",
        inputborder: "#cdcdcd",
        desccolor: "#737373",
        bg: "#171717",
        navbg: "#737373",
        bodybg: "#fefefe",
        headerbg: "#fff",
        hover: "#4338ca",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
