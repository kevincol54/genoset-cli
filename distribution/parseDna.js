'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDna = undefined;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _dna2json = require('dna2json');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileContents = _rx2.default.Observable.fromNodeCallback(_fs.readFile);
var dnaParser = _rx2.default.Observable.fromCallback(_dna2json.parse);

var parseDna = function parseDna(filePath) {
  return fileContents(filePath, 'utf8').flatMap(function (file) {
    return dnaParser(file);
  }).catch(function (e) {
    return _rx2.default.Observable.throw(e);
  });
};

exports.parseDna = parseDna;