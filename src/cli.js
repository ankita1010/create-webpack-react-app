#!/usr/bin/env node
import { red } from 'chalk';
import '@babel/polyfill';
import { validateName } from './util/validation';
import setupFiles from './setupFiles';

const [, , ...args] = process.argv;

if (args.length) {
	const nameIsValid = validateName(args);
	if (!nameIsValid) {
		console.log(red(`\nPlease enter a valid name, no special characters allowed!\n`));
	} else {
		setupFiles(`${process.cwd()}/${nameIsValid}`, nameIsValid, __dirname);
	}
} else {
	console.log(red('\nPlease enter a name\n'));
}
