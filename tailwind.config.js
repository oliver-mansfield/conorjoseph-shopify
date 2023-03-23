/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "450px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
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
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	plugins: [],
};
