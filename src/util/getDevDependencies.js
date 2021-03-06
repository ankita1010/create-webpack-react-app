const getDevDependencies = ({
		styleFlag
	}) => {
	const devDependencies = [
		'@babel/core',
		'@babel/polyfill',
		'@babel/preset-react',
		'@babel/preset-env',
		"@babel/plugin-proposal-class-properties",
		'babel-loader',
		'css-loader',
		'html-webpack-plugin',
		'webpack',
		'webpack-cli',
		'webpack-dev-server',
		'mini-css-extract-plugin',
		'file-loader',
		'webpack-manifest-plugin'
	];
	const styleDependencies = styleFlag ? ['node-sass', 'sass-loader']: [];

	return ([
		...devDependencies,
		...styleDependencies
	]);
}

export default getDevDependencies;