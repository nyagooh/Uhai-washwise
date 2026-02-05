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
        // Primary Water Blue - Trust, water authority, professionalism
        primary: {
          DEFAULT: '#1F5FA3',
          50: '#E8F1FA',
          100: '#D1E3F5',
          200: '#A3C7EB',
          300: '#75ABE1',
          400: '#478FD7',
          500: '#1F5FA3',
          600: '#194C82',
          700: '#133962',
          800: '#0C2641',
          900: '#061321',
        },
        // Primary Eco Green - Sustainability, life, environment
        green: {
          DEFAULT: '#4CAF50',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        // Secondary Light Blue - Clean, calm backgrounds
        lightBlue: {
          DEFAULT: '#EAF6FB',
          50: '#F7FCFE',
          100: '#EAF6FB',
          200: '#D5EDF7',
          300: '#C0E4F3',
          400: '#ABDBEF',
          500: '#96D2EB',
        },
        // Secondary Light Green - Nature balance
        lightGreen: {
          DEFAULT: '#F0FAF4',
          50: '#FAFEFB',
          100: '#F0FAF4',
          200: '#E1F5E9',
          300: '#D2F0DE',
          400: '#C3EBD3',
          500: '#B4E6C8',
        },
        // Accent Warm Sun Yellow - Donate button, key numbers
        accent: {
          DEFAULT: '#F4C430',
          50: '#FEF9E7',
          100: '#FDF4CF',
          200: '#FCE99F',
          300: '#FADE6F',
          400: '#F9D33F',
          500: '#F4C430',
          600: '#D9A819',
          700: '#A88214',
          800: '#775D0E',
          900: '#463709',
        },
        // Text color
        text: {
          DEFAULT: '#2E2E2E',
          light: '#666666',
          lighter: '#999999',
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
