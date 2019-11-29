const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		],
	},
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
};