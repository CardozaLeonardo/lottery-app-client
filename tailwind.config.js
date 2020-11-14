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
        'secondary': '#4568E4',
        'gray1':'#BBB4B4',
        'active': '#FF992F',
        'bg1':'#393857',
        'bg2':' #222243',
        'bg3':'#0A0A27',
      },

      spacing : {
        'sd':'300px'
      }
    },
  },
  variants: {
      outline: ['responsive', 'focus', 'active']
  },
  plugins: [],
}
