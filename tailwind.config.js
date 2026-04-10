/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#252540',
          deep: '#0f0f1f',
        },
        teal: {
          DEFAULT: '#4ea620',
          dark: '#3d8318',
          light: '#63c62c',
        },
        mint: {
          DEFAULT: '#00d4aa',
          dark: '#00b894',
          light: '#1ee6bd',
        },
        whatsapp: {
          DEFAULT: '#4ea620',
          light: '#63c62c',
        },
        mist: '#eef4f8',
        'mist-deep': '#e6eef5',
        slategray: '#334155',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(26, 26, 46, 0.15)',
        glow: '0 0 60px -15px rgba(78, 166, 32, 0.6)',
        'glow-mint': '0 0 60px -15px rgba(0, 212, 170, 0.7)',
        'glow-whatsapp': '0 0 50px -10px rgba(78, 166, 32, 0.7)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #0f0f1f 0%, #1a1a2e 50%, #252540 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #1a1a2e 0%, #252540 50%, #1a1a2e 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        'blob-delay': 'blob 22s ease-in-out infinite 4s',
        'grid-move': 'gridMove 20s linear infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        blink: 'blink 1.6s ease-in-out infinite',
        'bar-rise': 'barRise 1.4s ease-out forwards',
        'ticker-scroll': 'tickerScroll 40s linear infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'star-twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.96)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        barRise: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        tickerScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
