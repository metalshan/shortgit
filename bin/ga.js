#! /usr/bin/env node
const shell = require("../shell");
const args = require("yargs").argv._;

let addParams = args.length ? args : ["."]; //default with .

shell.exec(["add", ...addParams]);
