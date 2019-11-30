import { spawnSync as spawn } from 'child_process';

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
	spawn(command, cp_arguments, { stdio: 'inherit', cwd: directory, shell: true });
}

export default installDependencies;