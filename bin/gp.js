#! /usr/bin/env node
const shell = require("../shell");
const args = require("../args").getAllArguments();
const util = require("../util");

let addedParams = [];
switch (args.length) {
  case 0:
    const branchName = util.getCurrentBranch();
    addedParams = ["origin", branchName];
    break;
  case 1:
    addedParams = ["origin", args[0]];
    break;
  default:
    addedParams = args;
}
shell.exec(["push", ...addedParams]);

