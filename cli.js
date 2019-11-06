#!/usr/bin/env node

const childProcess = require('child_process');

const chalk = require('chalk');

const validation = require('./util/validation');
const setUpFiles = require('./util/fileSetup');

const [, , ...args] = process.argv;

if (args.length) {
	const nameIsValid = validation.validateName(args);
	if (!nameIsValid)
		console.log(chalk.red(`\nPlease enter a valid name, no special characters allowed!\n`));
	else
		{
			setUpFiles(`${__dirname}/${nameIsValid}`, nameIsValid)
		}
}
else
	console.log(chalk.red('\nPlease enter a name\n'));

