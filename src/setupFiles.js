const generateSkeleton = require('./generate/generateSkeleton');
const generatePublic = require('./generate/generatePublic');
const generateSource = require('./generate/generateSource');
const generateBabel = require('./generate/generateBabel');
const generateWebpack = require('./generate/generateWebpack');
const generateReduxSetup = require('./generate/generateReduxSetup');

const installDependencies = require('./util/installDependencies');
const askProjectDetails = require('./util/askProjectDetails');
const getDependencies = require('./util/getDependencies');
const getDevDependencies = require('./util/getDevDependencies');
const chalk = require('chalk');
const fs = require('fs');
const validation = require('./util/validation');

const setupFiles = async (dirname, nameString, workingDirectory) => {
	const dirAlreadyExists = fs.existsSync(`${dirname}`);
	const nodeVersion = process.version;
	const isNodeIncompatible = parseFloat(nodeVersion.substr(1, 5)) < 7;
	if (dirAlreadyExists || isNodeIncompatible) {
		console.log(chalk.red(validation.throwErrorMessage(isNodeIncompatible, nameString)));
		process.exit()
	}
	console.log(chalk.cyanBright(`
 Hola!😄 Please take a moment to answer a few questions..
	`))
	const answers = await askProjectDetails();
	generateSkeleton(dirname, nameString);
	generatePublic(dirname, nameString, workingDirectory);
	generateSource(dirname, answers, workingDirectory);

	if (answers.reduxFlag) {
		generateReduxSetup(dirname, workingDirectory);
	}
	//TO DO

	//add url-loader
	generateBabel(dirname, workingDirectory);

	const dependencies = getDependencies(answers);

	console.log(chalk.green('\nInstalling dependencies. This might take a while..😴\n\n'));

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
	console.log(chalk.green(`
	To run your project - 


		$ cd ${nameString}
		$ npm start

	`))
	console.log(chalk.yellowBright(`
	💻 Happy coding fella! 😎
	
	`))

}

module.exports = setupFiles;
