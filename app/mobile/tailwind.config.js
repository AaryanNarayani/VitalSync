/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        ternary: 'var(--ternary)',
        graytext: 'var(--graytext)',
        'primary-background': 'var(--primary-background)',
        'secondary-background': 'var(--secondary-background)',
        'ternary-background': 'var(--ternary-background)',
        low: 'var(--low)',
        medium: 'var(--medium)',
        high: 'var(--high)',
        'light-text': 'var(--light-text)',
        'button-gradient-1': 'var(--button-gradient-1)',
      },
      fontFamily: {
        bricolage: ['var(--bricolage)'],
        inter: ['var(--inter)'],
      },
    },
  },
  plugins: [],
}