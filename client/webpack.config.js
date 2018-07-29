const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const WebpackDevServerHost = 'http://0.0.0.0:8000';

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
                test: /\.(sass|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // TODO: find good configuration eslint & react
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ['eslint-loader']
            //
            // }

        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'main.bundle.css'}),
        new webpack.HotModuleReplacementPlugin()

    ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    devServer: {
        contentBase: path.join(__dirname, '../server/templates/index.html'),
        publicPath: '/static/',
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        open: true,
        watchContentBase: true,
        proxy: {
            '/': WebpackDevServerHost,
            secure: false,
        },
        clientLogLevel: 'none',
        stats: 'errors-only'
    }
};