
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'development',
    devServer:{
        hot:true,
        port: 9956,
        host:"0.0.0.0",
        contentBase:path.resolve(__dirname,'../dist'),
        historyApiFallback: true,
        overlay:true
    }

})
