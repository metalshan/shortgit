#! /usr/bin/env node
const shell = require("../shell");
const args = require("../args").getAllArguments();

shell.exec(["clone", ...args]);
