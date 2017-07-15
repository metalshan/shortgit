#! /usr/bin/env node
const shell = require("../shell");
const args = require("../args").getAllArguments();

let addParams = args.length ? args : ["."]; //default with .

shell.exec(["add", ...addParams]);
