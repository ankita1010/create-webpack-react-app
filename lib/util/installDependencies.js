"use strict";

var spawn = require('child_process').spawnSync;

var installDependencies = function installDependencies(_ref) {
  var dependencies = _ref.dependencies,
      devFlag = _ref.devFlag,
      directory = _ref.directory;
  var command = 'npm';
  var cp_arguments = devFlag ? ['install', '--save-dev', '--loglevel', 'error'].concat(dependencies) : ['install', '--save', '--save-exact', '--loglevel', 'error'].concat(dependencies);
  spawn(command, cp_arguments, {
    stdio: 'inherit',
    cwd: directory
  });
};

module.exports = installDependencies;