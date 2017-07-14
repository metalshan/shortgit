const shell = require("./shell");

module.exports = {
  getCurrentBranch: () => {
    let branchName = shell.execSync("git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/'").toString();
    branchName = branchName.replace("*", "").trim();
    return branchName;
  },
  getOrigin: () => {

  }
}
