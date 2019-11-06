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
			setUpFiles(`${__dirname}/${nameIsValid}`)
		}
}
else
	console.log(chalk.red('\nPlease enter a name\n'));





/*
const spawn = childProcess.spawn;
const dependencies = ['react', 'react-router-dom', 'webpack-cli']
const command = 'npm';
 const     arguments_ = [
        'install',
        '--save',
        '--save-exact',
        '--loglevel',
        'error',
      ].concat(dependencies);

const child = spawn(command, arguments_, { stdio: 'inherit' });
    child.on('close', code => {
      console.log(code)
    });
*/