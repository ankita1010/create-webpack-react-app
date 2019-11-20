"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inquirer = require("inquirer");

var askProjectDetails = function askProjectDetails() {
  var questions = [{
    type: 'confirm',
    name: 'reduxFlag',
    message: 'Do you want redux setup?',
    "default": false
  }, {
    type: 'confirm',
    name: 'styleFlag',
    message: 'Do you want to use SASS for styling?',
    "default": false
  }];
  return (0, _inquirer.prompt)(questions);
};

var _default = askProjectDetails;
exports["default"] = _default;