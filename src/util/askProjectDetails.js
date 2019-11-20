import { prompt } from 'inquirer';

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
			message: 'Do you want to use SASS for styling?',
			default: false
		}
	];
	return prompt(questions);
}

export default askProjectDetails;