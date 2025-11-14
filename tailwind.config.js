/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neo-blue': '#00D9FF',
        'neo-pink': '#FF006E',
        'neo-green': '#39FF14',
        'neo-yellow': '#FFD700',
        'neo-red': '#FF0000',
        'neo-bg': '#FFF8E7',
        'malaysian-red': '#FF0000',
        'malaysian-yellow': '#FFD700',
        'malaysian-blue': '#0066CC',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px #000000',
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo-lg': '12px 12px 0px 0px #000000',
        'neo-pressed': '4px 4px 0px 0px #000000',
      },
      borderWidth: {
        'neo': '6px',
        'neo-sm': '4px',
        'neo-lg': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-neo': 'bounceNeo 0.3s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceNeo: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}

