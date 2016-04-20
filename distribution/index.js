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

var parse = function parse(input) {
  return (0, _parseDna.parseDna)(_path2.default.resolve(__dirname, '../', input.answer));
};

var onEachAnswer = function onEachAnswer(res) {
  if (res.name === 'fileName') {
    parse(res).subscribeOnNext(function (input) {
      (0, _tableBuilder.buildTable)(input);
    });
  }
};

var onError = function onError(err) {
  console.log("err:", err);
};

var onComplete = function onComplete() {
  console.log("All genosets have finished processing.");
};

_welcomeQuestions.welcomeQuestions.subscribe(onEachAnswer, onError, onComplete);