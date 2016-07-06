/**
 * Created by fengjj on 2016/7/1.
 */
var webpack = require('webpack')
module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('This file is created by zhaoda')
    ]
};