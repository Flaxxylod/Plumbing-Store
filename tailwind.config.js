// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orenburg': ['Orenburg', 'sans-serif'],
                'pt-sans': ['PT Sans', 'sans-serif'],
            },
            colors: {
                'custom-white': '#FFFFFF',
                'custom-gray': '#939393',
                'custom-white-gray': '#BEBEBE',
                'custom-black': '#151716',
                'custom-orange': '#FE5B00',
                'custom-overlay': 'rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [],
}