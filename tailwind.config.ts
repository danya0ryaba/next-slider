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
        gray: '#CCCCCC',
        background: '#F0F0F0',
        violet: '#A59DFF',
      },
      fontSize: {
        '2xl': '2rem',
      }
    },
    screens: {
      'sm': '640px',
      'tablet': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Добавьте свои точки останова здесь
    },
  },
  plugins: [],
} satisfies Config;
