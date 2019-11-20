"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var _path = require("path");

var _package = _interopRequireDefault(require("../template/package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateSkeleton = function generateSkeleton(dir, name) {
  (0, _fs.mkdirSync)((0, _path.resolve)(dir));
  var packJsonData = JSON.stringify((0, _package["default"])(name), null, 2);
  (0, _fs.writeFileSync)("".concat(dir, "/package.json"), packJsonData, function (err) {
    console.log(err);
  });
};

var _default = generateSkeleton;
exports["default"] = _default;