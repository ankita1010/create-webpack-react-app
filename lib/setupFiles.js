"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _generateSkeleton = _interopRequireDefault(require("./generate/generateSkeleton"));

var _generatePublic = _interopRequireDefault(require("./generate/generatePublic"));

var _generateSource = _interopRequireDefault(require("./generate/generateSource"));

var _generateBabel = _interopRequireDefault(require("./generate/generateBabel"));

var _generateWebpack = _interopRequireDefault(require("./generate/generateWebpack"));

var _generateReduxSetup = _interopRequireDefault(require("./generate/generateReduxSetup"));

var _installDependencies = _interopRequireDefault(require("./util/installDependencies"));

var _askProjectDetails = _interopRequireDefault(require("./util/askProjectDetails"));

var _getDependencies = _interopRequireDefault(require("./util/getDependencies"));

var _getDevDependencies = _interopRequireDefault(require("./util/getDevDependencies"));

var _chalk = require("chalk");

var _fs = require("fs");

var _validation = require("./util/validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setupFiles = function setupFiles(dirname, nameString, workingDirectory) {
  var dirAlreadyExists, nodeVersion, isNodeIncompatible, answers, dependencies, devDependencies;
  return regeneratorRuntime.async(function setupFiles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dirAlreadyExists = (0, _fs.existsSync)("".concat(dirname));
          nodeVersion = process.version;
          isNodeIncompatible = parseFloat(nodeVersion.substr(1, 5)) < 7;

          if (dirAlreadyExists || isNodeIncompatible) {
            console.log((0, _chalk.red)((0, _validation.throwErrorMessage)(isNodeIncompatible, nameString)));
            process.exit();
          }

          console.log((0, _chalk.cyanBright)("\n Hola!\uD83D\uDE04 Please take a moment to answer a few questions..\n\t"));
          _context.next = 7;
          return regeneratorRuntime.awrap((0, _askProjectDetails["default"])());

        case 7:
          answers = _context.sent;
          (0, _generateSkeleton["default"])(dirname, nameString);
          (0, _generatePublic["default"])(dirname, nameString, workingDirectory);
          (0, _generateSource["default"])(dirname, answers, workingDirectory);

          if (answers.reduxFlag) {
            (0, _generateReduxSetup["default"])(dirname, workingDirectory);
          }

          (0, _generateBabel["default"])(dirname, workingDirectory);
          dependencies = (0, _getDependencies["default"])(answers);
          console.log((0, _chalk.green)('\nInstalling dependencies. This might take a while..😴\n\n'));
          (0, _generateWebpack["default"])(dirname, dependencies, answers);
          devDependencies = (0, _getDevDependencies["default"])(answers);
          (0, _installDependencies["default"])({
            dependencies: devDependencies,
            devFlag: true,
            directory: dirname
          });
          (0, _installDependencies["default"])({
            dependencies: dependencies,
            devFlag: false,
            directory: dirname
          });
          console.log((0, _chalk.green)("\n\tTo run your project - \n\n\n\t\t$ cd ".concat(nameString, "\n\t\t$ npm start\n\n\t")));
          console.log((0, _chalk.yellowBright)("\n\t\uD83D\uDCBB Happy coding fella! \uD83D\uDE0E\n\t\n\t"));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = setupFiles;
exports["default"] = _default;