module.exports = {
  map: false,
  plugins: [
    require('@fullhuman/postcss-purgecss')({ content: ['./index.html'] }),
    require('autoprefixer'),
    require('cssnano')({ discardComments: { removeAll: true } }),
  ],
};
