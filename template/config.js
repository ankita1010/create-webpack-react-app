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
				template: "./src/index.html",
				favicon: './src/hero-image.jpg'
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
			watch: true,
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
					test: /\.html$/,
					use: { loader: 'html-loader' }
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader"
						}
					]
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
					test: /\.(jpg|png|ogg|mp3)$/,
					use: {
						loader: "file-loader",
						options: {
							name: "static/media/[name].[hash:8].[ext]"
						}
					}
				}`;
module.exports = webpackConfig;