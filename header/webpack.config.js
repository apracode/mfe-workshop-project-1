const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
			port: 4042
	},
	plugins: [
			new ModuleFederationPlugin({
					name: 'header',
					filename: 'remoteEntry.js',
					exposes: {
							'./HeaderIndex': './src/bootstrap'
					},
					shared: ['faker']
			}),
			new HTMLWebpackPlugin({
					template: './public/index.html'
			})
	]
}