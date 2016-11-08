'use strict';
var webpack = require('webpack'),
    path = require('path');

var _app_ = path.join(__dirname , '/app');

module.exports = {
    devtool: 'source-map',
    resolve: {
        root: _app_
    },
    // context:_app_,
    entry: {
        app:['./app/core/boot.js']
    },
    output:{
        path: _app_,
        filename: "bundle.dev.js"
    },
    module:{
        loaders:[
            {test:/\.css$/ , loader:"style!css"},
            {test:/\.scss$/, loader:"style!css!sass"},
            {test:/\.js$/  , loader:'ng-annotate!babel?presets[]=es2015',exclude:/node_modules|bower_components/},
            {test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/, loader : 'file-loader?name=res/[name].[ext]?[hash]' },
            {test:/\.html$/, loader:'raw' },
            {test:/\.json/ , loader:'json' }

        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({minimize:true})
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     MODE: {
        //         production: process.env.NODE_ENV === 'production'
        //     }
        // })
    ]
};