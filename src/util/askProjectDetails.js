const inquirer = require('inquirer');

const askProjectDetails = () => {
	const questions = [
		{
			type: 'confirm',
			name: 'reduxFlag',
			message: 'Do you want redux setup?',
			default: false
		},
		{
			type: 'confirm',
			name: 'styleFlag',
			message: 'Do you want to use scss for styling?',
			default: false
		}
	];
	return inquirer.prompt(questions);
}

module.exports = askProjectDetails;