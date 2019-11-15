"use strict";

var fs = require('fs');

var generateManifestTemp = require('../template/manifest');

var generatePublic = function generatePublic(dirname, nameString, workingDirectory) {
  fs.mkdirSync("".concat(dirname, "/public"));
  var publicFileNames = ['index.html', 'index.css'];
  console.log(workingDirectory);
  publicFileNames.forEach(function (filename) {
    fs.copyFileSync("".concat(workingDirectory, "/template/public/").concat(filename), "".concat(dirname, "/public/").concat(filename));
  }); // adding manifest.json

  var manifestData = JSON.stringify(generateManifestTemp(nameString), null, 2);
  fs.writeFileSync("".concat(dirname, "/public/manifest.json"), manifestData, function (err) {
    console.log(err);
  });
};

module.exports = generatePublic;