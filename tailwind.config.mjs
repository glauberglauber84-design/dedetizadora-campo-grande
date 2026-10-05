/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b5e20',
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          950: '#0a3d10'
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#128c7e'
        }
      },
      // Escala modular 1.25 (major third) a partir de 16px base.
      // 12.8 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 61
      // sm fica em 14px por legibilidade (não cai em 12.8 duas vezes).
      fontSize: {
        xs:   ['12.8px', { lineHeight: '1.5' }],
        sm:   ['14px',   { lineHeight: '1.5' }],
        base: ['16px',   { lineHeight: '1.6' }],
        lg:   ['20px',   { lineHeight: '1.5' }],
        xl:   ['25px',   { lineHeight: '1.4' }],
        '2xl': ['31px',  { lineHeight: '1.3' }],
        '3xl': ['39px',  { lineHeight: '1.2' }],
        '4xl': ['49px',  { lineHeight: '1.15' }],
        '5xl': ['61px',  { lineHeight: '1.1' }]
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      maxWidth: {
        prose: '70ch'
      },
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
};
