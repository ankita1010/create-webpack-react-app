const fs = require('fs');

const generatePackJsonTemp = require('./generatePackJsonTemp');

const copyPublicFiles = (dirname) => {

	fs.mkdirSync(`${dirname}/public`);

	const publicFileNames = ['index.html', 'manifest.json', 'index.css'];
	publicFileNames.forEach(filename => {
		fs.copyFileSync(`./templates/public/${filename}`, `${dirname}/public/${filename}`)
	})

}

const copySourceFiles = (dirname, type = 'vanilla') => {

	const sourceFileNames = ['App.js', 'index.js', 'App.css'];

	fs.mkdirSync(`${dirname}/src`);
	sourceFileNames.forEach(filename => {
		fs.copyFileSync(`./templates/${type}/src/${filename}`, `${dirname}/src/${filename}`)
	})

}


//setting up files - primary function

const setUpFiles = (dirname, nameString) => {

	//creating root directory 
	fs.mkdirSync(dirname);

	//creating package.json
	const packJsonData = JSON.stringify(generatePackJsonTemp(nameString), null, 2);
	fs.writeFileSync(`${dirname}/package.json`, packJsonData, err => {
		console.log(err)
	});

	//creating public folder
	copyPublicFiles(dirname);

	//creating src folder 
	copySourceFiles(dirname)

}

module.exports = setUpFiles;