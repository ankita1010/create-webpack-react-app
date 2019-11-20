"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var _App = _interopRequireDefault(require("../template/src/App"));

var _AppStyle = _interopRequireDefault(require("../template/src/AppStyle"));

var _index = _interopRequireDefault(require("../template/src/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateSource = function generateSource(dirname, answers, workingDirectory) {
  (0, _fs.mkdirSync)("".concat(dirname, "/src"));
  var srcFilesDetails = [{
    templateName: 'App.js',
    isBuffered: true,
    destinationName: 'App.js',
    data: (0, _App["default"])(answers.styleFlag)
  }, {
    templateName: 'AppStyle.js',
    isBuffered: true,
    destinationName: "App.".concat(answers.styleFlag ? 's' : '', "css"),
    data: _AppStyle["default"]
  }, {
    templateName: 'index.js',
    isBuffered: true,
    destinationName: 'index.js',
    data: (0, _index["default"])(answers.reduxFlag)
  }];
  srcFilesDetails.forEach(function (fileDetails) {
    var templateName = fileDetails.templateName,
        isBuffered = fileDetails.isBuffered,
        destinationName = fileDetails.destinationName,
        data = fileDetails.data;

    if (isBuffered) {
      var fileBufferedData = new Uint8Array(Buffer.from("".concat(data)));
      (0, _fs.writeFileSync)("".concat(dirname, "/src/").concat(destinationName), fileBufferedData);
    } else (0, _fs.copyFileSync)("".concat(workingDirectory, "/src/template/src/").concat(templateName), "".concat(dirname, "/src/").concat(destinationName));
  });
};

var _default = generateSource;
exports["default"] = _default;