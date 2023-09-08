const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
			port: 4041
	},
	plugins: [
			new ModuleFederationPlugin({
					name: 'card',
					filename: 'remoteEntry.js',
					exposes: {
							'./CardIndex': './src/bootstrap'
					},
					shared: ['faker']
			}),
			new HTMLWebpackPlugin({
					template: './public/index.html'
			})
	]
}