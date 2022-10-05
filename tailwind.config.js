/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./page_content/**/*.{md,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['Roboto'],
				head: ['Molot'],
			},
			colors: {
				pink: '#EB005C',
				light: '#49454F',
				orange: '#FA59011A',
				black: '#161214',
				blackAlt: '#000000',
			},
		},
	},
	plugins: [],
};
