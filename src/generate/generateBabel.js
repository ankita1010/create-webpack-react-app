const fs = require('fs');

const generateBabel = (dirname) => {
	fs.copyFileSync(`./template/.babelrc`, `${dirname}/.babelrc`);
}

module.exports = generateBabel;