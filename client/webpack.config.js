const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    },
                        {
                            loader: 'less-loader'
                        }]
                })
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {

                        loader: 'file-loader',
                        options: {outputPath: 'img/'}
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'main.bundle.css'})

    ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }

};