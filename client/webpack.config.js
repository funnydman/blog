var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                    use: ['css-loader', 'less-loader']
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
                test: /\.js$/, // both .js and .jsx
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'app'),
                enforce: 'pre',
                options: {
                    fix: false
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'main.bundle.css'})
    ]

};