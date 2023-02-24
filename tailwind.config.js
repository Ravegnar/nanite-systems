/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      headerBg: 'url(/images/B2.png)',
      aboutUs: 'url(/images/C1.png)',
      logo: 'url(/images/NS.png)',
    },
    extend: {},
  },
  plugins: [],
}
