const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'main.bundle.css'}),
        new webpack.HotModuleReplacementPlugin()
        // new UglifyJsPlugin({sourceMap: true})

    ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        proxy: {
            '/': 'http://0.0.0.0:8000',
            secure: false,
        }
    }

};