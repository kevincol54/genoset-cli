'use strict'

import Rx from 'rx'
import path from 'path'
import inquirer from 'inquirer'
import { parseDna } from './parseDna'
import { buildTable } from './tableBuilder'
import { welcomeQuestions } from './welcomeQuestions'

const parse = input => parseDna(path.resolve(__dirname, '../', input.answer))

const onEachAnswer = res => {
  if(res.name === 'fileName') {
    parse(res)
      .subscribeOnNext(input => {
        buildTable(input)
      })
  }
}

const onError = err => {
  console.log("err:", err)
}

const onComplete = () => {
  console.log("All genosets have finished processing.")
}

welcomeQuestions
  .subscribe(
    onEachAnswer,
    onError,
    onComplete
  )
