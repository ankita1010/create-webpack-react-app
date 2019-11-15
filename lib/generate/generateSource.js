"use strict";

var fs = require('fs');

var AppJsConfig = require('../template/src/App');

var AppStyleConfig = require('../template/src/AppStyle');

var IndexConfig = require('../template/src/index');

var generateSource = function generateSource(dirname, answers, workingDirectory) {
  fs.mkdirSync("".concat(dirname, "/src"));
  var srcFilesDetails = [{
    templateName: 'App.js',
    isBuffered: true,
    destinationName: 'App.js',
    data: AppJsConfig(answers.styleFlag)
  }, {
    templateName: 'AppStyle.js',
    isBuffered: true,
    destinationName: "App.".concat(answers.styleFlag ? 's' : '', "css"),
    data: AppStyleConfig
  }, {
    templateName: 'index.js',
    isBuffered: true,
    destinationName: 'index.js',
    data: IndexConfig(answers.reduxFlag)
  }];
  srcFilesDetails.forEach(function (fileDetails) {
    var templateName = fileDetails.templateName,
        isBuffered = fileDetails.isBuffered,
        destinationName = fileDetails.destinationName,
        data = fileDetails.data;

    if (isBuffered) {
      var fileBufferedData = new Uint8Array(Buffer.from("".concat(data)));
      fs.writeFileSync("".concat(dirname, "/src/").concat(destinationName), fileBufferedData);
    } else fs.copyFileSync("".concat(workingDirectory, "/src/template/src/").concat(templateName), "".concat(dirname, "/src/").concat(destinationName));
  });
};

module.exports = generateSource;