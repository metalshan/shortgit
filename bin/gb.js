#! /usr/bin/env node
var colors = require("colors/safe");
const shell = require("../shell");
const util = require("../util");
const arg = require("../args").getArgValue;
const args = require("../args").getAllArguments();

const desc = arg("desc");
const currentBranchName = util.getCurrentBranch();

if (desc) {
  if (desc === true) {
    const output = shell.execSync("git branch");
    const branches = output.split(/[ \n \t]/).filter(b => {
      if (b && b !== "*") {
        return b;
      }
    });
    branches.forEach(b => {
      let branchDesc = shell.execSync(`git config desc.b.${b}`).trim();
      if (b === currentBranchName) {
        console.log(colors.green(`* ${b}  ->  ${branchDesc}`));
      } else {
        console.log(`${b}  ->  ${branchDesc}`);
      }
    });
  } else {
    shell.exec(["config", `desc.b.${currentBranchName}`, arg("desc")]);
  }

} else {
  shell.exec(["branch", ...args]);

}
