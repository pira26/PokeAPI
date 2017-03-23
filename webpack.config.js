const path = require("path");

module.exports = {
	// entry file for your bundle
	entry: path.join(__dirname, 'client/src/App.jsx'),

	// result of the bundle
	output: {
		path: path.join(__dirname, 'client/dist/build'),
		filename: "bundle.js"
	},
	module: {
		// apply loaders to files that meet given conditions
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'client/src'),
			loader: 'babel-loader',
			query: {
				presets: ["react", "es2015"]
			}
		}],
	},
}