const spawn = require("child_process").spawn;
const execSync = require("child_process").execSync;

module.exports = {
  exec(commands) {
    spawn("git", commands, { stdio: "inherit" });
  },
  execSync(commands) {
    try {
      return execSync(commands).toString();
    } catch (e) {
      return "";
    }
  }
};
