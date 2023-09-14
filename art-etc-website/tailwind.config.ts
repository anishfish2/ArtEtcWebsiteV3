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
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '260': '65rem',
        '280': '70rem',
        '300': '75rem',
      },
    },
  },
  plugins: [],
}
export default config
