/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hidden': {
        /* Hide scrollbar for Chrome, Safari, and Opera */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge, and Firefox */
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      },
    });
  },],
}
