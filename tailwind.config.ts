import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-200': '#B9F9D8',
        'primary-300': '#83f2bb',
        'primary-400': '#45e396',
        'primary-500': '#1dca76',
        'primary-600': '#12a75e',
        'primary-700': '#12834c',
        'primary-800': '#14673f',
        'primary-900': '#115033',
        'primary-950': '#042f1c',
        500: '#26262B',
        700: '#18181B',
        900: '#141416'
      },
      backgroundImage: {
        home: 'linear-gradient(#000000dd, #000000dd), url("/bg-home.png")',
        'my-photo': 'url("/my-photo.jpg")',
        contact: 'linear-gradient(#000000dd, #000000dd), url("/bg-contact.jpg")'
      }
    }
  },
  plugins: []
}
export default config
