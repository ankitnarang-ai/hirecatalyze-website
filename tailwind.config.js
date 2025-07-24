/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0D1117', // Near-black for main background
          'light': '#161B22', // Lighter shade for cards/sections
        },
        'secondary': '#01A7C2', // Vibrant cyan for accents
        'accent': '#9A4AFF', // Neon purple for CTAs and highlights
        'light-gray': '#8B949E', // For text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-secondary': '0 0 15px 0 rgba(1, 167, 194, 0.6)',
        'glow-accent': '0 0 20px 0 rgba(154, 74, 255, 0.7)',
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
