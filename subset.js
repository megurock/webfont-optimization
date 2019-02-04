const fontRanger = require('./node_modules/font-ranger/lib/font-ranger')
const customRanges = require('./js/ranges.js')

const defaultParams = {
  fontFile: '001Shirokuma-Regular.otf',
  outputFolder: './fonts',
  urlPrefix: '/fonts/',
  fontFamily: 'Shirokuma',
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
  keepFormat: false,
  addWoff: false,
  skipCss: false,
  copyOriginal: false,
  locals: ['Shirokuma', 'Shirokuma-Regular'],
}

customRanges.forEach((ranges, index) => {
  const params = Object.assign({}, defaultParams, { 
    ranges,
    fontName: `shirokuma.${index}`
  })
  try {
    fontRanger(params);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})



  
