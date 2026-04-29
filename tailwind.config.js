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
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};
