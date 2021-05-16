<<<<<<< HEAD
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
=======
module.exports = {
>>>>>>> e2cf02a46d2ef9a266926e68b6a8f6da19c8aa71
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
<<<<<<< HEAD
  resolve: {
    extensions: ['.js', '.jsx'],
  },
=======
>>>>>>> e2cf02a46d2ef9a266926e68b6a8f6da19c8aa71
};
