module.exports = {
  entry: './src/client/index.js',
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
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
