module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      backgroundLight: '#eff0f3',
      backgroundDark: '#16161a',
      secondary: '#72757e',
      headline: '#fffffe',
      paragraph: '#BED1E9',
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
