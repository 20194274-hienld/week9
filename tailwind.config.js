/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontSize: {
      '15px': '0.9375rem',
      'sm': '0.875rem',
      'xl': '1.125rem',
    },
    colors: {
      primary: '#253858',
      linecolor: '#C6D0E6',
      secondary: '#6D4BFF',
    },
    fontFamily: {
      'Mulish': ['Mulish'],
      'Archivo': ['Archivo'],
      'Montserrat': ['Montserrat'],
    },
    screens: {
      // xs: "614px",
      // sm: "1002px",
      // md: "1022px",
      // lg: "1092px",
      // xl: "1110px",
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    extend: {
      backgroundImage: {
        'purpleBackground': "url('/img/backgroundPurple.svg')",
      },
      lineHeight: {
        '18px': '1.125rem',
        '19px': '1.1875rem',
        '25px': '1.5625rem'
      },
      height: {
        'nav': '4.375rem',
      },
      spacing: {
        '80px': '11.25rem'
      },
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
        primary: "#64748b",
      },

    },
  },

  plugins: [
  ],
}
