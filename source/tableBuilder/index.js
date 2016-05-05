'use strict'

import rows from './rowBuilder'
import Table from 'cli-table'

const buildTable = (input) => {
  var table = new Table({
    head: ['Genoset', 'Results', 'Description'],
    colWidths: [10, 20, 100]
  })

  rows(table, input)
  process.stdout.write(table.toString() + '\n')
}

export { buildTable }