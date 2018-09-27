const path = require('path');

const distDir = path.join(__dirname, '/dist');
const srcDir = path.join(__dirname, '/src');


module.exports = {
  mode: 'development',
  entry: `${srcDir}/index.jsx`,
  output: {
    path: `${distDir}`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devtool: 'cheap-eval-source-map',
};
