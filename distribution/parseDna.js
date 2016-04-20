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

var parseDna = function parseDna(filePath) {
  var dnaParser = _rx2.default.Observable.fromCallback(_dna2json.parse);
  return dnaParser((0, _fs.readFileSync)(filePath, 'utf8'));
};

exports.parseDna = parseDna;