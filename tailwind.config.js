/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1EA896",
				primarylight: "#4ab9ab",
				primarydark: "#157569",
				secondary: "#FF715B",
				secondarylight: "#ff9d8e",
				secondarydark: "#B24F3F",
				tertiary: "#523F38",
				tertiarylighter: "#D8C8C3",
				dark: "#4c5454",
				light: "#edeeee",
				lightest: "#FFFFFF",
				
			},
			shadow: {
				input: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
			},
			animation: {
				"bounce-slow": "bounce 3s ease-in-out infinite",
				"spin-slow": "spin 6s linear infinite",
			},
			keyframes: {
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" },
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [],
};
