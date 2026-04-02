import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0598CE',
          50: '#E8F6FC',
          100: '#D1EDFA',
          200: '#A3DBF5',
          300: '#5DC2E8',
          400: '#22ADD8',
          500: '#0598CE',
          600: '#0480AE',
          700: '#036A90',
          800: '#025472',
          900: '#013D54',
        },
        dark: {
          DEFAULT: '#0B1F33',
          50: '#E8EDF2',
          100: '#C5D1DE',
          200: '#8FA3B8',
          300: '#5A7591',
          400: '#2E4D6B',
          500: '#0B1F33',
          600: '#091A2B',
          700: '#071523',
          800: '#05101B',
          900: '#030B13',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          white: '#FFFFFF',
        },
        text: {
          DEFAULT: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
        },
        green: {
          accent: '#2F6F4E',
          light: '#F0FDF4',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
