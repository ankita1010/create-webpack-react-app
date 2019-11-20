"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _fs = require("fs");

var _path = require("path");

// const tile = require('../../template/src/Store.js')
function _default(dirname, workingDirectory) {
  var currentPath = (0, _path.resolve)(dirname);
  var reduxFileNames = ['rootReducer.js', 'actionTypes.js', 'actions.js'];
  (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/src/Store.js"), "".concat(currentPath, "/src/Store.js"));
  (0, _fs.mkdirSync)("".concat(dirname, "/src/redux"));
  reduxFileNames.forEach(function (fileName) {
    (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/src/redux/").concat(fileName), "".concat(currentPath, "/src/redux/").concat(fileName));
  });
}