'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTable = undefined;

var _rowBuilder = require('./rowBuilder');

var _rowBuilder2 = _interopRequireDefault(_rowBuilder);

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildTable = function buildTable(input) {
  var table = new _cliTable2.default({
    head: ['Genoset', 'Results', 'Description'],
    colWidths: [10, 20, 100]
  });

  (0, _rowBuilder2.default)(table, input);
  process.stdout.write(table.toString() + '\n');
};

exports.buildTable = buildTable;