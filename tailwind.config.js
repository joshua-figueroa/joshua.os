/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary:         "var(--color-primary)",
				secondary:       "var(--color-secondary)",
				tertiary:        "var(--color-tertiary)",
				violet:          "var(--color-accent)",
				copper:          "var(--color-copper)",
				"black-100":     "var(--color-black-100)",
				"black-200":     "var(--color-black-200)",
				"white-100":     "var(--color-white-100)",
				"border-subtle": "var(--color-border-subtle)",
				"border-default":"var(--color-border-default)",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #0A0D15",
				icon: "0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.35)",
			},
			screens: {
				xs: "450px",
			},
			borderRadius: {
				squircle: "22.37%",
				"ios-card": "24px",
				"ios-lg": "34px",
			},
			backdropBlur: {
				ios: "40px",
				"ios-strong": "60px",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
					"&::-webkit-scrollbar": { display: "none" },
				},
			});
		},
	],
};
