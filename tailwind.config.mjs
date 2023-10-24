/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"Gabarito": ["'Gabarito', sans-serif;"],
				"Montserrat": ["'Montserrat', sans-serif"],
				"Poppins": ["'Poppins', sans-serif;"],
				"Roboto": ["'Roboto', sans-serif;"]
			}
		},
	},
	plugins: [],
}
