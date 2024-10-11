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
				light: "#edeeee",
				lightest: "#FFFFFF",
			},
			shadow: {
				input: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
			},
		},
	},
	plugins: [],
};
