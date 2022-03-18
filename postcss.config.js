module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module.exports = {
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
  ]
}
const postcssOpts = {
  extract: 'index.css',
  plugins: [
      () => postcssUrl(postcssUrlOpts)
  ]
};