const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        // publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // {
            //   test: /\.css$/,
            //   use: ['style-loader','css-loader']
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            // {
            //     test: /\.(png|jpg)$/,
            //     loader: 'url-loader?limit=8192',
            // },
            // 　　　　{
            //   　　　　　　test: /\.(png|jpg)$/,
            //   　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]&esModule=false'
            //   　　　　}
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React,webpack5 and Babel7',
            template: 'index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
        port: 8000,
    },
    mode: 'development',
};
