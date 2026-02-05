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
        // Premium Primary - Bright Blue #0598CE
        primary: {
          DEFAULT: '#0598CE', // Premium Bright Blue - Main brand color
          light: '#E6F5F9', // Very light blue for backgrounds
          dark: '#047A9F', // Darker blue for depth
          darker: '#035C70', // Darkest for text
          50: '#E6F5F9',
          100: '#CCEBF3',
          200: '#99D7E7',
          300: '#66C3DB',
          400: '#33AFCF',
          500: '#0598CE',
          600: '#047A9F',
          700: '#035C70',
          800: '#023E41',
          900: '#012012',
        },
        // Premium Neutrals - Timeless & Clean
        neutral: {
          DEFAULT: '#1A1A1A', // Primary text
          light: '#6B7280', // Secondary text
          lighter: '#9CA3AF', // Tertiary text
          bg: '#FFFFFF', // Pure white background
          subtle: '#F9FAFB', // Subtle background
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
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
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
