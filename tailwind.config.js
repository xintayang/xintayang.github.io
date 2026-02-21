/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"], // This tells Tailwind to look at your HTML files
    theme: {
        extend: {
            fontFamily: {
                // This maps 'font-serif' to Georgia
                'serif': ['Georgia', 'ui-serif', 'serif'],
                'sans': ['Nunito', 'sans-serif'],
                'display': ['"Cormorant Garamond"', 'serif']
            },
        },
    },
    plugins: [],
}