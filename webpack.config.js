const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    output : {
        filename : 'main-bundler.bundler.js'
    },
    module : {
        rules : {
            {
                test : /\.txt$/ ,
                use : 'raw-loader'
            }
        }
    },
    plugins : [
        new HtmlWebpackPlugin({template : './src/index.html'})
    ],
    mode : 'development'
}