module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary':' #3563BD',
        'secondary': '#3563BD',
        'gray1':'#BBB4B4',
        'active': '#FF992F',
        'bg2':' #222243',
      }
    },
  },
  variants: {
      outline: ['responsive', 'focus', 'active']
  },
  plugins: [],
}
