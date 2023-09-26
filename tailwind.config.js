import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    padding: {
      xs: '8px',
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
      xl: '4rem',
    },
    // screens: {
    //   'xs': '480px', // min-width
    //   'sm': '780px',
    //   'md': '1000px',
    //   'lg': '1280px',
    //   'xl': '1500px',
    // },
    extend: {
      gap:{
        xs:'1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
        xl:'5rem'
      },
      boxShadow: {
        'sm': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      borderColor: {
        light: '#e5e7eb',
        default: '#6b7280',
        dark: "#111827"
      },
      borderWidth: {
        sm: '1px',
        md: '2px',
        lg:'4px',
        xl:'6px'
      },
    },
    colors: {
      ...colors,
      'orange': {
        light:'#fb923c',
        default: '#f97316',
     
      },
      'black': {
        default: '#262626',
        dark: '#0a0a0a',
        light: '#525252'
      },
      'gray': {
        default: '#9ca3af',
        dark: '#6b7280',
        light: '#d1d5db'
      },
      'blue':{
        default:'#0ea5e9',
        light:'#38bdf8',
        dark:'#0284c7'
      }
    },
  },
  plugins: [],
}

