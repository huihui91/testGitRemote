const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports = {
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude:/node_module/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.(c|sc|sa)ss$/,
                exclude: /node_module/,
                include:path.resolve(__dirname,'../src'),
                use:[
                    {
                        loader:'vue-style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
      new  VueLoaderPlugin()
    ],
    resolve:{
        // 引入文件省略后缀
        extensions:['.js','.vue','.css','.json'],
        // 引入路径
        alias:{
            '@components':path.resolve(__dirname,'../src/components'),
            '@assets':path.resolve(__dirname,'../src/assets')
        }
    }
    
}