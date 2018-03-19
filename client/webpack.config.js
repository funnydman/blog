var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ "html-loader" ]
      },
      {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
            })
        },
        {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use:['file-loader']
        }
    ]
    },
    plugins: [
        new ExtractTextPlugin({filename:'main.bundle.css'})
    ]

};