import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#1a4b8b',
				secondary: '#f9f6f0',
				patriotic: {
					red: '#cf233f',
					blue: '#1a4b8b',
					cream: '#f9f6f0'
				}
			}
		}
	}
} satisfies Config;
