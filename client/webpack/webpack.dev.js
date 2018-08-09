const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const WebpackDevServerHost = 'http://0.0.0.0:8000';


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../../server/templates/index.html'),
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});