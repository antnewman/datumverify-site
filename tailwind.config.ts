import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#161616',
        graphite: '#4A4D52',
        pencil: '#A4A29D',
        drafting: '#E8E4DA',
        paper: '#FAF7F0',
        reference: '#1B5A6A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        wordmark: '-0.02em',
      },
    },
  },
  plugins: [],
} satisfies Config;
