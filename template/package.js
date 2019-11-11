module.exports = (projectName) => (
	{
		name: projectName,
		version: "1.0.0",
		description: 'This project is created using react and webpack',
		scripts: {
			start: 'webpack-dev-server',
			build: 'webpack -env=production',
			devbuild: 'webpack -env=development'
		},
		browserslist: {
			"production": [
				">0.2%",
				"not dead",
				"not op_mini all"
			],
			"development": [
				"last 1 chrome version",
				"last 1 firefox version",
				"last 1 safari version"
			]
		}
	}

)