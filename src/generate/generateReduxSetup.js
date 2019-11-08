const fs = require('fs');
const path = require("path");
// const tile = require('../../template/src/Store.js')
module.exports = function (dirname, workingDirectory) {
	const currentPath = path.resolve(dirname);
	const reduxFileNames = ['rootReducer.js', 'actionTypes.js', 'actions.js'];
	fs.copyFileSync(`${workingDirectory}/template/src/Store.js`, `${currentPath}/src/Store.js`)
	fs.mkdirSync(`${dirname}/src/redux`);
	reduxFileNames.forEach(fileName => 	{
		fs.copyFileSync(`${workingDirectory}/template/src/redux/${fileName}`, `${currentPath}/src/redux/${fileName}`)
	})
}