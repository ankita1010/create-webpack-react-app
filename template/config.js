const webpackConfig = `const config = function (env) {
  	const isProduction = env === 'production';
	return {
		mode: isProduction ? "production" : "development",
		devtool: isProduction ? "none" : "cheap-module-eval-source-map",
		entry: {
			bundle: ["@babel/polyfill", "./src/index.js"],
			vendor: VENDOR_LIBS
		},
		output: {
			path: path.resolve(__dirname, "build"),
			//saves the output of webpack in the project directory
			filename: isProduction ? "js/[name].[hash:8].chunk.js" : "js/[name].js"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				//favicon: './src/hero-image.jpg'  //add your website shortcut icon here
			}),
			new MiniCssExtractPlugin({
				filename: "styles/[name].built.css"
			}),
			new ManifestPlugin({
				generate: () => manifestJson
			})
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						enforce: true
					}
				}
			}
		},
		devServer: {
			contentBase: "./build",
			host: "localhost",
			open: true,
			historyApiFallback: true,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: "babel-loader"
				},
				{
					test: /\.(json)/,
					exclude: /node_modules/,
					use: [{
						loader: 'file-loader',
						options: { name: '[name].[ext]' },
					}],
				},
				{
					test: /\.(jpe?g|png|gif|svg|ogg|mp3)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
							},
						},
					],
				}`;
module.exports = webpackConfig;