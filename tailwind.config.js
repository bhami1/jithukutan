/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0b0c11',
          darker: '#07080a',
          card: '#12141c',
          hover: '#191b26',
        },
        pastel: {
          sage: '#b8d8be',
          sageDark: '#8fb898',
          lavender: '#d8b4e2',
          mauve: '#c4b5fd',
          peach: '#fed7aa',
          apricot: '#fdba74',
          sky: '#bae6fd',
          butter: '#fef08a',
          linen: '#fbf8f3',
          cream: '#ede8df',
          stone: '#a8a29e',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          pastel: 'rgba(184, 216, 190, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 7s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.06)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow-sage': '0 0 35px -5px rgba(184, 216, 190, 0.2)',
        'glow-lavender': '0 0 35px -5px rgba(216, 180, 226, 0.2)',
        'glow-peach': '0 0 35px -5px rgba(254, 215, 170, 0.2)',
        'glass-card': '0 12px 36px 0 rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
