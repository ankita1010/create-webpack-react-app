module.exports = (projectName) => (
	{
		name: projectName,
		version: "1.0.0",
		description: 'This project is created using react and webpack',
		scripts: {
			start: 'webpack-dev-server',
			build: 'webpack -mode=production',
			devbuild: 'webpack -mode=development'
		},
		browserlist: {
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