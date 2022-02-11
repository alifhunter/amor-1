module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        softPurple: "#9C51E8",
        darkPurple: "#5F12AC",
        bgPurple: "#E3C8FF",
        darkPurple2: "#241D2B",
        bgPurple2: "#ECE5F2",
      },
      boxShadow: {
        purple: "0 25px 40px -15px rgba(95, 18, 172, 0.7)",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
