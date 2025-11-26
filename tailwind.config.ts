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
        background: '#0a0a0f',
        'background-secondary': '#12121a',
        'background-card': 'rgba(20, 20, 30, 0.6)',
        primary: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#6d28d9',
        },
        accent: '#ec4899',
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        border: 'rgba(139, 92, 246, 0.2)',
        glow: 'rgba(139, 92, 246, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-radial-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        'gradient-card': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
        'gradient-text': 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
        'gradient-background': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 8rem)',
        'section': 'clamp(2.5rem, 5vw, 5rem)',
        'subsection': 'clamp(1.5rem, 3vw, 3rem)',
      },
      maxWidth: {
        'container': '1400px',
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.15)',
        'glow-hover': '0 20px 60px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'float': 'float 3s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite alternate',
        'ray-rotate': 'ray-rotate 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(139, 92, 246, 0.5), 0 0 100px rgba(139, 92, 246, 0.25)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'ray-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
