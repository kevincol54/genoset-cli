'use strict'

import Rx from 'rx'
import path from 'path'
import inquirer from 'inquirer'
import { parseDna } from './parseDna'
import { buildTable } from './tableBuilder'
import { welcomeQuestions } from './welcomeQuestions'

const onError = err => {
  // handle specific error cases('ENOENT', etc)
  console.log("err:", err)
}

const onComplete = () => {
  console.log("CLI tool has finished running.")
}

const onEachAnswer = res => {
  buildTable(res)
}

welcomeQuestions
  .filter(res => res.name === 'fileName')
  .flatMap(input => parseDna(path.resolve(__dirname, '../', input.answer)))
  .subscribe(
    onEachAnswer,
    onError,
    onComplete
  )
