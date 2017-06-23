var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function pugPage(name) {
    return new HtmlWebpackPlugin({
        filename: name + '.html',
        template: './src/templates/pages/' + name + '.pug'
    })
}


module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            // loader: "eslint-loader"
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
                "eslint-loader"
            ]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }, {
            test: /\.pug$/,
            loader: 'pug-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false
        }),
        pugPage('index'),
        pugPage('test'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([{
            from: 'public'
        }])
    ]
};