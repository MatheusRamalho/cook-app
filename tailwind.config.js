/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                bold: 'Poppins_700Bold',
                medium: 'Poppins_500Medium',
                regular: 'Poppins_400Regular',
            },
            colors: {
                'green-100': '#DCFCE7',
                'green-600': '#15803D',

                'yellow-500': '#EFB103',

                'gray-200': '#C4C4CC',
                'gray-300': '#8D8D99',
                'gray-400': '#7C7C8A',
            },
        },
    },
    plugins: [],
}
