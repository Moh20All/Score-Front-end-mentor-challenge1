/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
      colors: {
        "Light-red": "#ff5757",
        "Orangey-yellow": "#ffb01f",
        "Green-teal": "#00bd91",
        "Cobalt-blue": "#1125d4",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        move1: "#6743ff",
        move2: "#312ce8",
      },
    },
  },
  plugins: [],
};
