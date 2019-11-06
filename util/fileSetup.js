const fs = require('fs');
const generatePackJsonTemp = require('./generatePackJsonTemp');

const createRootfolder = () => {
	
}

const copyPublicFiles = () => {


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
	})
}

module.exports = setUpFiles;