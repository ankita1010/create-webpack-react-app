const spawn = require('child_process').spawnSync;

const installDependencies = ({
	dependencies,
	devFlag,
	directory
}) => {
	const command = 'npm';
	const cp_arguments = devFlag ?
	[
		'install',
		'--save-dev',
		'--loglevel',
		'error',
	].concat(dependencies) :
	[
		'install',
		'--save',
		'--save-exact',
		'--loglevel',
		'error',
	].concat(dependencies);

	spawn(command, cp_arguments, { stdio: 'inherit', cwd: directory });
}

module.exports = installDependencies;