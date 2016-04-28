'use strict'

import Rx from 'rx'
import { parse } from 'dna2json'
import { readFile } from 'fs'
const fileContents = Rx.Observable.fromNodeCallback(readFile)
const dnaParser = Rx.Observable.fromCallback(parse)

const parseDna = filePath => fileContents(filePath, 'utf8')
  .flatMap(file => {
    return dnaParser(file)
  })
  .catch(e => Rx.Observable.throw(e))

export { parseDna }
