import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-ChauPhilomeneOne)']
    },
    colors: {
      primary: {
          DEFAULT: '#f8b51c',
          50: '#FFF1B8',
          100: '#FFEDA3',
          200: '#FFE47A',
          300: '#FFDC52',
          400: '#FFD429',
          500: '#f8b51c',
          600: '#C79F00',
          700: '#8F7200',
          800: '#574500',
          900: '#1F1800',
          950: '#030200'
      },
  },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
export default config;
