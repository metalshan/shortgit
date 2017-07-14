const spawn = require("child_process").spawn;
const exec = require("child_process").exec;
const execSync = require("child_process").execSync;

module.exports = {
    exec(commands){
        spawn("git", commands, {stdio:'inherit'})
    },
    execSync
}