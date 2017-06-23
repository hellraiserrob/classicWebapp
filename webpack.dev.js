var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function pugPage(name) {
    return new HtmlWebpackPlugin({
        filename: name + '.html',
        template: './src/templates/pages/' + name + '.pug'
    })
}


module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/scripts/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
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
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        },{
            test: /\.pug$/,
            loader: 'pug-loader'
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        // compress: true,
        port: 9000,
        watchContentBase: true
    },
    plugins: [

        pugPage('index'),
        pugPage('test'),


        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './src/index.pug'
        // }),

        // new HtmlWebpackPlugin({
        //     filename: 'test.html',
        //     template: './src/test.pug'
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/index.pug'
        // }),
        // new HtmlWebpackPlugin({

        //     filename: './src/test.html',
        //     template: './src/test.pug'
        // }),
        new ExtractTextPlugin('styles.css')
    ]
};