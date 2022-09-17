/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gold: "#E3CFB4",
			},
			fontFamily: {
				serif: ["Libre Baskerville", "serif"],
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
