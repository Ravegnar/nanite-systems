/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		backgroundImage: {
			//A6 B2
			headerBg: 'url(/images/A6.png)',
			headerBgDark: 'url(/images/B2.png)',
			aboutUs: 'url(/images/C1.png)',
			logo: 'url(/images/NS.png)',
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'tomorrow': ['Tomorrow', 'sans-serif'],
			},
			keyframes: {
			 	blink: {
					'50%': { opacity: '0.3' },
			  	},
			 	blinkX2: {
					'0%': { 'width': '0px' },
					'20%': { 'width': '0px' },
					'20%': { 'opacity': '1' },
					'40%': { 'opacity': '0.3' },
					'55%': { 'width': '100%' },
					'60%': { 'opacity': '1' },
					'80%': { 'opacity': '0.3' },
					'100%': { 'opacity': '1' },
					'100%': { 'width': '100%' },
				},
				blinkX3: {
					'0%': { 'opacity': '0.3' },
					'20%': { 'opacity': '1' },
					'40%': { 'opacity': '0.3' },
					'60%': { 'opacity': '1' },
					'80%': { 'opacity': '0.3' },
					'100%': { 'opacity': '1' },
				},
				fadeOut: {
					'0%': { opacity: '0.75' },
					'100%': { opacity: '0' },
				}
			},
			animation: {
			  blink: 'blink 0.25s ease-in-out infinite',
			  blinkX2: 'blinkX2 0.6s ease-in-out both',
			  fadeOut: 'fadeOut 0.4s ease-out both'
			}
		}
	},
	plugins: [],
}
