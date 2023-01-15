/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      "venice-green-glow": "0px 0px 8px 4px var(--venice-green-glow)",
      "venice-black-drop-shadow": "0px 2px 4px 0px rgba(0,0,0,0.15)",
    },
    colors: {
      "venice-green": "var(--venice-green)",
      "venice-red": "var(--venice-red)",
      "venice-gray": "var(--venice-gray)",
      "venice-footer-black": "var(--venice-footer-black)",
      "venice-black": "var(--venice-black)",
      "venice-white": "var(--venice-white)",
      "venice-offwhite": "var(--venice-offwhite)",
      "venice-inner-bevel": "var(--venice-inner-bevel)",
      "github-gray": "var(--github-gray)",
    },
    container: {
      center: true,
    },
    fontSize: { xs: "0.8125rem", sm: "0.9375rem", base: "1.0625rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" },
  },
  plugins: [],
}