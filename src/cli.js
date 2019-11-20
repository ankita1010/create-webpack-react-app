#!/usr/bin/env node
const chalk = require('chalk');
import '@babel/polyfill'
const validation = require('./util/validation');
const setupFiles = require('./setupFiles');

const [, , ...args] = process.argv;

if (args.length) {
	const nameIsValid = validation.validateName(args);
	if (!nameIsValid) {
		console.log(chalk.red(`\nPlease enter a valid name, no special characters allowed!\n`));
	} else {
		setupFiles(`${process.cwd()}/${nameIsValid}`, nameIsValid, __dirname);
	}
} else {
	console.log(chalk.red('\nPlease enter a name\n'));
}
