module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily : {
          montserrat: ["Montserrat", "sans-serif"],
          playfair: ["Playfair Display", "serif"],
      },
      borderRadius : {
        'xl' : '0.75rem',
      },
      fontSize : {
        'xxs' : '10px',
        '2xxs' : '8px'
      },
      textColor : {
        'gray-1' : '#333333',
        'gray-2' : '#4F4F4F',
        'gray-4' : '#BDBDBD',
        'gray-5' : '#A9A9A9',
      },
      spacing : {
        '2px' : '2px',
        '14' : '3.5rem',
        '368px' : '368px',
      },
      lineHeight : {
        '14' : '4rem'
      },
      boxShadow : {
        'custom' : '0px 2px 2px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  variants: {},
  plugins: [],
}
