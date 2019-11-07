const fs = require('fs');
const generateManifestTemp = require('../../template/manifest');

const generatePublic = (dirname, nameString) => {
	fs.mkdirSync(`${dirname}/public`);
	const publicFileNames = ['index.html', 'index.css'];
	publicFileNames.forEach(filename => {
		fs.copyFileSync(`./template/public/${filename}`, `${dirname}/public/${filename}`)
	});

	// adding manifest.json
	const manifestData = JSON.stringify(generateManifestTemp(nameString), null, 2);
	fs.writeFileSync(`${dirname}/public/manifest.json`, manifestData, err => {
		console.log(err)
	});
}

module.exports = generatePublic;