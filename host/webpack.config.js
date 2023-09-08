const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
			port: 4040
	},
	plugins: [
			new ModuleFederationPlugin({
					name: 'host',
					remotes: {
						header: "header@http://localhost:4042/remoteEntry.js",
						card: "card@http://localhost:4041/remoteEntry.js",
					}
			}),
			new HTMLWebpackPlugin({
					template: './public/index.html'
			})
	]
}