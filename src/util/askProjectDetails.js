const inquirer = require('inquirer');

const askProjectDetails = () => {
	const questions = [
		{
			type: 'confirm',
			name: 'reduxFlag',
			message: 'Do you want redux setup?',
			default: false
		}, {
			type: 'confirm',
			name: 'routerFlag',
			message: 'Shall I install react-router as well?',
			default: false,
		}, {
			type: 'confirm',
			name: 'imageOptiFlag',
			message: 'Shall I add the configuration to parse images as dataURL if file size is less than 8 MB (configurable)?',
			default: false,
		}, {
			type: 'confirm',
			name: 'styleFlag',
			message: 'Do you want to use scss for styling?',
			default: false
		}
	];
	return inquirer.prompt(questions);
}

module.exports = askProjectDetails;