const spawn = require("child_process").spawn;
const exec = require("child_process").exec;

module.exports = {
    exec(commands){
        console.log(commands)
        spawn("git", commands, {stdio:'inherit'})
    }
}