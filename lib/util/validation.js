"use strict";

var specialCharRegEx = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/g;

exports.validateName = function (name) {
  var nameString = name.join(' ');
  var hasSpecialChar = nameString.match(specialCharRegEx);
  return hasSpecialChar ? null : nameString;
};

exports.throwErrorMessage = function (isNodeIncompatible, nameString) {
  if (isNodeIncompatible) return "\nOops! It seems like your node version is old. Upgrade to at least node v7 to continue this operation!\n\n";
  return "\nOops! A directory named ".concat(nameString, " already exists in the current path. Please enter some other name!\n\n");
};