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
            fontFamily: {
                apple: ['var(--apple)'],
                adobe: ['var(--adobe)'],
                poppins: ['var(--poppins)'],
            },
            colors: {
                menu: "var(--menu-color)",
                "menu-link": "var(--menu-link-color)",
                "select-language-options": "var(--select-language-options-background-color)",
                "select-language-options-hover": "var(--select-language-options-background-color-hover)",
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
            boxShadow: {
                "hamburger": "var(--hamburger-box-shadow)",
            }
        },
    },
    plugins: [],
}

export default config
