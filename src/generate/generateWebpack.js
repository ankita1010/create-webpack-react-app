const fs = require("fs");
const config = require("../../template/config");

const requireString = `
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const manifestJson = require('./src/manifest.json');
`;
const exportString = `
			]
		}
	}
}
module.exports = config;
`;
const styleString = `,
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				}`;

const generateWebpack = (dirname, dependencies, { styleFlag }) => {
  const vendorLibraries = `const VENDOR_LIBS = [${dependencies
    .map(dep => `"${dep}"`)
    .join(", ")}];`;

	let rules = '';
  if (styleFlag) {
    rules = `${rules}${styleString}`;
  }
  const jsData = new Uint8Array(
    Buffer.from(
      `${requireString}
${vendorLibraries}
${config}${rules}${exportString}`
    )
  );
  fs.writeFileSync(`${dirname}/webpack.config.js`, jsData);
};

module.exports = generateWebpack;
