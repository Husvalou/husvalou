/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce4ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3390ff',
          500: '#0070F3', // primary
          600: '#005ad4',
          700: '#0042a6',
          800: '#002b77',
          900: '#001540',
        },
        secondary: {
          50: '#f0eaff',
          100: '#e2d5ff',
          200: '#c4abff',
          300: '#a781ff',
          400: '#8958ff',
          500: '#6D28D9', // secondary
          600: '#5a21b6',
          700: '#461a92',
          800: '#32136d',
          900: '#1e0c49',
        },
        accent: {
          50: '#e6fdf6',
          100: '#ccfbed',
          200: '#99f7db',
          300: '#66f3c9',
          400: '#33efb7',
          500: '#10B981', // accent
          600: '#0d9c6d',
          700: '#0a7f58',
          800: '#076244',
          900: '#04452f',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
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
};