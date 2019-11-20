"use strict";

var generateSkeleton = require('./generate/generateSkeleton');

var generatePublic = require('./generate/generatePublic');

var generateSource = require('./generate/generateSource');

var generateBabel = require('./generate/generateBabel');

var generateWebpack = require('./generate/generateWebpack');

var generateReduxSetup = require('./generate/generateReduxSetup');

var installDependencies = require('./util/installDependencies');

var askProjectDetails = require('./util/askProjectDetails');

var getDependencies = require('./util/getDependencies');

var getDevDependencies = require('./util/getDevDependencies');

var chalk = require('chalk');

var fs = require('fs');

var validation = require('./util/validation');

var setupFiles = function setupFiles(dirname, nameString, workingDirectory) {
  var dirAlreadyExists, nodeVersion, isNodeIncompatible, answers, dependencies, devDependencies;
  return regeneratorRuntime.async(function setupFiles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dirAlreadyExists = fs.existsSync("".concat(dirname));
          nodeVersion = process.version;
          isNodeIncompatible = parseFloat(nodeVersion.substr(1, 5)) < 7;

          if (dirAlreadyExists || isNodeIncompatible) {
            console.log(chalk.red(validation.throwErrorMessage(isNodeIncompatible, nameString)));
            process.exit();
          }

          console.log(chalk.cyanBright("\n Hola!\uD83D\uDE04 Please take a moment to answer a few questions..\n\t"));
          _context.next = 7;
          return regeneratorRuntime.awrap(askProjectDetails());

        case 7:
          answers = _context.sent;
          generateSkeleton(dirname, nameString);
          generatePublic(dirname, nameString, workingDirectory);
          generateSource(dirname, answers, workingDirectory);

          if (answers.reduxFlag) {
            generateReduxSetup(dirname, workingDirectory);
          } //TO DO
          //add url-loader


          generateBabel(dirname, workingDirectory);
          dependencies = getDependencies(answers);
          console.log(chalk.green('\nInstalling dependencies. This might take a while..😴\n\n'));
          generateWebpack(dirname, dependencies, answers);
          devDependencies = getDevDependencies(answers);
          installDependencies({
            dependencies: devDependencies,
            devFlag: true,
            directory: dirname
          });
          installDependencies({
            dependencies: dependencies,
            devFlag: false,
            directory: dirname
          });
          console.log(chalk.green("\n\tTo run your project - \n\n\n\t\t$ cd ".concat(nameString, "\n\t\t$ npm start\n\n\t")));
          console.log(chalk.yellowBright("\n\t\uD83D\uDCBB Happy coding fella! \uD83D\uDE0E\n\t\n\t"));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = setupFiles;