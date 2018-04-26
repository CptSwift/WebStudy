/**
 * Created by chenz on 2018/4/26.
 */
let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                option: {
                    'presets': [latest],
                }
            }
        ]
    },
    plugins: [
        //自动生成index.html文件
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: "index.html"
        })
    ]
};