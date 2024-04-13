const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/methods/initJState.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    library: 'j-state',
    libraryTarget: 'commonjs2' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};