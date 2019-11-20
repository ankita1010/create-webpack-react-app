"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var _manifest = _interopRequireDefault(require("../template/manifest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generatePublic = function generatePublic(dirname, nameString, workingDirectory) {
  (0, _fs.mkdirSync)("".concat(dirname, "/public"));
  (0, _fs.mkdirSync)("".concat(dirname, "/public/assets"));
  var publicFileNames = ["index.html", "index.css"];
  publicFileNames.forEach(function (filename) {
    (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/public/").concat(filename), "".concat(dirname, "/public/").concat(filename));
  }); //copying images

  (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/public/assets/webpack.png"), "".concat(dirname, "/public/assets/webpack.png"));
  (0, _fs.copyFileSync)("".concat(workingDirectory, "/template/public/assets/react.png"), "".concat(dirname, "/public/assets/react.png")); // adding manifest.json

  var manifestData = JSON.stringify((0, _manifest["default"])(nameString), null, 2);
  (0, _fs.writeFileSync)("".concat(dirname, "/public/manifest.json"), manifestData, function (err) {
    console.log(err);
  });
};

var _default = generatePublic;
exports["default"] = _default;