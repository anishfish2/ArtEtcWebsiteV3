import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '1.5xl': '2000px',  
      },
      fontSize: {
        'xxs': '0.5rem', 
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '40rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '260': '65rem',
        '280': '70rem',
        '300': '75rem',
        '320': '80rem',
        '340': '85rem',
        '360': '90rem',
        '380': '95rem',
        '400': '100rem',
      },
    },
  },
  plugins: [],
}
export default config
