import { copyFileSync } from 'fs';

const generateBabel = (dirname, workingDirectory) => {
	copyFileSync(`${workingDirectory}/template/.babelrc`, `${dirname}/.babelrc`);
}

export default generateBabel;