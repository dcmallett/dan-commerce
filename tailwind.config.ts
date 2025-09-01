import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Primary Brand Colors
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#bae6fd",
					300: "#7dd3fc",
					400: "#38bdf8",
					500: "#0ea5e9",
					600: "#0284c7",
					700: "#0369a1",
					800: "#075985",
					900: "#0c4a6e",
				},
				// Neutral Colors
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
				},
				// Semantic Colors
				success: {
					50: "#f0fdf4",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
				},
				warning: {
					50: "#fffbeb",
					500: "#f59e0b",
					600: "#d97706",
				},
				error: {
					50: "#fef2f2",
					500: "#ef4444",
					600: "#dc2626",
				},
				// E-commerce Specific
				price: "#059669",
				discount: "#dc2626",
				rating: "#f59e0b",
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
				sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
				base: ["1rem", { lineHeight: "1.5rem" }], // 16px
				lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
				xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
				"2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
				"5xl": ["3rem", { lineHeight: "1" }], // 48px
				"6xl": ["3.75rem", { lineHeight: "1" }], // 60px
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				display: ["Poppins", "Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			screens: {
				xs: "475px",
			},
		},
	},
	plugins: [],
};

export default config;
