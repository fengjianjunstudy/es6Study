/**
 * Created by fengjj on 2016/7/1.
 */
var webpack = require('webpack')
var path = require("path");
module.exports = {
    entry: {
        "test":"./test.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('This file is created by zhaoda'),
    ],
    devtool:"source-map"
};