
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rocket: {
                    cyan: '#00D9FF',
                    blue: '#0066FF',
                    orange: '#FF6B00',
                    purple: '#9D4EDD',
                    dark: '#0A0E27',
                    card: 'rgba(0, 217, 255, 0.05)',
                    border: 'rgba(0, 217, 255, 0.2)',
                    text: '#FFFFFF',
                    textSecondary: '#B8C5D6',
                }
            },
            fontFamily: {
                title: ['Rajdhani', 'sans-serif'],
                subtitle: ['Bebas Neue', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom, transparent, #0A0E27)',
                'btn-primary': 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
                'card-gradient': 'linear-gradient(120deg, rgba(0,102,255,0.1), transparent)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-delayed': 'fadeIn 0.5s ease-out 0.5s forwards',
                'pulse-glow': 'pulseGlow 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
