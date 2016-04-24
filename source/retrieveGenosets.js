'use strict'


const spawn = require('child_process').spawn;
const search = spawn('npm', ['search', 'genoset']);

let packages = []

search.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  packages.push(data)
});
search.stdout.on('end', (data) => {
  console.log("search complete");
  console.log("packages are ", packages);
})

// trying to use npm programatically
// this seems to kinda work but doesnt return the results for some reason (might be missing something here)
// let myConfigObject = {}
//
// const npm = require("npm")
// npm.load(myConfigObject, function (er) {
//   if (er) return handlError(er)
//   npm.commands.search(["genoset"], function (er, data) {
//     if (er) return commandFailed(er)
//     // command succeeded, and data might have some info
//     console.log("search complete", data);
//   })
//   // npm.registry.log.on("log", function (message) { .... })
// })
