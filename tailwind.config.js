/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  // Classes adicionadas via JavaScript (navbar ao rolar) — precisam ficar na safelist
  safelist: ['bg-ink/80', 'backdrop-blur-xl', 'border-b', 'border-white/10'],
  theme: {
    extend: {
      colors: {
        ink:     '#0B0B0B',
        ink2:    '#111114',
        purple:  '#6C2BD9',
        purpleHi:'#8B5CF6',
        orange:  '#FF7A00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow:       '0 0 60px -15px rgba(108,43,217,0.55)',
        glowOrange: '0 0 50px -15px rgba(255,122,0,0.45)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shine:  { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shine:  'shine 6s linear infinite',
      },
    },
  },
  plugins: [],
}
