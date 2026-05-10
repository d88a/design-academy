import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        accent: {
          DEFAULT: '#6366f1' // violet
        }
      },
      spacing: {
        4: '4px', 8: '8px', 12: '12px', 16: '16px', 24: '24px', 32: '32px', 48: '48px', 64: '64px', 96: '96px', 128: '128px'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            fontWeight: '400',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;