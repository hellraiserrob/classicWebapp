var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        // compress: true,
        port: 9000,
        watchContentBase: true
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};