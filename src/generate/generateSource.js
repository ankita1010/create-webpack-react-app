const fs = require('fs');

const generateSource = (dirname, type = 'vanilla') => {
	const sourceFileNames = ['App.js', 'index.js', 'App.css'];
	fs.mkdirSync(`${dirname}/src`);
	sourceFileNames.forEach(filename => {
		fs.copyFileSync(`./template/src/${filename}`, `${dirname}/src/${filename}`)
	})
}

module.exports = generateSource;