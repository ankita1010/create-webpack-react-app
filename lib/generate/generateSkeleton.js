"use strict";

var fs = require('fs');

var path = require('path');

var generatePackJsonTemp = require('../template/package');

var generateSkeleton = function generateSkeleton(dir, name) {
  fs.mkdirSync(path.resolve(dir));
  var packJsonData = JSON.stringify(generatePackJsonTemp(name), null, 2);
  fs.writeFileSync("".concat(dir, "/package.json"), packJsonData, function (err) {
    console.log(err);
  });
};

module.exports = generateSkeleton;