module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {


    // darkmode
    lightBlack: '#191F2B',
    darkGrey: '#2B2F3D',
    mediumGrey: '#86919B',
    lightGrey: '#F7F7F7',
    darkTeal: '#0090A8',
    lightTeal: '#00D0F2',
    white: '#FEFEFE',
    //lightmode
    solitude: '#DADEE7',


      backgroundLight: '#eff0f3',
      backgroundCardLightPrimary: '#0f4c75',
      backgroundCardLightSecondary: '#bbe1fa',
      backgroundCardDarkPrimary: '#0784b5',
      backgroundCardDarkSecondary: '#414c50',
      secondary: '#72757e',
      headline: '#fffffe',
      paragraphDark: '#BED1E9',
      paragraphLight: '#2b2c34',
      button: '#7f5af0',
      buttonText: '#fffffe',
      primary: '#2cb67d',
      primaryHover: '#00FF95',
      secondary: '#7f5af0',
      secondaryHover: '#C7B5FF',
      tertiary: '#00A8D3',
      tertiaryHover: '#B4F0FF',
      quaternary: '#1F2E55',
      quaternaryHover: '#7988B0',
      white: '#fffffe'
    }
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],

}
