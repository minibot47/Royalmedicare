/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      colors: {
        olive: {
          DEFAULT: '#4a5c3a',
          dark: '#2e3d22',
          mid: '#3d5030',
          light: '#6a7c5a',
        },
        amber: {
          DEFAULT: '#c8933a',
          light: '#e8b15a',
        },
        cream: {
          DEFAULT: '#f7f3ec',
          dark: '#ede7db',
        },
        warm: '#faf8f4',
      },
      animation: {
        'tw-expand': 'tw-expand 1s ease forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        'tw-expand': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
