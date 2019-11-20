"use strict";

var fs = require('fs');

var generateBabel = function generateBabel(dirname, workingDirectory) {
  fs.copyFileSync("".concat(workingDirectory, "/template/.babelrc"), "".concat(dirname, "/.babelrc"));
};

module.exports = generateBabel;