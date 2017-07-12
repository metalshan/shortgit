#! /usr/bin/env node
const shell = require("shelljs");
const args = require("yargs").argv._;

let addParams = args.length ? args : ["."]; //default with .

shell.exec(`git add ${addParams.join(" ")}`);
