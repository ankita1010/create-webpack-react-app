"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwErrorMessage = exports.validateName = void 0;
var specialCharRegEx = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;

var validateName = function validateName(name) {
  var nameString = name.join(' ');
  var hasSpecialChar = nameString.match(specialCharRegEx);
  return hasSpecialChar ? null : nameString;
};

exports.validateName = validateName;

var throwErrorMessage = function throwErrorMessage(isNodeIncompatible, nameString) {
  if (isNodeIncompatible) return "\nOops! It seems like your node version is old. Upgrade to at least node v7 to continue this operation!\n\n";
  return "\nOops! A directory named ".concat(nameString, " already exists in the current path. Please enter some other name!\n\n");
};

exports.throwErrorMessage = throwErrorMessage;