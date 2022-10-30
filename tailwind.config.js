module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: { max: "5000px" },
      laptop: { max: "1200px" },
      mobile: { max: "767px" },
      xmobile: { max: "550px" },
    },
    extend: {
      textColor: {
        link: "#2d6cd7",
        dark: "#262626",
        gray: "#b2b2b2",
        button: "#3b7e2a",
      },
      borderColor: {
        gray: "#d9d9d9",
      },
      backgroundColor: {
        dark: "#262626",
        gray: "#b2b2b2",
        button: "#3b7e2a",
      },
    },
  },
  plugins: [],
  important: true,
};
