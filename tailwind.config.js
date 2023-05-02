/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xl': {'min': '1920px'},
      'lg': {'min': '1280px', 'max': '1919.9px'},
      'md': {'min': '768px', 'max': '1279.9px'},
      'sm': {'max': '767.9px'},
    },
    extend: {},
  },
  plugins: [],
}
