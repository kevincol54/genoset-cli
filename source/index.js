'use strict'

import Rx from 'rx'
import path from 'path'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { parseDna } from './parseDna'
import { buildTable } from './tableBuilder'
import { welcomeQuestions } from './welcomeQuestions'

const logError = (e) => console.log(chalk.bold.red(e))

const onFinalAnswer = res => {
  buildTable(res)
}

const onError = err => {
  err.code === 'ENOENT' ? logError(`Can not find specified file via this path: " ${err.path} " . Please make sure you spelled the name correctly and have moved it into the base directory of this project`) : logError(err)
}

const onComplete = () => {
  console.log(chalk.bold.green('CLI tool has finished running.'))
}

welcomeQuestions
  .filter(res => res.name === 'fileName')
  .flatMap(input => parseDna(path.resolve(__dirname, '../', input.answer)))
  .subscribe(
    onFinalAnswer,
    onError,
    onComplete
  )
