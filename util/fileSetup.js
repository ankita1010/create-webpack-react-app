const fs = require('fs');
const generatePackJsonTemp = require('./generatePackJsonTemp');
const childProcess = require('child_process');
const spawn = childProcess.spawn;

const createRootfolder = () => {
	
}

const copyPublicFiles = () => {


}

const copyRootDirFiles = () => {


}

const setUpFiles = (dirname) => {
	//creating root directory 
	fs.mkdirSync(dirname);

	//creating package.json
	const packJsonData = JSON.stringify(generatePackJsonTemp(dirname), null, 2);
	fs.writeFileSync(`${dirname}/package.json`, packJsonData, err => {
		console.log(err)
	});

	const dependencies = ['webpack-cli']
	const command = 'npm';
	const arguments = [
		'install',
		'--save',
		'--save-exact',
		'--loglevel',
		'error',
	].concat(dependencies);

	const child = spawn(command, arguments, { stdio: 'inherit', cwd: dirname});
	child.on('close', code => {
		console.log(code)
	});
}

module.exports = setUpFiles;