import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindScrollbar from 'tailwind-scrollbar';
import plugin from 'tailwindcss/plugin';

import { PluginAPI } from 'tailwindcss/types/config';

const config: import('tailwindcss').Config = {
    mode: 'jit',
    content: [
        "./src/components/**/*.{ts,tsx,mdx}",
        "./src/app/**/*.{ts,tsx,mdx}",
        "./src/asset/scss/**/*.scss",
        "./src/asset/data/**/*.{ts,tsx}",
        "./src/mdx-components.tsx",
    ],
    safelist: [
        {
            pattern: /anim-delay-.*/,
        },
        {
            pattern: /anim-duration-.*/,
        },
        {
            pattern: /duration-(75|150|225|300|1000)/,
        },
        {
            pattern: /transition-(\[height,background-color\])/,
        }
    ],
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                // Skeleton shimmer animation
                "shimmer": {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
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
                    '0%': { transform: 'scaleX(1)' },
                    '50%': { transform: 'scaleX(1.2)' },
                    '100%': { transform: 'scaleX(1)' },
                },
                "blink": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" }
                },
                "appearance": {
                    "100%": {
                        "pointer-events": "auto",
                        opacity: "1",
                        transform: "none"
                    }
                },
                "fadeIn": {
                    "100%": {
                        "pointer-events": "auto",
                        opacity: "1"
                    }
                },
                "scale-up": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0.3)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)"
                    }
                },
                "scale-down": {
                    "0%": {
                        opacity: "1",
                        transform: "scale(1)"
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale(0.3)"
                    }
                },
                "appear-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-30vw) scale(0.6)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)"
                    }
                },
                "appear-right": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(30vw) scale(0.6)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)"
                    }
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
                // Menu dark
                "menu-dark": "var(--menu-color-dark)",
                // Select Language
                "select-language-options": "var(--select-language-options-background-color)",
                "select-language-options-hover": "var(--select-language-options-background-color-hover)",
                "select-language-options-hover-dark": "var(--select-language-options-background-color-hover-dark)",
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
                // Global dark
                "title-dark": "var(--title-color-dark)",
                "background-dark": "var(--background-color-dark)",
                "triangle-header-dark": "var(--triangle-header-color-dark)",
                "triangle-footer-dark": "var(--triangle-footer-color-dark)",
                "circle-one-dark": "var(--circle-one-color-dark)",
                "circle-two-dark": "var(--circle-two-color-dark)",
                "triangle-yellow-dark": "var(--triangle-yellow-color-dark)",
                "triangle-orange-dark": "var(--triangle-orange-color-dark)",
                "triangle-red-dark": "var(--triangle-red-color-dark)",
            },
            transitionTimingFunction: {
                menu: "var(--menu-transition-timing-function)",
            },
            gridTemplateColumns: {
                'select-language': "var(--select-language-columns)",
            },
            animation: {
                'shimmer': 'shimmer 1.5s ease-in-out infinite',
                'triangle-red': 'triangle-red-move 40s linear infinite',
                'triangle-yellow': 'triangle-yellow-move 50s linear infinite',
                'triangle-orange': 'triangle-orange-move 70s linear infinite',
                'vertical-bar': 'blink 1.5s ease-in-out infinite',
                'scale-up': 'scale-up 0.3s ease forwards',
                'scale-down': 'scale-down 0.3s ease forwards',
                'appear-left': 'appear-left 0.3s ease forwards',
                'appear-right': 'appear-right 0.3s ease forwards',
                'appearance': 'appearance',
                'fade': 'fadeIn',
                'bar': 'bar-move 6s linear infinite, fadeIn 0.6s 0.2s ease forwards',
            },
            width: {
                '22': '5.5rem',
            },
            height: {
                '22': '5.5rem',
            },
            spacing: {
                '22': '5.5rem',
            },
            transitionDuration: {
                450: '450ms',
                600: '600ms',
            }
        },
        screens: {
            /* '2xs': '320px' { base } */
            'xs': '480px',
            ...defaultTheme.screens,
            /* Default :
            'sm': 640px
            'md': 768px
            'lg': 1024px
            'xl': 1280px
            */
        }
    },
    plugins: [
        tailwindScrollbar({ nocompatible: true }),
        plugin(({ addVariant }: PluginAPI) => {

            addVariant('hover-safe', "@media (hover: hover) and (pointer: fine)");
            addVariant('children', '& > *');

            addVariant('max-2xl', '@media (max-width: 1536px)');
            addVariant('max-xl', '@media (max-width: 1280px)');
            addVariant('max-lg', '@media (max-width: 1024px)');
            addVariant('max-md', '@media (max-width: 767px)');
            addVariant('max-sm', '@media (max-width: 639px)');
            addVariant('max-xs', '@media (max-width: 479px)');
            
        }),
    ],
}

export default config
