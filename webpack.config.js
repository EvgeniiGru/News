'use strict'

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/Root.tsx",
    mode: "development",
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:[{
                    loader: 'ts-loader',
                }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                type: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[id][name].[hash:8].js',
        chunkFilename: '[id].[hash:8].js'
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3099,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join('./', 'public/index.html'),
            publicPath: './'
        })

    ]
};