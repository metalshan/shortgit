const args = require("yargs").argv;

module.exports = {
  getAllArguments: () => {
    const [, , ...argString] = process.argv;
    return argString;
  },
  getArgValue: (arg) => {
    let argV = args[arg];
    if (!argV) {
      if (args._[arg]) {
        argV = true;
      }
    }
    return argV;
  }
};
