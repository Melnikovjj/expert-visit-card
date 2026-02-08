module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium palette
        'dark': {
          50: '#f9fafb',
          900: '#0a0e27',
          950: '#050814',
        },
        'slate': {
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'accent': {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        'neon': {
          cyan: '#00d9ff',
          purple: '#d946ef',
          lime: '#bef264',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Large typography for premium feel
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(217, 70, 239, 0.5)',
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // Custom plugin for gradient text
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-text': {
          '@apply bg-clip-text text-transparent': {},
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-dark': {
          'background': 'rgba(15, 23, 42, 0.4)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.glow-button': {
          'position': 'relative',
          'overflow': 'hidden',
          'transition': 'all 0.3s ease',
          '&::before': {
            'content': '""',
            'position': 'absolute',
            'inset': '0',
            'border-radius': 'inherit',
            'background': 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1), transparent 70%)',
            'transform': 'translateX(-100%)',
          },
          '&:hover::before': {
            'transform': 'translateX(100%)',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
