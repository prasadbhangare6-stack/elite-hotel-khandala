/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf9f4',
          100: '#f6f1e5',
          200: '#edd8ba',
          300: '#e1be8b',
          400: '#d29f5d',
          500: '#b8823b',
          600: '#9e672f',
          700: '#7e4d26',
          800: '#673e23',
          900: '#553420',
          gold: '#C5A880',
          goldDark: '#A6895D',
          goldLight: '#E8DBC5',
        },
        resort: {
          darkest: '#090d0b',
          dark: '#111714',
          surface: '#18201d',
          card: '#1f2a26',
          border: '#2c3c36',
          cream: '#FAF8F5',
          sand: '#F3EFEA',
          muted: '#8A928E',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        glow: '0 0 25px rgba(197, 168, 128, 0.25)',
      },
    },
  },
  plugins: [],
};
