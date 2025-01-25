import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PPNeueMontreal', 'sans-serif'],
      },
      colors: {
        black: '#151515',
        darkWhite: '#E1E1E1',
        background: '#F0F0F0',
        violet: '#A59DFF',
      },
      fontSize: {
        '2xl': '2rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
