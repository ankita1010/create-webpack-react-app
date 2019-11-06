const installDependencies = ({
	dependencies,
	devFlag,
	directory
}) => {
	const command = 'npm';
	const arguments = devFlag ?
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

	// spawn(command, arguments, { stdio: 'inherit', cwd: directory });
}

module.exports = installDependencies;