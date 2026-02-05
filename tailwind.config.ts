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
        // Primary Blue Palette - Deep Ocean Teal
        primary: {
          DEFAULT: '#1B5F7A', // Main Blue - Deep Ocean Teal
          accent: '#2BA5C8', // Accent Blue - Bright Teal
          dark: '#0D3B52', // Dark Blue - Navy Depth
          50: '#E8F1F5',
          100: '#D1E3EB',
          200: '#A3C7D7',
          300: '#75ABC3',
          400: '#478FAF',
          500: '#1B5F7A',
          600: '#164F66',
          700: '#113F52',
          800: '#0D3B52',
          900: '#082B3A',
        },
        // Green Accents - Natural Leaf Green
        green: {
          DEFAULT: '#6BA83D', // Primary Green - Natural Leaf Green
          subtle: '#E8F5E0', // Subtle Green - Whisper Green
          50: '#F0F8EB',
          100: '#E8F5E0',
          200: '#D1EBC1',
          300: '#BAE1A2',
          400: '#A3D783',
          500: '#6BA83D',
          600: '#5A8F33',
          700: '#497629',
          800: '#385D1F',
          900: '#274415',
        },
        // Premium Background & Neutrals
        bg: {
          DEFAULT: '#FAFBFC', // Cool White
          secondary: '#F3F6F8', // Soft Cloud
          card: '#FFFFFF', // Pure White
        },
        // Text Colors
        text: {
          DEFAULT: '#1A2B35', // Primary Text - Deep Charcoal
          secondary: '#6B7C8C', // Secondary Text - Slate Gray
          light: '#FFFFFF', // Light Text on Dark
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
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
