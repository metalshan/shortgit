#! /usr/bin/env node
const shell = require("../shell");
const args = require("yargs").argv._;

shell.exec(["clone", ...args]);
