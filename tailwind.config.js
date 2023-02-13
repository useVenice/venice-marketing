/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const VeniceTheme = {
  background: '#1e1e1e',
  black: {
    DEFAULT: '#1e1e1e',
    300: '#4e4e4e',
    400: '#3e3e3e',
    500: '#2e2e2e',
    800: '#151515',
  },
  dropShadow: '#00000026',
  footerBlack: '#191919',
  githubGray: '#eef1f5',
  gold: '#ecac4c',
  gray: '#7d7d7d',
  grayText: '#c0c0c0',
  _green: '#12b886',
  green: {
    DEFAULT: '#12b886',
    darkened: '#099f72',
  },
  greenGlow: '#12b88626',
  innerBevel: '#0000001a',
  inputBackground: '#292929',
  inputBorder: '#00000080',
  offwhite: '#eaeaea',
  primary: '#eaeaea',
  red: '#DB3E5A',
  secondary: '#12b886',
  white: '#ffffff',
  yellow: '#D0DF00',
}

module.exports = {
  content: [
    // No styles in here, be very careful about including extra
    // paths here we don't need otherwise it causes massive DX perf issues
    // where it takes 60 seconds to compile a one line hello world change
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      'venice-green-glow': '0px 0px 8px 4px var(--venice-green-glow)',
      'venice-black-drop-shadow': '0px 2px 4px 0px rgba(0,0,0,0.15)',
      'discord-blue-glow': '0px 0px 8px 4px var(--discord-blue-glow)',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...VeniceTheme,
        'venice-black': VeniceTheme.black,
        'venice-green': VeniceTheme.green,
        'venice-red': VeniceTheme.red,
      },
      current: 'currentColor',
      fontFamily: {
        sans: ['var(--inter-font)', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        'venice-gray': VeniceTheme.grayText,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
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
