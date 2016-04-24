'use strict'

var shellHelper = require('utils/shellHelper');

shellHelper.exec('npm search genost', (resp) => {
  console.log("genosets retrieved:", resp);
})
