const fs = require('fs');
const generatePackJsonTemp = require('./generatePackJsonTemp');

const copyPublicFiles = (dirname) => {
	fs.mkdirSync(`${dirname}/public`);
	const publicFileNames = ['index.html', 'manifest.json', 'index.css'];
	publicFileNames.forEach(filename => {
		fs.copyFileSync(`./templates/public/${filename}`, `${dirname}/public/${filename}`)
	})

}

const copyRootDirFiles = () => {


}

const setUpFiles = (dirname) => {

	//creating root directory 
	fs.mkdirSync(dirname);

	//creating package.json
	const packJsonData = JSON.stringify(generatePackJsonTemp(dirname), null, 2);
	fs.writeFileSync(`${dirname}/package.json`, packJsonData, err => {
		console.log(err)
	});

	//creating public folder
	copyPublicFiles(dirname)

}

module.exports = setUpFiles;