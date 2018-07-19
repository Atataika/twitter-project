let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let JavaScriptObfuscator = require('webpack-obfuscator');

let conf = {
	entry: {
		app: './src/js/App.js'
	},
	
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'App.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					beautify: false
				},
				compress: {
					inline: false
				}
	        }
		}),
		new JavaScriptObfuscator ({
			rotateUnicodeArray: true
			})
	]
};

let devConf = {
	devServer: {
		historyApiFallback: {
			index: '/'
		},
		overlay: true,		
		port: 3000
	}
}

module.exports = function(env) {
	if (env === 'production'){
		return conf
	}
	if (env === 'development'){
		return Object.assign(
			{},
			conf,
			devConf
		)
	}
}