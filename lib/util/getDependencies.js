"use strict";

var getDependencies = function getDependencies(_ref) {
  var reduxFlag = _ref.reduxFlag;
  var dependencies = ['react', 'react-dom'];
  var reduxDependencies = reduxFlag ? ['redux', 'redux-thunk', 'react-redux'] : []; // const routerDependencies = routerFlag ? ['react-router-dom'] : [];

  return [].concat(dependencies, reduxDependencies);
};

module.exports = getDependencies;