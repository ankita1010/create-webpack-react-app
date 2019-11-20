"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getDevDependencies = function getDevDependencies(_ref) {
  var styleFlag = _ref.styleFlag;
  var devDependencies = ['@babel/core', '@babel/polyfill', '@babel/preset-react', '@babel/preset-env', "@babel/plugin-proposal-class-properties", 'babel-loader', 'css-loader', 'html-webpack-plugin', 'webpack', 'webpack-cli', 'webpack-dev-server', 'mini-css-extract-plugin', 'file-loader', 'webpack-manifest-plugin'];
  var styleDependencies = styleFlag ? ['node-sass', 'sass-loader'] : [];
  return [].concat(devDependencies, styleDependencies);
};

var _default = getDevDependencies;
exports["default"] = _default;