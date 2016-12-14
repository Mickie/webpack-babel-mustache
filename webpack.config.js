const webpack = require('webpack');
const production = process.env.NODE_ENV === "production";
const plugins = production? [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })
]:"";

module.exports = {
    entry: './src/main.js',
    output: {
        path: './bin',
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test:/\.css$/,
                loader:"style!css"
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    plugins: plugins
}


