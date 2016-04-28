'use strict'

import Rx from 'rx'
import path from 'path'
import inquirer from 'inquirer'
import { parseDna } from './parseDna'
import { buildTable } from './tableBuilder'
import { welcomeQuestions } from './welcomeQuestions'

const parse = input => parseDna(path.resolve(__dirname, '../', input.answer))

const onError = err => {
  // handle specific error cases('ENOENT', etc)
  console.log("err:", err)
}

const onComplete = () => {
  console.log("CLI tool has finished running.")
}

const onEachAnswer = res => {
  if(res.name === 'fileName') {
    parse(res)
      .subscribe(
        buildTable,
        onError,
        onComplete
      )
  }
}

welcomeQuestions
  .catch(e => {
    console.log("e:", e)
  })
  // look in rxjs for better way to handle the onEachAnswer conditional block
  .subscribe(
    onEachAnswer,
    onError,
    onComplete
  )
