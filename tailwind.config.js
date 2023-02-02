/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      "venice-green-glow": "0px 0px 8px 4px var(--venice-green-glow)",
      "venice-black-drop-shadow": "0px 2px 4px 0px rgba(0,0,0,0.15)",
      "discord-blue-glow": "0px 0px 8px 4px var(--discord-blue-glow)",
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
      "venice-input-background": "var(--venice-input-background)",
      "venice-input-border": "var(--venice-input-border)",
      "github-gray": "var(--github-gray)",
      "discord-blue": "var(--discord-blue)",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['var(--montserrat-font)', ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      montserrat: ['var(--montserrat-font)', ...defaultTheme.fontFamily.sans],
      ptMono: ['var(--ptMono-font)', 'Courier New', 'Courier', 'monospaces'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// Font Defaults

// text-xs	font-size: 0.75rem; /* 12px */
//          line-height: 1rem; /* 16px */
// text-sm	font-size: 0.875rem; /* 14px */
//          line-height: 1.25rem; /* 20px */
// text-base	font-size: 1rem; /* 16px */
//          line-height: 1.5rem; /* 24px */
// text-lg	font-size: 1.125rem; /* 18px */
//          line-height: 1.75rem; /* 28px */
// text-xl	font-size: 1.25rem; /* 20px */
//          line-height: 1.75rem; /* 28px */
// text-2xl	font-size: 1.5rem; /* 24px */
//          line-height: 2rem; /* 32px */
// text-3xl	font-size: 1.875rem; /* 30px */
//          line-height: 2.25rem; /* 36px */
// text-4xl	font-size: 2.25rem; /* 36px */
//          line-height: 2.5rem; /* 40px */
// text-5xl	font-size: 3rem; /* 48px */
//          line-height: 1;
// text-6xl	font-size: 3.75rem; /* 60px */
//          line-height: 1;
// text-7xl	font-size: 4.5rem; /* 72px */
//          line-height: 1;
// text-8xl	font-size: 6rem; /* 96px */
//          line-height: 1;
// text-9xl	font-size: 8rem; /* 128px */
//          line-height: 1;