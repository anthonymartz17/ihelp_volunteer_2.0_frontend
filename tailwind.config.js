/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1EA896",
				secondary: "#FF715B",
				tertiary: "#523F38",
				dark: "#4C5454",
				light: "#FFFFFF",
			},
		},
	},
	plugins: [],
};
