import Typography from 'typography'
import githubTheme from 'typography-theme-github'

//const config = require('../../config/SiteConfig')
githubTheme.overrideStyles = ({ rhythm }, options, styles) => ({
    h1: {
      border:0,
    },
  })

const typography = new Typography (githubTheme)

// const typography = new Typography({
// 	title: 'Emma',
// 	baseFontSize: config.baseFontSize,
// 	baseLineHeight: 1.5,
// 	headerFontFamily: [config.headerFontFamily, 'sans-serif'],
// 	bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
// 	scaleRatio: 2.5,
// 	headerWeight: 700,
// 	googleFonts: [
// 		{
// 			name: config.headerFontFamily,
// 			styles: ['700'],
// 		},
// 		{
// 			name: config.bodyFontFamily,
// 			styles: ['400'],
// 		},
// 	],
// })

export default typography
