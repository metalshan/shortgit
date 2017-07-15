#! /usr/bin/env node
const util = require("../util");

let branchName = util.getCurrentBranch();
const { originRepo } = util.getOriginUrls();
const args = require("../args").getAllArguments();
let baseBranch = "master";
switch (args.length) {
  case 1:
    baseBranch = args[0];
    break;
  case 2:
    baseBranch = args[1];
    branchName = args[0];
    break;
}
const compareUrl = `${originRepo}/compare/${baseBranch}...${branchName}`;
require("openurl").open(compareUrl);
