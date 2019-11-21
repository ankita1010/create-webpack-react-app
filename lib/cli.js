#!/usr/bin/env node
"use strict";

var _chalk = require("chalk");

require("@babel/polyfill");

var _validation = require("./util/validation");

var _setupFiles = _interopRequireDefault(require("./setupFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

if (args.length) {
  var nameIsValid = (0, _validation.validateName)(args);

  if (!nameIsValid) {
    console.log((0, _chalk.red)("\nPlease enter a valid name, no special characters allowed!\n"));
  } else {
    (0, _setupFiles["default"])("".concat(process.cwd(), "/").concat(nameIsValid), nameIsValid, __dirname);
  }
} else {
  console.log((0, _chalk.red)('\nPlease enter a project name\n'));
}