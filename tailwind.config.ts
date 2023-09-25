import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/global/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
export default config
