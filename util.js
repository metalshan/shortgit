const shell = require("./shell");

module.exports = {
  getCurrentBranch: () => {
    let branchName = shell.execSync("git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/'").toString();
    branchName = branchName.replace("*", "").trim();
    return branchName;
  },
  getOriginUrls: () => {
    let originRemotes = shell.execSync("git remote -v | grep origin").toString();
    let originGit, originRepo;
    if (originRemotes) {
      originGit = originRemotes.split(/[\t ]/)[1];
      originRepo = originGit.replace(":", "/").replace("git@", "http://").replace(".git", "");
    }
    return {
      originGit,
      originRepo
    }
  }
}
