import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        lightBg: '#f8fafc',
        textMain: '#0f172a',
        textMuted: '#64748b',
        accentBlue: '#2563eb',
        accentPurple: '#7c3aed',
        accentTeal: '#0d9488',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulseSoft 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: "0.1", transform: 'scale(1)' },
          '50%': { opacity: "0.3", transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
