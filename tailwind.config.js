/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			aspectRatio: {
				'404-image': '319/225',
			},
			backgroundImage: {
				'not-found': "url('/img/hero-pattern.svg')",
			},
		},
	},
	plugins: [],
};
