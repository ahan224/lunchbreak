module.exports = {
	entry: "./client/scripts/index.jsx",
	output: {
		path: __dirname + '/public',
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},

	debug: true,
	devtool: 'source-map'
}