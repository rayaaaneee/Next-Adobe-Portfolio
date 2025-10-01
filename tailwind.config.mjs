// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const config = {
    mode: 'jit',
    content: [
        "./src/components/**/*.{ts,tsx,mdx}",
        "./src/app/**/*.{ts,tsx,mdx}"
    ],
    darkMode: "class", // or "media"
    theme: {
        extend: {
            keyframes: {
                // For background shapes animation
                "triangle-red-move": {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(200deg) translateX(30vw) translateY(-8vw)" },
                    "70%": { transform: "rotate(160deg) translateX(15vw) translateY(-10vw)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                "triangle-yellow-move": {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(-220deg) translateX(-10vw) translateY(25vw)" },
                    "80%": { transform: "rotate(-1deg) translateX(-7vw) translateY(12.5vw)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                "triangle-orange-move": {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(-170deg) translateX(30vw) translateY(25vw)" },
                    "70%": { transform: "rotate(-160deg) translateX(15vw) translateY(12.5vw)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                "bar-move": {
                    "0%": { width: "73%" },
                    "50%": { width: "70%" },
                    "100%": { width: "73%" },
                },
                "blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 }
                }
            },
            fontFamily: {
                apple: ['var(--apple)'],
                adobe: ['var(--adobe)'],
                adobebold: ['var(--adobe-bold)'],
                poppins: ['var(--poppins)'],
            },
            colors: {
                // Menu
                menu: "var(--menu-color)",
                "menu-link": "var(--menu-link-color)",
                // Select Language
                "select-language-options": "var(--select-language-options-background-color)",
                "select-language-options-hover": "var(--select-language-options-background-color-hover)",
                // Global
                "title": "var(--title-color)",
                "triangle-header": "var(--triangle-header-color)",
                "triangle-footer": "var(--triangle-footer-color)",
                "circle-one": "var(--circle-one-color)",
                "circle-two": "var(--circle-two-color)",
                "triangle-yellow": "var(--triangle-yellow-color)",
                "triangle-orange": "var(--triangle-orange-color)",
                "triangle-red": "var(--triangle-red-color)",
                "blanchedalmond": "var(--blanchedalmond)",
            },
            transitionDuration: {
                menu: "var(--menu-transition-duration)",
            },
            transitionTimingFunction: {
                menu: "var(--menu-transition-timing-function)",
            },
            gridTemplateColumns: {
                'select-language': "var(--select-language-columns)",
            },
            animation: {
                'triangle-red': 'triangle-red-move 40s linear infinite',
                'triangle-yellow': 'triangle-yellow-move 50s linear infinite',
                'triangle-orange': 'triangle-orange-move 70s linear infinite',
                'bar': 'bar-move 6s linear infinite',
                'vertical-bar': 'blink 1.5s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}

export default config
