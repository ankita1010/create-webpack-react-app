"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var installDependencies = function installDependencies(_ref) {
  var dependencies = _ref.dependencies,
      devFlag = _ref.devFlag,
      directory = _ref.directory;
  var command = 'npm';
  var cp_arguments = devFlag ? ['install', '--save-dev', '--loglevel', 'error'].concat(dependencies) : ['install', '--save', '--save-exact', '--loglevel', 'error'].concat(dependencies);
  (0, _child_process.spawnSync)(command, cp_arguments, {
    stdio: 'inherit',
    cwd: directory
  });
};

var _default = installDependencies;
exports["default"] = _default;