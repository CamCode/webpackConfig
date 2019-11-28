const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Output Management',
		}),
	],
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
		],
	},
};