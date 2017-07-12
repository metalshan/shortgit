#! /usr/bin/env node
const shell = require("../shell");
const args = require("yargs").argv._;
let addedParams = "";
switch(args.length){
    case 0:
        let branchName = shell.exec("branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/'".split(" "));
        branchName = branchName.replace("*", "").trim();
        addedParams = ["origin", branchName];
        break;
    case 1:
        addedParams = ["origin", args[0]];
        break;
    default:
        addedParams = args;
}
shell.exec(["pull", ...addedParams]);
