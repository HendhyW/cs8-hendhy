/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/Logo.svg')",
      },
      colors: {
        color: '#172133 ',
      },
    },
  },
  plugins: [],
});

