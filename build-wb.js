const workboxBuild = require('workbox-build')

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.injectManifest({
    swSrc: './sw-tmpl.js',
    swDest: './sw.js',
    globDirectory: './',
    globPatterns: [
      '**\/*.{woff,woff2}',
    ]
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`)
  })
}

buildSW()