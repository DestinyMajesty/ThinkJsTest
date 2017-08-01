//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var path = require('path');
var webpack = require('webpack');
module.exports = {//注意这里是exports不是export
    entry: {
		'main': path.resolve('www/static/js/main.js')
	},
    output: {//输出目录
        path: path.resolve('www/static/build/'),//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            }
        ]
    }
};