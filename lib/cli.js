#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var chalk = require('chalk');

var validation = require('./util/validation');

var setupFiles = require('./setupFiles');

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

if (args.length) {
  var nameIsValid = validation.validateName(args);

  if (!nameIsValid) {
    console.log(chalk.red("\nPlease enter a valid name, no special characters allowed!\n"));
  } else {
    setupFiles("".concat(process.cwd(), "/").concat(nameIsValid), nameIsValid, __dirname);
  }
} else {
  console.log(chalk.red('\nPlease enter a name\n'));
}