'use strict';

// const shellHelper = require('./utils/shellHelper');

// shellHelper.exec('npm search genoset', (resp) => {
//   console.log("genosets retrieved:", arguments);
// })

var spawn = require('child_process').spawn;
var search = spawn('npm', ['search', 'genoset']);

var packages = [];

search.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
  packages.push(data);
});
search.stdout.on('end', function (data) {
  console.log("search complete");
  console.log("packages are ", packages);
});

var myConfigObject = {};

var npm = require("npm");
npm.load(myConfigObject, function (er) {
  if (er) return handlError(er);
  npm.commands.search(["genoset"], function (er, data) {
    if (er) return commandFailed(er);
    // command succeeded, and data might have some info
    console.log("search complete", data);
  });
  // npm.registry.log.on("log", function (message) { .... })
});