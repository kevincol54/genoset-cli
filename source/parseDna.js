'use strict'

import Rx from 'rx'
import chalk from 'chalk'
import { readFile } from 'fs'
import { parse } from 'dna2json'
const dnaParser = Rx.Observable.fromCallback(parse)
const fileContents = Rx.Observable.fromNodeCallback(readFile)

const processingDnaLog = () => console.log(chalk.bold.green('Processing DNA now...'))

const parseDna = filePath => fileContents(filePath, 'utf8')
  .tap(processingDnaLog)
  .flatMap(file => dnaParser(file))
  .catch(e => Rx.Observable.throw(e))

export { parseDna }
