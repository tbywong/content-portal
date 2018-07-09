module.exports = {
  entry: './src/client/index.js',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(png|svg)$/,
        use: 'file-loader'
      }, {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
