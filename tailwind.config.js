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
				brown1: "#96887F",
				brown2: "#61544C",
			},
			fontFamily: {
				serif: ["Libre Baskerville", "serif"],
				sansSerif: ["Roboto", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
		},
	},
	plugins: [],
};
