"use strict";

var fs = require('fs');

var path = require("path"); // const tile = require('../../template/src/Store.js')


module.exports = function (dirname, workingDirectory) {
  var currentPath = path.resolve(dirname);
  var reduxFileNames = ['rootReducer.js', 'actionTypes.js', 'actions.js'];
  fs.copyFileSync("".concat(workingDirectory, "/template/src/Store.js"), "".concat(currentPath, "/src/Store.js"));
  fs.mkdirSync("".concat(dirname, "/src/redux"));
  reduxFileNames.forEach(function (fileName) {
    fs.copyFileSync("".concat(workingDirectory, "/template/src/redux/").concat(fileName), "".concat(currentPath, "/src/redux/").concat(fileName));
  });
};