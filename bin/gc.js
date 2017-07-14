#! /usr/bin/env node
const shell = require("../shell");
const args = require("yargs").argv._;

let commitMsg = args[0];
if(args.length>1){
  commitMsg = args[1];
}

shell.exec(["commit", "-m", `"${commitMsg}"`]);
