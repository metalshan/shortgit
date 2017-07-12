#! /usr/bin/env node
const shell = require("shelljs");
const args = require("yargs").argv._;

if(args.length===1){
    args.unshift("-m");
}

shell.exec(`git commit ${args.join(" ")}`);
