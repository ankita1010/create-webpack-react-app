#!/usr/bin/env node
const fs = require('fs');

const chalk = require('chalk');
const validation = require('./util/validation');
const HTML_TEMPLATE = require('./templates/indexHTML');
const [, , ...args] = process.argv;
if (args.length) {
	fs.mkdirSync('./' + args[0]);
	fs.writeFileSync(`${args[0]}/index.html`,HTML_TEMPLATE);
	const nameIsValid = validation.validateName(args);
	if (!nameIsValid)
		console.log(chalk.red(`\nPlease enter a valid name, no special characters allowed!\n`));
	else
		console.log(chalk.green(`\nYou have entered a name ${args}\n`));
}
else
	console.log(chalk.red('\nPlease enter a name\n'));
