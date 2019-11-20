import { mkdirSync, writeFileSync, copyFileSync } from 'fs';
import AppJsConfig from '../template/src/App';
import AppStyleConfig from '../template/src/AppStyle';
import IndexConfig from '../template/src/index';

const generateSource = (dirname, answers, workingDirectory) => {
	mkdirSync(`${dirname}/src`);
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
	
	srcFilesDetails.forEach(fileDetails => {
		const { templateName, isBuffered, destinationName, data } = fileDetails;
		if (isBuffered) {
			const fileBufferedData = new Uint8Array(
				Buffer.from(`${data}`)
			);
			writeFileSync(`${dirname}/src/${destinationName}`, fileBufferedData)
		}
		else
			copyFileSync(`${workingDirectory}/src/template/src/${templateName}`, `${dirname}/src/${destinationName}`)
	})
}

export default generateSource;