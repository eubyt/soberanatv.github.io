/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./page_content/**/*.{md,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/containers/**/*.{js,ts,jsx,tsx}',
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
		screens: {
			smh: {raw: '(min-height: 640px)'},
			esm: '350px', // Extra-small
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1700px',
		},
	},
	plugins: [],
};
