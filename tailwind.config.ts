import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          soft: '#FFF4C2',
          DEFAULT: '#F4C430',
          deep: '#C99A1F',
          shadow: '#8A6810',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          900: '#0D0D0D',
          700: '#2A2A2A',
          500: '#4A4A4A',
          300: '#7A7A7A',
          100: '#D9D9D9',
        },
        cream: '#FFFBEB',
        paper: '#FBF6E2',
        paperInk: '#F0E9CC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'tick': 'tick 1.8s ease-in-out infinite',
        'bubble-in': 'bubbleIn 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        tick: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
        bubbleIn: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
