const path = require('path'),
    webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
                }],
            },
            //loaders for other file types can go here
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: "postcss-loader",
                            options: { plugins: [autoprefixer()] }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "public/css/[name].css"
        })
    ]
}