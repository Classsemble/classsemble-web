/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#ED6A5A',
        lemon: '#F4F1BB',
        ash: '#9BC1BC',
        teal: '#5CA4A9',
        linen: '#E6EBE0',
        primary: {
          50: '#E6EBE0',
          100: '#9BC1BC',
          200: '#5CA4A9',
          300: '#5CA4A9',
          400: '#5CA4A9',
          500: '#5CA4A9',
          600: '#5CA4A9',
          700: '#5CA4A9',
          800: '#5CA4A9',
          900: '#5CA4A9',
        },
        secondary: {
          50: '#F4F1BB',
          100: '#F4F1BB',
          200: '#ED6A5A',
          300: '#ED6A5A',
          400: '#ED6A5A',
          500: '#ED6A5A',
          600: '#ED6A5A',
          700: '#ED6A5A',
          800: '#ED6A5A',
          900: '#ED6A5A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
