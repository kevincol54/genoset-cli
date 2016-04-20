'use strict'

import Rx from 'rx'
import { parse } from 'dna2json'
import { readFileSync } from 'fs'
const dnaParser = Rx.Observable.fromCallback(parse)

const parseDna = filePath => dnaParser(readFileSync(filePath, 'utf8'))

export { parseDna }
