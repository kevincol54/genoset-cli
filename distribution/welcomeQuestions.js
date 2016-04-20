'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcomeQuestions = undefined;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prompts = _rx2.default.Observable.create(function (obs) {
  obs.onNext({
    message: 'Would you like to run your DNA through the converter?',
    type: 'confirm',
    name: 'convertDNA',
    default: true
  });

  obs.onNext({
    message: 'Please enter name of raw DNA file (dna.txt)',
    type: 'input',
    name: 'fileName',
    default: 'dna.txt'
  });

  obs.onCompleted();
});

var welcomeQuestions = exports.welcomeQuestions = _inquirer2.default.prompt(prompts).process;