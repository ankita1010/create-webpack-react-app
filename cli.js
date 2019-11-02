#!/usr/bin/env node
const chalk = require('chalk');
const fs = require('fs');
const HTML_TEMPLATE = require('./templates/indexHTML');
const [, , ...args] = process.argv;
if (args.length) {
    console.log(chalk.green(`You have entered a name ${args}`));
    fs.mkdirSync('./' + args[0]);
    fs.writeFileSync(`${args[0]}/index.html`,HTML_TEMPLATE)
}
else
    console.log(chalk.red('Please enter a name'));