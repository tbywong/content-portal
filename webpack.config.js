const path = require('path');

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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|svg)$/,
        use: 'file-loader'
      }
    ]
  }
}

// const path = require('path');
//
// module.exports = {
//   entry: path.join(__dirname, 'src', 'index'),
//   output: {
//     path: path.join(__dirname, 'src', 'static', 'js'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: /(node_modules)/,
//       use: loader: 'babel-loader',
//       options: {
//         presets: ['react', 'es2015']
//       }
//     }, {
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader']
//     }, {
//       test: /\.(png|svg)$/,
//       use: 'file-loader'
//     }]
//   }
// }

// loaders: [{
//   test: path.join(__dirname, 'src'),
//   loader: 'babel-loader',
//   query: {
//       presets: ['react', 'es2015']
//   }
// }],
