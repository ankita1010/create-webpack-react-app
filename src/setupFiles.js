const generateSkeleton = require('./generate/generateSkeleton');
const generatePublic = require('./generate/generatePublic');
const generateSource = require('./generate/generateSource');
const generateBabel = require('./generate/generateBabel');
const generateWebpack = require('./generate/generateWebpack');

const installDependencies = require('./util/installDependencies');
const askProjectDetails = require('./util/askProjectDetails');
const getDependencies = require('./util/getDependencies');
const getDevDependencies = require('./util/getDevDependencies');

const setupFiles = async (dirname, nameString) => {
	const answers = await askProjectDetails();

	generateSkeleton(dirname, nameString);
	generatePublic(dirname, nameString);
	generateSource(dirname);

	generateBabel(dirname);

	const dependencies = getDependencies(answers);
	generateWebpack(dirname, dependencies, answers);
	installDependencies({
		dependencies,
		devFlag: false,
		directory: dirname
	});

	const devDependencies = getDevDependencies(answers);
	installDependencies({
		dependencies: devDependencies,
		devFlag: true,
		directory: dirname
	});
}

module.exports = setupFiles;