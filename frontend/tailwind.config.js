export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: { DEFAULT: "#F7F1E6", 300: "#EDE3D0" },
        gold: "#C6A46A",
        goldDeep: "#B8924F",
        blackSoft: "#0A0A0A",
        charcoal: "#1A1A18"
      },
      fontFamily: { bernina: ['"Bernina Sans"', 'Sora', 'sans-serif'] }
    }
  },
  plugins: []
}
