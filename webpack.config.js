const path = require('path');

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: {
    main: './src'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./public/dist'),
  },
}