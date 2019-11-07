#!/usr/bin/env node
const chalk = require('chalk');

const validation = require('./src/util/validation');
const setupFiles = require('./src/setupFiles');

const [, , ...args] = process.argv;

if (args.length) {
	const nameIsValid = validation.validateName(args);
	if (!nameIsValid) {
		console.log(chalk.red(`\nPlease enter a valid name, no special characters allowed!\n`));
	} else {
		setupFiles(`${__dirname}/${nameIsValid}`, nameIsValid);
	}
} else {
	console.log(chalk.red('\nPlease enter a name\n'));
}
