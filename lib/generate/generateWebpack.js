"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var _config = _interopRequireDefault(require("../template/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var requireString = "\nconst path = require(\"path\");\nconst HtmlWebpackPlugin = require(\"html-webpack-plugin\");\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst ManifestPlugin = require('webpack-manifest-plugin');\nconst manifestJson = require('./public/manifest.json');\n";
var exportString = "\n\t\t\t]\n\t\t}\n\t}\n}\nmodule.exports = config;\n";
var SASS_REGEX = /.(css|scss)$/;
var CSS_REGEX = /.css$/;

var generateWebpack = function generateWebpack(dirname, dependencies, _ref) {
  var styleFlag = _ref.styleFlag;
  var scssString = ",\n\t\t\t\t\t\t{ loader: \"sass-loader\" }";
  var styleString = ",\n\t\t\t\t{\n\t\t\t\t\ttest: ".concat(styleFlag ? SASS_REGEX : CSS_REGEX, ",\n\t\t\t\t\tuse: [\n\t\t\t\t\t\tMiniCssExtractPlugin.loader,\n\t\t\t\t\t\t{ loader: \"css-loader\" }").concat(styleFlag ? scssString : '', "\n\t\t\t\t\t]\n\t\t\t\t}");
  var vendorLibraries = "const VENDOR_LIBS = [".concat(dependencies.map(function (dep) {
    return "\"".concat(dep, "\"");
  }).join(", "), "];");
  var rules = '';
  rules = "".concat(rules).concat(styleString);
  var jsData = new Uint8Array(Buffer.from("".concat(requireString, "\n").concat(vendorLibraries, "\n").concat(_config["default"]).concat(rules).concat(exportString)));
  (0, _fs.writeFileSync)("".concat(dirname, "/webpack.config.js"), jsData);
};

var _default = generateWebpack;
exports["default"] = _default;