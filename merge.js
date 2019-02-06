const fs = require('fs')
const path = require('path')
const concat = require('concat')
const del = require('del');

/**
 * Retrieve css file path list
 */
function getCSSFilePath(dir, fileList = []) {
  fs.readdirSync(dir).forEach((fileName) => {
    const fullPath = path.join(dir, fileName)
    const stats = fs.statSync(fullPath)
    if (stats.isFile()) {
      const isCSS = (/\.css$/).test(fileName)
      if (isCSS) fileList.push(fullPath)
    } else if (stats.isDirectory()) {
      return getCSSFilePath(fullPath, fileList)
    }
  })
  return fileList
}

/**
 * Concat all css files into one
 */
const cssFiles = getCSSFilePath('./fonts')
if (cssFiles.length) {
  concat(cssFiles, './css/fonts.css')
}

/**
 * Delete all css files in 'fonts' directory
 */
del('fonts/**/*.css').then(() => {
  console.log('Deleted /fonts/**/*.css')
})