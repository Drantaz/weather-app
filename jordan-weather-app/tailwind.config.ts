import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
<<<<<<< HEAD
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
=======
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> 319ba063e00e8b8da8f5f09b177ee1b8ae2c6bf9
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
      'dodgerblue': 'dodgerblue'
=======
>>>>>>> 319ba063e00e8b8da8f5f09b177ee1b8ae2c6bf9
    },
  },
  plugins: [],
}
export default config
