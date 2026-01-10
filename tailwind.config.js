/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        "primary-blue": "#195de6",
        "primary-amber": "#f1ae27",
        "primary": "#195de6",
        "primary-gold": "#f1ae27",
        "bg-dark": "#0B0E14",
        "bg-charcoal": "#111621",
        "background-dark": "#111621",
        "surface-dark": "#1c1f26",
        "panel-dark": "rgba(21, 26, 35, 0.85)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ripple': 'ripple 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
            '0%': { transform: 'scale(1)', opacity: '0.8' },
            '100%': { transform: 'scale(3)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
