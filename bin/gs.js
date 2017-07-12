#! /usr/bin/env node
const shell = require("shelljs");
const args = require("yargs").argv._;

shell.exec(`git status`);
