import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    nextui(),
    iconsPlugin({
      collections: getIconCollections(['lucide']),
    }),
  ],
} satisfies Config
