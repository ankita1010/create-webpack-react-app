"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var generateBabel = function generateBabel(dirname, workingDirectory) {
  (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/.babelrc"), "".concat(dirname, "/.babelrc"));
};

var _default = generateBabel;
exports["default"] = _default;