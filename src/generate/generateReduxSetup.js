import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from "path";
// const tile = require('../../template/src/Store.js')
export default function (dirname, workingDirectory) {
	const currentPath = resolve(dirname);
	const reduxFileNames = ['rootReducer.js', 'actionTypes.js', 'actions.js'];
	copyFileSync(`${workingDirectory}/template/src/Store.js`, `${currentPath}/src/Store.js`)
	mkdirSync(`${dirname}/src/redux`);
	reduxFileNames.forEach(fileName => 	{
		copyFileSync(`${workingDirectory}/template/src/redux/${fileName}`, `${currentPath}/src/redux/${fileName}`)
	})
}