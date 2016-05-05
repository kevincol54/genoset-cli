'use strict'

import Rx from 'rx'
import path from 'path'
import inquirer from 'inquirer'

const prompts = Rx.Observable.create(obs => {
  obs.onNext({
    message: 'Would you like to begin analyzing your DNA?',
    type: 'confirm',
    name: 'convertDNA',
    default: true
  })

  obs.onNext({
    message: 'Please enter name of raw DNA file (dna.txt)',
    type: 'input',
    name: 'fileName',
    default: 'dna.txt'
  })

  obs.onCompleted()
})

const welcomeQuestions = inquirer.prompt(prompts).process.catch(e => Rx.Observable.throw(e))

export { welcomeQuestions }
