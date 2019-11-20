import generateSkeleton from './generate/generateSkeleton';
import generatePublic from './generate/generatePublic';
import generateSource from './generate/generateSource';
import generateBabel from './generate/generateBabel';
import generateWebpack from './generate/generateWebpack';
import generateReduxSetup from './generate/generateReduxSetup';

import installDependencies from './util/installDependencies';
import askProjectDetails from './util/askProjectDetails';
import getDependencies from './util/getDependencies';
import getDevDependencies from './util/getDevDependencies';
import { red, cyanBright, green, yellowBright } from 'chalk';
import { existsSync } from 'fs';
import { throwErrorMessage } from './util/validation';

const setupFiles = async (dirname, nameString, workingDirectory) => {
	const dirAlreadyExists = existsSync(`${dirname}`);
	const nodeVersion = process.version;
	const isNodeIncompatible = parseFloat(nodeVersion.substr(1, 5)) < 7;
	if (dirAlreadyExists || isNodeIncompatible) {
		console.log(red(throwErrorMessage(isNodeIncompatible, nameString)));
		process.exit()
	}
	console.log(cyanBright(`
 Hola!😄 Please take a moment to answer a few questions..
	`))
	const answers = await askProjectDetails();
	generateSkeleton(dirname, nameString);
	generatePublic(dirname, nameString, workingDirectory);
	generateSource(dirname, answers, workingDirectory);

	if (answers.reduxFlag) {
		generateReduxSetup(dirname, workingDirectory);
	}
	
	generateBabel(dirname, workingDirectory);

	const dependencies = getDependencies(answers);

	console.log(green('\nInstalling dependencies. This might take a while..😴\n\n'));

	generateWebpack(dirname, dependencies, answers);
	const devDependencies = getDevDependencies(answers);
	installDependencies({
		dependencies: devDependencies,
		devFlag: true,
		directory: dirname
	});
	installDependencies({
		dependencies,
		devFlag: false,
		directory: dirname
	});
	console.log(green(`
	To run your project - 


		$ cd ${nameString}
		$ npm start

	`))
	console.log(yellowBright(`
	💻 Happy coding fella! 😎
	
	`))

}

export default setupFiles;
