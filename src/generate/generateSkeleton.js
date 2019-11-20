import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import generatePackJsonTemp from '../template/package';

const generateSkeleton = (dir, name) => {
	mkdirSync(resolve(dir));
	const packJsonData = JSON.stringify(generatePackJsonTemp(name), null, 2);
	writeFileSync(`${dir}/package.json`, packJsonData, err => {
		console.log(err)
	});
}

export default generateSkeleton;
