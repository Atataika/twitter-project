let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

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
	devServer: {
		historyApiFallback: {
			index: '/'
		},
		overlay: true,		
		port: 3000
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	]
};

module.exports = conf;