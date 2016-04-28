'use strict';

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _parseDna = require('./parseDna');

var _tableBuilder = require('./tableBuilder');

var _welcomeQuestions = require('./welcomeQuestions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onError = function onError(err) {
  // handle specific error cases('ENOENT', etc)
  console.log("err:", err);
};

var onComplete = function onComplete() {
  console.log("CLI tool has finished running.");
};

var onEachAnswer = function onEachAnswer(res) {
  (0, _tableBuilder.buildTable)(res);
};

_welcomeQuestions.welcomeQuestions.filter(function (res) {
  return res.name === 'fileName';
}).flatMap(function (input) {
  return (0, _parseDna.parseDna)(_path2.default.resolve(__dirname, '../', input.answer));
}).subscribe(onEachAnswer, onError, onComplete);