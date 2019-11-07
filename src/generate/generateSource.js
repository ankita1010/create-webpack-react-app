const fs = require('fs');
const AppJsConfig = require('../../template/src/App');
const AppStyleConfig = require('../../template/src/AppStyle');
const IndexConfig = require('../../template/src/index');

const generateSource = (dirname, answers) => {
	fs.mkdirSync(`${dirname}/src`);
	const srcFilesDetails = [
		{
			templateName: 'App.js',
			isBuffered: true,
			destinationName: 'App.js',
			data: AppJsConfig(answers.styleFlag)
		},
		{
			templateName: 'AppStyle.js',
			isBuffered: true,
			destinationName: `App.${answers.styleFlag ? 's' : ''}css`,
			data: AppStyleConfig
		},
		{
			templateName: 'index.js',
			isBuffered: true,
			destinationName: 'index.js',
			data: IndexConfig(answers.reduxFlag)
		}
	];
	if (answers.reduxFlag) {
		srcFilesDetails.push({
			templateName: 'Store.js',
			isBuffered: false,
			destinationName: 'Store.js',
			data: ''
		});
		const reduxFileNames = [ 'rootReducer.js', 'actionTypes.js']
		reduxFileNames.forEach(fileName => {
			// fs.copyFileSync(`../../template/src/redux/${fileName}`, `${dirname}/src/redux/${fileName}`)
		})
	}
	
	srcFilesDetails.forEach(fileDetails => {
		const { templateName, isBuffered, destinationName, data } = fileDetails;
		if (isBuffered) {
			const fileBufferedData = new Uint8Array(
				Buffer.from(`${data}`)
			);
			fs.writeFileSync(`${dirname}/src/${destinationName}`, fileBufferedData)
		}
		else
			fs.copyFileSync(`./template/src/${templateName}`, `${dirname}/src/${destinationName}`)
	})
}

module.exports = generateSource;