const fs = require('fs');
const path = require('path')
const generatePackJsonTemp = require('../../template/package');

const generateSkeleton = (dir, name) => {
	fs.mkdirSync(path.resolve(dir));
	const packJsonData = JSON.stringify(generatePackJsonTemp(name), null, 2);
	fs.writeFileSync(`${dir}/package.json`, packJsonData, err => {
		console.log(err)
	});
}

module.exports = generateSkeleton;
