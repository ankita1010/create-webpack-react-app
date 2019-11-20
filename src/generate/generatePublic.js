import { mkdirSync, copyFileSync, writeFileSync } from "fs";
import generateManifestTemp from "../template/manifest";

const generatePublic = (dirname, nameString, workingDirectory) => {
	mkdirSync(`${dirname}/public`);
	mkdirSync(`${dirname}/public/assets`);
	const publicFileNames = ["index.html", "index.css"];
	publicFileNames.forEach(filename => {
		copyFileSync(
			`${workingDirectory}/template/public/${filename}`,
			`${dirname}/public/${filename}`
		);
	});
	//copying images
	copyFileSync(
		`${workingDirectory}/template/public/assets/webpack.png`,
		`${dirname}/public/assets/webpack.png`
	);

	copyFileSync(
		`${workingDirectory}/template/public/assets/react.png`,
		`${dirname}/public/assets/react.png`
	);

	// adding manifest.json
	const manifestData = JSON.stringify(
		generateManifestTemp(nameString),
		null,
		2
	);
	writeFileSync(`${dirname}/public/manifest.json`, manifestData, err => {
		console.log(err);
	});
};

export default generatePublic;
