import { writeFileSync } from "fs";
import config from "../template/config";

const requireString = `
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const manifestJson = require('./public/manifest.json');
`;
const exportString = `
			]
		}
	}
}
module.exports = config;
`;
const SASS_REGEX = /.(css|scss)$/;
const CSS_REGEX = /.css$/;

const generateWebpack = (dirname, dependencies, { styleFlag }) => {
	const scssString = `,
						{ loader: "sass-loader" }`
	const styleString = `,
				{
					test: ${styleFlag ? SASS_REGEX : CSS_REGEX},
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader" }${styleFlag ? scssString : ''}
					]
				}`;
	const vendorLibraries = `const VENDOR_LIBS = [${dependencies
		.map(dep => `"${dep}"`)
		.join(", ")}];`;

	let rules = '';
	rules = `${rules}${styleString}`;
	const jsData = new Uint8Array(
		Buffer.from(
			`${requireString}
${vendorLibraries}
${config}${rules}${exportString}`
		)
	);
	writeFileSync(`${dirname}/webpack.config.js`, jsData);
};

export default generateWebpack;
