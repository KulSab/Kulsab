/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontStretch: {
        normal: 'normal',
        condensed: 'condensed',
        expanded: 'expanded',
        ultraCondensed: 'ultra-condensed',
        ultraExpanded: 'ultra-expanded',
      },
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const fontStretch = theme('fontStretch');
      const newUtilities = Object.fromEntries(
        Object.entries(fontStretch).map(([key, value]) => [
          `.font-stretch-${key}`,
          { 'font-stretch': value },
        ])
      );

      addUtilities(newUtilities, ['responsive']);
    },
  ],
};


