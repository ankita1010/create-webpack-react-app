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

const setupFiles = async (dirname, nameString, workingDirectory) => {
	const answers = await askProjectDetails();
	const hasDir = fs.existsSync(`${dirname}`);
	if (hasDir) {
		console.log(chalk.red(`\nA directory named ${nameString} already exists in the current path. Please enter some other name\n\n`));
		process.exit()
	}
	generateSkeleton(dirname, nameString);
	generatePublic(dirname, nameString, workingDirectory);
	generateSource(dirname, answers, workingDirectory);

	if (answers.reduxFlag) {
		generateReduxSetup(dirname, workingDirectory);
	}

	generateBabel(dirname, workingDirectory);

	const dependencies = getDependencies(answers);

	console.log(chalk.green('\nInstalling dependencies. This might take a while..\n\n'));

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

}

module.exports = setupFiles;