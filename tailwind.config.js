/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0F19',
          elevated: '#121727',
        },
        accent: {
          primary: '#7C5CFC',
          secondary: '#F2A65A',
        },
        text: {
          primary: '#F5F3FF',
          secondary: '#A0A3B1',
        },
        border: {
          glass: 'rgba(255,255,255,0.08)',
        },
        state: {
          success: '#4ADE80',
          error: '#F87171',
        },
      },
      fontFamily: {
        display: ['"General Sans"', '"Clash Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-l': ['2.5rem', { lineHeight: '1.1', fontWeight: '600' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
        '2xl': '96px',
        '3xl': '140px',
      },
      borderRadius: {
        sm: '12px',
        md: '20px',
        lg: '28px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(124,92,252,0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C5CFC 0%, #F2A65A 100%)',
        'gradient-primary-hover': 'linear-gradient(160deg, #7C5CFC 0%, #F2A65A 100%)',
        'gradient-mesh':
          'radial-gradient(at 20% 20%, rgba(124,92,252,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(242,166,90,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(124,92,252,0.15) 0px, transparent 50%)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        smooth: '250ms',
      },
      backdropBlur: {
        glass: '20px',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        meshDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 2%) scale(1.05)' },
        },
      },
      animation: {
        'mesh-drift': 'meshDrift 60s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
