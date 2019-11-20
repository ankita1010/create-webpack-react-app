"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getDependencies = function getDependencies(_ref) {
  var reduxFlag = _ref.reduxFlag;
  var dependencies = ['react', 'react-dom'];
  var reduxDependencies = reduxFlag ? ['redux', 'redux-thunk', 'react-redux'] : []; // const routerDependencies = routerFlag ? ['react-router-dom'] : [];

  return [].concat(dependencies, reduxDependencies);
};

var _default = getDependencies;
exports["default"] = _default;