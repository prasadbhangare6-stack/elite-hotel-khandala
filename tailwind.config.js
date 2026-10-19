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
        // Sunset Valley — Elite Hotel Khandala premium palette
        sunset: {
          plum: '#181410',
          plumDark: '#100D0A',
          plumSoft: '#241E18',
          amber: '#C5A880',
          amberLight: '#D9C29A',
          amberDark: '#96754A',
          sage: '#8AA899',
          sageDark: '#5F7F6E',
          sand: '#F3E9D7',
          cream: '#FBF6EC',
          forest: '#234236',
          forestSoft: '#2E4B3E',
          terracotta: '#C96F4A',
        },
        brand: {
          50: '#FBF6EC', 100: '#F3E9D7', 200: '#edd8ba', 300: '#D9C29A',
          400: '#C5A880', 500: '#D98A3D', 600: '#96754A', 700: '#7e4d26',
          800: '#673e23', 900: '#181410',
          gold: '#C5A880', goldDark: '#96754A', goldLight: '#EFE3CC',
        },
        resort: {
          darkest: '#100D0A', dark: '#181410', surface: '#241E18',
          card: '#2E2721', border: '#4A4036', cream: '#FBF6EC',
          sand: '#F3E9D7', muted: '#8AA899',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 24px 50px -12px rgba(43, 27, 18, 0.35)',
        glow: '0 0 32px rgba(232, 161, 92, 0.35)',
        amber: '0 12px 30px rgba(232, 161, 92, 0.35)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'hero-zoom': { from: { transform: 'scale(1) translateY(0)' }, to: { transform: 'scale(1.12) translateY(-14px)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'hero-zoom': 'hero-zoom 18s ease-in-out infinite alternate',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
