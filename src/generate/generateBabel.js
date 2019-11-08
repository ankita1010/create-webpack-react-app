const fs = require('fs');

const generateBabel = (dirname, workingDirectory) => {
	fs.copyFileSync(`${workingDirectory}/template/.babelrc`, `${dirname}/.babelrc`);
}

module.exports = generateBabel;